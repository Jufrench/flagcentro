import { Stack, TextInput } from "@mantine/core";
import { useState } from "react";

export default function ChangePasswordContent() {
  const [password, setPassword] = useState<string>();
  const [passwordConfirm, setPasswordConfirm] = useState<string>();

  return (
    <Stack>
      <TextInput
        label="Password"
        value={password}
        style={{ flexGrow: 1 }}
        onChange={e => setPassword(e.target.value)}
      />
      <TextInput
        label="Confirm Password"
        value={passwordConfirm}
        style={{ flexGrow: 1 }}
        onChange={e => setPasswordConfirm(e.target.value)}
      />
    </Stack>
  );
}