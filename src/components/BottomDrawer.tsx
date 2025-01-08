import { ReactElement } from "react"
import { Box, Drawer, DrawerProps } from "@mantine/core";

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
      onClose={props.onClose}
      opened={props.opened}
      position="bottom"
      size={props.size ?? "100%"}
      style={{
        drawer: {
          display: "flex",
          flexDirection: "column",
          height: "100%",
          "& > :nth-child(2)": {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          },
        },
      }}
    >
      <Box style={{ flexGrow: 1, overflow: 'auto' }}>
        {props.children}
      </Box>
    </Drawer>
  )

  
}