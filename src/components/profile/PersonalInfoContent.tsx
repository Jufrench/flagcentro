import { Stack, TextInput } from "@mantine/core";
import { useState } from "react";

export default function PersonalInfoContent() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <Stack>
      <TextInput
        label="Name"
        value={name}
        style={{ flexGrow: 1 }}
        onChange={e => setName(e.target.value)}
      />
      <TextInput
        label="Email"
        value={email}
        style={{ flexGrow: 1 }}
        onChange={e => setEmail(e.target.value)}
      />
    </Stack>
  );

  // return (
  //   <Stack>
  //     <Group align="center">
  //       <Text>Name</Text>
  //       <TextInput
  //         style={{ flexGrow: 1 }}
  //         value={name}
  //         onChange={e => setName(e.target.value)}
  //       />
  //     </Group>
  //     <Group align="center">
  //       <Text>Email</Text>
  //       <TextInput style={{ flexGrow: 1 }} value={email} onChange={e => setEmail(e.target.value)} />
  //     </Group>
  //   </Stack>
  // );
}