import { Outlet } from "react-router";
import BottomNavBar from "./BottomNavBar";
import MobileHeader from "./headers/MobileHeader";
import DesktopHeader from "./headers/DesktopHeader";
import DesktopFooter from "./footers/DesktopFooter";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";

export default function PageLayout() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

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
    paddingRight: "1em",
    paddingLeft: "1em",
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
        {isMobile
          ?
          <MobileHeader />
          :
          <DesktopHeader />
        }
      </header>
      <main id="main" style={mainStyle}>
        <Outlet />
      </main>
      <footer id="footer" style={footerStyle}>
        {isMobile
          ?
          <BottomNavBar />
          :
          <DesktopFooter />
        }
      </footer>
    </>
  );
}