import { Button, Card, Stack, Text, Title } from "@mantine/core";

export default function RegionQuickPlay() {
  return (
    <Card shadow="sm">
      <Stack>
        <Title order={4}>Region Quick Play</Title>
        <Text>Test by region</Text>
        <Button>Start Region Quickplay</Button>
      </Stack>
    </Card>
  );
}