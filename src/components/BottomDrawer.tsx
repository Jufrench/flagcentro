import { ReactElement } from "react"
import { Drawer, DrawerProps } from "@mantine/core";

interface BottomDrawerProps extends DrawerProps {
  /**
   * What do display inside drawer
   */
  children: ReactElement | null;
  /**
   * Size of drawer, determines whether full screen, or other.
   */
  size?: string;
  /**
   * Title to display at top of drawer
   */
  title?: string | null;
}

export default function BottomDrawer(props: BottomDrawerProps) {
  const style1 = {
    height: "100vh"
  };

  const style2 = {
    height: "100dvh"
  };
  
  return (
    <Drawer
      onClose={props.onClose}
      opened={props.opened}
      position="bottom"
      size={props.size ?? "100%"}
      title={props.title ?? null}
      style={{...style1, ...style2}}>
      {props.children}
    </Drawer>
  )
}