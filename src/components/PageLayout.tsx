import { Outlet } from "react-router";
import BottomNavBar from "./BottomNavBar";
import MobileHeader from "./MobileHeader";

export default function PageLayout() {
  const headerStyle: {} = {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    background: "#fff",
    borderBottom: "1px solid #ddd",
    zIndex: 1,
  };

  const mainStyle: {} = {
    paddingTop: "5em",
    paddingBottom: "4em",
    paddingRight: "2em",
    paddingLeft: "2em",
  };

  const footerStyle: {} = {
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,
    background: "#fff",
    borderTop: "1px solid #ddd",
  };

  return (
    <>
      <header id="header" style={headerStyle}>
        <MobileHeader />
      </header>
      <main id="main" style={mainStyle}>
        <Outlet />
      </main>
      <footer id="footer" style={footerStyle}>
        <BottomNavBar />
      </footer>
    </>
  );
}