import { ReactElement } from "react"
import { Box, Drawer, DrawerProps, ScrollArea } from "@mantine/core";

interface DrawerWrapperProps extends DrawerProps {
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

export default function DrawerWrapper(props: DrawerWrapperProps) {

  return (
    <Drawer
      onClose={props.onClose}
      opened={props.opened}
      position="bottom"
      size={props.size ?? "100%"}
      title={props.title}
      scrollAreaComponent={ScrollArea.Autosize}
      removeScrollProps={{
        allowPinchZoom: true,
        enabled: false
      }}>
      {props.children}
    </Drawer>
  )

  
}