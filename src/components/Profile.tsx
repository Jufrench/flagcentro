import { Avatar, Button, Fieldset, Stack, TextInput, Title } from "@mantine/core";

export default function Profile() {
  const hasAccount = false;
  
  return (
    <>
      {hasAccount
        ?
        <Stack align="center">
          <Avatar size="lg" />
          <Title order={4}>User Name</Title>
        </Stack>
        :
        <Stack>
          <Fieldset legend="User Info">
            <Stack gap="xs">
              <TextInput label="First name" placeholder="First name" />
              <TextInput label="Last name" placeholder="Last name" />
              <TextInput label="Email" placeholder="Email" />
              <TextInput label="Password" placeholder="Password" />
              <TextInput label="Confirm Password`" placeholder="Confirm Password" />
            </Stack>
          </Fieldset>
          <Button>Creat Account</Button>
        </Stack>
      }
    </>
  )
}