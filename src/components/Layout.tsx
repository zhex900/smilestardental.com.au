import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
