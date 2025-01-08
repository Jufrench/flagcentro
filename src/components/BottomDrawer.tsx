import { ReactElement } from "react"
import { Drawer, DrawerProps, RemoveScroll, ScrollArea } from "@mantine/core";

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

  return (
    <Drawer
      className={RemoveScroll.classNames.fullWidth}
      data-autofocus
      onClose={props.onClose}
      opened={props.opened}
      position="bottom"
      size={props.size ?? "100%"}
      title={props.title ?? null}
      scrollAreaComponent={ScrollArea.Autosize}>
      {props.children}
    </Drawer>
  )
}