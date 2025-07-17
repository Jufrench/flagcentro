import { Button, Stack, Title } from "@mantine/core";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function ProfilePage() {
  const { logout, user } = useContext(AuthContext);

  return (
    <Stack>
      <Title order={3}>Hello {user.name}</Title>
      <Button onClick={logout}>Log out</Button>
    </Stack>
  )
}