import { Stack, Switch, Text } from "@mantine/core";

export default function PrivacyContent() {
  return (
    <Stack gap="xs">
      <Switch defaultChecked label="Share my activity" />
      <Text size="sm">If selected, your daily activity (if you've played today) will be shared with others.</Text>
    </Stack>
  );
}