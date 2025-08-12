import { Header } from "./header";
import { Footer } from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
