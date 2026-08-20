import { Card, CardDescription, CardTitle } from "../ui/card";
import OrthodonticsIcon from "../icons/orthodontics.svg";
import { Reveal } from "../ui/reveal";
import { BeforeAfterDisclaimer } from "./before-after-disclaimer";

const ORTHODONTIC_BENEFITS = [
  "Digital planning and discussion",
  "Comfort-focused approach",
  "Clear aligners or fixed braces",
  "Ongoing oral health support",
];

const FEATURE_PILLS = [
  { title: "3D Digital", subtitle: "Scanning", accent: "text-slate-600" },
  { title: "Invisible", subtitle: "Aligners", accent: "text-yellow-600" },
  { title: "Advanced", subtitle: "Technology", accent: "text-slate-600" },
];

export function BeforeAfterSection() {
  return (
    <section
      id="before-after"
      className="section-px section-py scroll-mt-28 bg-primary"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center heading-mb">
          <Reveal>
            <h2 className="text-heading heading-mb">
              Orthodontic <span className="brand-yellow">Care</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-normal max-w-3xl mx-auto">
              An example of an orthodontic treatment outcome from an actual
              patient. Individual results vary, and all dental procedures carry
              risks. Your dentist will discuss what is suitable, achievable and
              appropriate in your case.
            </p>
          </Reveal>
        </div>

        <div className="heading-mb grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          {/* Mobile: slider first; lg: copy on the left */}
          <Reveal
            direction="right"
            className="order-2 flex h-full min-h-0 w-full flex-col lg:order-1"
          >
            <Card className="h-full min-h-0 border-gold-200/25 bg-gradient-to-b from-gold-600 to-gold-400 text-white shadow-lg !shadow-black/10">
              <CardTitle className="flex items-center gap-3 text-left !text-lg md:!text-xl">
                <div className="h-12 w-12 shrink-0 md:h-14 md:w-14">
                  <OrthodonticsIcon />
                </div>
                <span>Orthodontic care</span>
              </CardTitle>
              <CardDescription className="!text-sm md:!text-[0.9375rem]">
                Braces and clear aligners can suit many alignment and bite
                concerns. Your dentist will advise what is appropriate for you,
                including risks, duration and costs.
                <ul className="mt-3 space-y-1.5">
                  {ORTHODONTIC_BENEFITS.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-300"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </CardDescription>
            </Card>
          </Reveal>

          <Reveal
            direction="left"
            className="order-1 flex h-full min-h-0 w-full flex-col lg:order-2"
          >
            <BeforeAfterDisclaimer />
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5"
        >
          {FEATURE_PILLS.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white/20 px-4 py-4 text-center shadow-md sm:py-5"
            >
              <div
                className={`text-xl font-bold sm:text-2xl ${item.accent} mb-1`}
              >
                {item.title}
              </div>
              <div className="text-sm text-slate-600">{item.subtitle}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
