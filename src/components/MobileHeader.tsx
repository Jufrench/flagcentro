import { Burger, Group, Text } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';

import SettingsDrawer from "./SettingsDrawer";

export default function MobileHeader() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Group gap="md" p="sm">
      <Burger onClick={open}></Burger>
        <Text>Quick Play</Text>
      <SettingsDrawer opened={opened} close={close} />
    </Group>
  )
}