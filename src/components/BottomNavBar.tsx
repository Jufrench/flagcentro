import { ActionIcon, Group } from "@mantine/core";
import { NavLink } from "react-router";
import { IconFriends, IconHomeFilled, IconSearch, IconUser } from '@tabler/icons-react';

export default function BottomNavBar() {
  return (
    <Group p="md" justify="space-between">
      <NavLink to="/" end><ActionIcon size="lg" variant="light"><IconHomeFilled /></ActionIcon></NavLink>
      {/* <NavLink to="/search" end>Search</NavLink> */}
      <NavLink to="/search" end><ActionIcon size="lg" variant="light"><IconSearch /></ActionIcon></NavLink>
      {/* <NavLink to="/multi" end>Multi</NavLink> */}
      <NavLink to="/multi" end><ActionIcon size="lg" variant="light"><IconFriends /></ActionIcon></NavLink>
      {/* <NavLink to="/profile" end>Profile</NavLink> */}
      <NavLink to="/profile" end><ActionIcon size="lg" variant="light"><IconUser /></ActionIcon></NavLink>
    </Group>
  )
}