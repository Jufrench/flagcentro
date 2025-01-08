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
    <Drawer.Root
      className={RemoveScroll.classNames.fullWidth}
      data-autofocus
      onClose={props.onClose}
      opened={props.opened}
      position="bottom"
      size={props.size ?? "100%"}
      scrollAreaComponent={ScrollArea.Autosize}>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>{props.title ?? null}</Drawer.Title>
          <Drawer.CloseButton />
        </Drawer.Header>
        <Drawer.Body>
          <ScrollArea>
            {props.children}
          </ScrollArea>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  )
}