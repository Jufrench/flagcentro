import { NavLink } from "react-router";
import { ActionIcon, Group } from "@mantine/core";
import { IconBoltFilled, IconFriends, IconHomeFilled, IconSearch, IconUser } from '@tabler/icons-react';
import { useDisclosure } from "@mantine/hooks";

import BottomDrawer from "./BottomDrawer";
import QuickPlayDrawer from "./QuickPlayDrawer";

export default function BottomNavBar() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Group p="md" justify="space-between">
        <NavLink to="/" end><ActionIcon size="xl" variant="light"><IconHomeFilled /></ActionIcon></NavLink>
        <NavLink to="/search" end><ActionIcon size="xl" variant="light"><IconSearch /></ActionIcon></NavLink>
        <ActionIcon size="xl" onClick={open}><IconBoltFilled></IconBoltFilled></ActionIcon>
        <NavLink to="/multi" end><ActionIcon size="xl" variant="light"><IconFriends /></ActionIcon></NavLink>
        <NavLink to="/profile" end><ActionIcon size="xl" variant="light"><IconUser /></ActionIcon></NavLink>
      </Group>
      <BottomDrawer opened={opened} onClose={close} title="Quick Play">
        <QuickPlayDrawer />
      </BottomDrawer>
    </>
  )
}