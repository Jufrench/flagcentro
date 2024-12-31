import { Group } from "@mantine/core";
import { NavLink } from "react-router";

export default function BottomNavBar() {
  return (
    <Group p="md" justify="space-between">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/search" end>Search</NavLink>
      <NavLink to="/multi" end>Multi</NavLink>
      <NavLink to="/profile" end>Profile</NavLink>
    </Group>
  )
}