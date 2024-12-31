import { Burger, Center, Text, useMantineTheme } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';

import SettingsDrawer from "./SettingsDrawer";

export default function MobileHeader() {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Center p="sm">
      <Burger onClick={open} style={{ position: "absolute", left: theme.spacing.md }}></Burger>
      <Text size="md">Quick Play</Text>
      <SettingsDrawer opened={opened} close={close} />
    </Center>
  )
}