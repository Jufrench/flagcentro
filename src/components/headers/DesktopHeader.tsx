import { Container, Group, Text } from "@mantine/core";
import { NavLink } from "react-router";

export default function DesktopHeader() {
  return (
    <Container p="xs">
      <Group justify="space-between">
        <NavLink to="/" end><Text c="black">Home</Text></NavLink>
        <NavLink to="/search" end><Text c="black">Search</Text></NavLink>
        <NavLink to="/quickplay" end><Text c="black">Daily Play</Text></NavLink>
        <NavLink to="/multi" end><Text c="black">Multi Play</Text></NavLink>
        <NavLink to="/profile" end><Text c="black">Profile</Text></NavLink>
      </Group>
    </Container>
  );
}