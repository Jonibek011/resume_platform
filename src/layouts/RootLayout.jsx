import { Navbar, Footer } from "../components";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="w-full bg-slate-200 h-auto min-h-screen">
      <main className="max-w-screen-lg mx-auto ">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
