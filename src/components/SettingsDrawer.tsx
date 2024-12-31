import { Drawer, Stack } from "@mantine/core";

interface SettingsDrawerProps {
  /**
   * Handles when closed
   */
  close: () => void;
  /**
   * Boolean state of opened/closed status
   */
  opened: boolean;
}

export default function SettingsDrawer(props: SettingsDrawerProps) {
  return (
    <Drawer opened={props.opened} onClose={props.close} title="Settings">
      <Stack>
      </Stack>
    </Drawer>
  );
}