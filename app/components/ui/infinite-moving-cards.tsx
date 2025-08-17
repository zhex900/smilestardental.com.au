"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
  children,
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const MAX_REPEATS = 10;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const dragWrapperRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMomentum, setIsMomentum] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const dragOffsetRef = React.useRef(0);
  const dragStartXRef = React.useRef(0);
  const dragStartOffsetRef = React.useRef(0);
  const rafIdRef = React.useRef<number | null>(null);

  const [cycleWidth, setCycleWidth] = useState<number | null>(null);
  const [repeatCount, setRepeatCount] = useState<number>(3);

  // Count original (unique) children; used for measuring one logical cycle
  const originalsCount = React.useMemo(
    () => React.Children.toArray(children).length,
    [children]
  );

  // noop; originalsCount used for measuring a single logical cycle

  // velocity/momentum
  const lastMoveXRef = React.useRef(0);
  const lastMoveTimeRef = React.useRef(0);
  const velocityRef = React.useRef(0); // px/ms
  const momentumRafRef = React.useRef<number | null>(null);
  const momentumLastTimeRef = React.useRef<number | null>(null);
  const activeInputRef = React.useRef<"touch" | "pointer" | null>(null);
  const docTouchMoveRef = React.useRef<((e: TouchEvent) => void) | null>(null);
  const docTouchEndRef = React.useRef<((e: TouchEvent) => void) | null>(null);
  const touchListenersActiveRef = React.useRef(false);

  // drag activation tracking
  const pointerDownRef = React.useRef(false);
  const dragStartedRef = React.useRef(false);
  const DRAG_THRESHOLD = 2; // px, lower for better touch responsiveness

  function cancelMomentum() {
    if (momentumRafRef.current) cancelAnimationFrame(momentumRafRef.current);
    momentumRafRef.current = null;
    momentumLastTimeRef.current = null;
    setIsMomentum(false);
    velocityRef.current = 0;
  }

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      setStart(true);
    }
  }

  // Wrap within [-cycleWidth, 0] robustly using modulo so fast drags/momentum never exceed bounds
  const wrapOffset = (value: number) => {
    if (!cycleWidth || cycleWidth <= 0) return value;
    const cw = cycleWidth;
    const mod = ((value % cw) + cw) % cw; // 0..cw
    return mod - cw; // -cw..0
  };

  // Auto-scroll when not dragging, no momentum, and not hovering
  const isDraggingRef = React.useRef(false);
  const isMomentumRef = React.useRef(false);
  const isHoveringRef = React.useRef(false);
  const isInViewRef = React.useRef(true);
  const cycleWidthRef = React.useRef<number | null>(null);
  const speedRef = React.useRef<typeof speed>(speed);
  const directionRef = React.useRef<typeof direction>(direction);
  const updateTranslateX = (next: number) => {
    dragOffsetRef.current = next;
    if (dragWrapperRef.current) {
      dragWrapperRef.current.style.transform = `translate3d(${next}px, 0, 0)`;
    }
  };

  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);
  useEffect(() => {
    isMomentumRef.current = isMomentum;
  }, [isMomentum]);
  useEffect(() => {
    isHoveringRef.current = isHovering;
  }, [isHovering]);
  useEffect(() => {
    cycleWidthRef.current = cycleWidth;
  }, [cycleWidth]);
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);
  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    if (!start) return;
    let autoRaf: number | null = null;
    let lastTs: number | null = null;

    const step = (ts: number) => {
      if (!isInViewRef.current) {
        // keep clock in sync while offscreen without moving
        lastTs = ts;
        autoRaf = requestAnimationFrame(step);
        return;
      }
      const cw = cycleWidthRef.current;
      if (!cw || cw <= 0) {
        lastTs = ts;
        autoRaf = requestAnimationFrame(step);
        return;
      }

      const durationMs =
        speedRef.current === "fast"
          ? 20000
          : speedRef.current === "slow"
            ? 80000
            : 40000;
      const pxPerMs = cw / durationMs;
      const dir = directionRef.current === "left" ? -1 : 1;

      if (
        isDraggingRef.current ||
        isMomentumRef.current ||
        (pauseOnHover && isHoveringRef.current)
      ) {
        lastTs = ts;
      } else {
        const prev = lastTs ?? ts;
        const dt = Math.max(1, ts - prev);
        const next = wrapOffset(dragOffsetRef.current + dir * pxPerMs * dt);
        updateTranslateX(next);
        lastTs = ts;
      }
      autoRaf = requestAnimationFrame(step);
    };

    autoRaf = requestAnimationFrame(step);
    return () => {
      if (autoRaf) cancelAnimationFrame(autoRaf);
    };
  }, [start, pauseOnHover]);

  // Re-compute metrics on resize (item widths can change responsively)
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || originalsCount == null || originalsCount === 0) return;

    const computeMetrics = () => {
      const firstCycle = Array.from(scroller.children).slice(
        0,
        originalsCount
      ) as HTMLElement[];
      if (firstCycle.length === 0) return;
      const last = firstCycle[firstCycle.length - 1];
      const baseWidth = last.offsetLeft + last.offsetWidth; // covers gaps

      let gapWidth = 0;
      if (firstCycle.length > 1) {
        const first = firstCycle[0];
        const second = firstCycle[1];
        gapWidth = Math.max(
          0,
          second.offsetLeft - (first.offsetLeft + first.offsetWidth)
        );
      }

      const measuredCycleWidth = baseWidth + gapWidth;
      setCycleWidth(measuredCycleWidth);

      // Ensure enough rendered cycles to cover viewport seamlessly
      const container = containerRef.current;
      if (container) {
        const containerWidth = container.getBoundingClientRect().width;
        const minRepeats = Math.max(
          2,
          2 + Math.ceil(containerWidth / measuredCycleWidth)
        );
        setRepeatCount(Math.min(minRepeats, MAX_REPEATS));
      }
    };

    computeMetrics();

    const ro = new ResizeObserver(() => computeMetrics());
    ro.observe(scroller);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", computeMetrics);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", computeMetrics);
    };
  }, [originalsCount]);

  // Pause auto-scroll when offscreen
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isInViewRef.current = !!entry?.isIntersecting;
      },
      { root: null, threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Current index is updated inside the rAF loop to avoid per-frame React state churn

  // Drag handlers
  const beginDragAt = (clientX: number, pointerId?: number) => {
    const container = containerRef.current;
    if (!container) return;
    cancelMomentum();
    if (pointerId != null) container.setPointerCapture?.(pointerId);
    pointerDownRef.current = true;
    dragStartedRef.current = false;
    dragStartXRef.current = clientX;
    dragStartOffsetRef.current = dragOffsetRef.current;
    lastMoveXRef.current = clientX;
    lastMoveTimeRef.current = performance.now();

    // Attach document-level touch listeners for iOS Safari to capture drags outside container
    if (!touchListenersActiveRef.current) {
      const move = (e: TouchEvent) => {
        const t = e.touches[0];
        if (!t) return;
        e.preventDefault();
        moveDragAt(t.clientX);
      };
      const end = () => {
        endDragCommon();
        if (docTouchMoveRef.current)
          document.removeEventListener(
            "touchmove",
            docTouchMoveRef.current as EventListener,
            { capture: false } as any
          );
        if (docTouchEndRef.current)
          document.removeEventListener(
            "touchend",
            docTouchEndRef.current as EventListener,
            { capture: false } as any
          );
        if (docTouchEndRef.current)
          document.removeEventListener(
            "touchcancel",
            docTouchEndRef.current as EventListener,
            { capture: false } as any
          );
        docTouchMoveRef.current = null;
        docTouchEndRef.current = null;
        touchListenersActiveRef.current = false;
      };
      docTouchMoveRef.current = move;
      docTouchEndRef.current = end;
      document.addEventListener("touchmove", move, { passive: false });
      document.addEventListener("touchend", end, { passive: false });
      document.addEventListener("touchcancel", end, { passive: false });
      touchListenersActiveRef.current = true;
    }
  };

  const moveDragAt = (clientX: number) => {
    if (!pointerDownRef.current) return;
    const now = performance.now();
    const deltaXFromStart = clientX - dragStartXRef.current;

    // Activate drag only after threshold to avoid click jitter
    if (!dragStartedRef.current) {
      if (Math.abs(deltaXFromStart) < DRAG_THRESHOLD) return;
      dragStartedRef.current = true;
      setIsDragging(true);
    }

    // Use larger dx on touch to overcome iOS gesture damping
    const instDxRaw = clientX - lastMoveXRef.current;
    const instDx =
      activeInputRef.current === "touch" ? instDxRaw * 1.8 : instDxRaw;
    const dt = Math.max(1, now - lastMoveTimeRef.current);
    velocityRef.current = instDx / dt; // px per ms

    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    rafIdRef.current = requestAnimationFrame(() => {
      const raw = dragStartOffsetRef.current + deltaXFromStart;
      const next = wrapOffset(raw);
      updateTranslateX(next);
    });

    lastMoveXRef.current = clientX;
    lastMoveTimeRef.current = now;
  };

  const endDragCommon = () => {
    if (!pointerDownRef.current) return;
    pointerDownRef.current = false;

    // If drag never started (it's a click), do nothing
    if (!dragStartedRef.current) {
      setIsDragging(false);
      return;
    }

    dragStartedRef.current = false;
    setIsDragging(false);

    // start momentum if there is velocity
    if (Math.abs(velocityRef.current) > 0.01) {
      setIsMomentum(true);
      momentumLastTimeRef.current = null;
      if (momentumRafRef.current) cancelAnimationFrame(momentumRafRef.current);
      momentumRafRef.current = requestAnimationFrame(momentumStep);
    } else {
      setIsMomentum(false);
    }

    // Clean up doc-level touch listeners if present
    if (touchListenersActiveRef.current) {
      if (docTouchMoveRef.current)
        document.removeEventListener(
          "touchmove",
          docTouchMoveRef.current as EventListener,
          { capture: false } as any
        );
      if (docTouchEndRef.current)
        document.removeEventListener(
          "touchend",
          docTouchEndRef.current as EventListener,
          { capture: false } as any
        );
      if (docTouchEndRef.current)
        document.removeEventListener(
          "touchcancel",
          docTouchEndRef.current as EventListener,
          { capture: false } as any
        );
      docTouchMoveRef.current = null;
      docTouchEndRef.current = null;
      touchListenersActiveRef.current = false;
    }
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    // Ignore pointer events while a touch gesture is active
    if (activeInputRef.current === "touch") return;
    activeInputRef.current = "pointer";
    beginDragAt(event.clientX, event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (activeInputRef.current !== "pointer") return;
    moveDragAt(event.clientX);
  };

  const momentumStep = (timestamp: number) => {
    if (!isMomentum) return;
    const last = momentumLastTimeRef.current ?? timestamp;
    const dt = Math.max(1, timestamp - last); // ms
    momentumLastTimeRef.current = timestamp;

    // friction decay normalized to 60fps
    const frictionPerFrame = 0.95; // 5% decay per 16.67ms
    const decay = Math.pow(frictionPerFrame, dt / 16.67);
    velocityRef.current *= decay;

    // Slightly amplify momentum on touch for natural feel
    const amplify = activeInputRef.current === "touch" ? 1.5 : 1;
    const delta = velocityRef.current * dt * amplify; // px
    const next = wrapOffset(dragOffsetRef.current + delta);
    dragOffsetRef.current = next;
    if (dragWrapperRef.current) {
      dragWrapperRef.current.style.transform = `translate3d(${next}px, 0, 0)`;
    }

    if (Math.abs(velocityRef.current) < 0.02) {
      // stop momentum
      setIsMomentum(false);
      momentumRafRef.current = null;
      momentumLastTimeRef.current = null;
      return;
    }
    momentumRafRef.current = requestAnimationFrame(momentumStep);
  };

  const endDrag = (event?: React.PointerEvent<HTMLDivElement>) => {
    if (activeInputRef.current !== "pointer") return;
    if (event && containerRef.current) {
      containerRef.current.releasePointerCapture?.(event.pointerId);
    }
    endDragCommon();
    activeInputRef.current = null;
  };

  // Touch event fallbacks for iOS Safari
  const getTouchX = (t: { clientX: number; pageX: number }) =>
    typeof t.clientX === "number" ? t.clientX : t.pageX;
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    if (!t) return;
    e.preventDefault();
    activeInputRef.current = "touch";
    const x = getTouchX(t);
    beginDragAt(x);
    // For touch, consider drag started immediately to pause auto-scroll
    dragStartedRef.current = true;
    setIsDragging(true);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    if (!t) return;
    e.preventDefault();
    const x = getTouchX(t);
    moveDragAt(x);
  };
  const handleTouchEnd = () => {
    endDragCommon();
    activeInputRef.current = null;
  };

  const handleMouseLeave = () => {
    // Force resume of auto-scroll by resetting hover and ending drag/momentum
    setIsHovering(false);
    if (pointerDownRef.current || dragStartedRef.current) {
      endDragCommon();
    } else {
      // ensure momentum is off so rAF loop resumes smooth auto
      cancelMomentum();
    }
    activeInputRef.current = null;
  };

  const handlePointerLeaveSafe = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    // Ignore pointerleave fired from touch interactions on iOS
    if (activeInputRef.current === "touch") return;
    handleMouseLeave();
  };

  // Removed container-level native touch listeners to avoid conflicts on iOS;
  // we rely on React touch handlers plus document-level listeners during drag

  useEffect(() => {
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (momentumRafRef.current) cancelAnimationFrame(momentumRafRef.current);
    };
  }, []);
  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={handlePointerLeaveSafe}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onMouseEnter={() => pauseOnHover && setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "grid scroller relative z-20 overflow-hidden select-none ",
        !isDragging &&
          !isMomentum &&
          "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      style={{ touchAction: "none" }}
    >
      <div ref={dragWrapperRef} className="will-change-transform">
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4",
            // CSS animation removed; using JS auto-scroll for true infinite behavior
            (isDragging || isMomentum) && "[animation-play-state:paused]"
          )}
        >
          {(() => {
            const originals = React.Children.toArray(children);
            const repeats = repeatCount; // dynamic based on viewport and cycle width
            const items: React.ReactNode[] = [];
            for (let r = 0; r < repeats; r++) {
              for (let i = 0; i < originals.length; i++) {
                const child = originals[i] as React.ReactElement;
                items.push(
                  React.cloneElement(child, {
                    key: `${r}-${(child.key as string) ?? i}`,
                  })
                );
              }
            }
            return items;
          })()}
        </ul>
      </div>
    </div>
  );
};
