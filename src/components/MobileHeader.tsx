import { Burger, Center, Text, useMantineTheme } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { useLocation } from 'react-router'

import SettingsDrawer from "./SettingsDrawer";

export default function MobileHeader() {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  let location = useLocation();
  let pathname = location.pathname.slice(1);
  pathname = pathname.charAt(0).toUpperCase() + pathname.slice(1);
  const displayPath = location.pathname === "/" ? "Quick Play" : pathname;

  return (
    <Center p="sm">
      <Burger onClick={open} style={{ position: "absolute", left: theme.spacing.md }}></Burger>
      <Text size="md">{displayPath}</Text>
      <SettingsDrawer opened={opened} close={close} />
    </Center>
  )
}