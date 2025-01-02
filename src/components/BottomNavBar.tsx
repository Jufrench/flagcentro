import { ActionIcon, Group } from "@mantine/core";
import { NavLink } from "react-router";
import { IconFriends, IconHomeFilled, IconSearch, IconUser } from '@tabler/icons-react';

export default function BottomNavBar() {
  return (
    <Group p="md" justify="space-between">
      <NavLink to="/" end><ActionIcon size="xl" variant="light"><IconHomeFilled /></ActionIcon></NavLink>
      <NavLink to="/search" end><ActionIcon size="xl" variant="light"><IconSearch /></ActionIcon></NavLink>
      <NavLink to="/multi" end><ActionIcon size="xl" variant="light"><IconFriends /></ActionIcon></NavLink>
      <NavLink to="/profile" end><ActionIcon size="xl" variant="light"><IconUser /></ActionIcon></NavLink>
    </Group>
  )
}