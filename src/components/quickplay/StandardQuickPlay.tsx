import { Button, Card, Stack, Text, Title } from "@mantine/core";

interface QuickPlayIntroProps {
  handleStartQuickPlay: (value: boolean) => void;
}

export default function QuickPlayIntro(props: QuickPlayIntroProps) {
  return (
    <Card shadow="sm">
      <Stack>
        <Title order={4}>Standard Quick Play</Title>
        <Text>Test your knowledge of all flags of the world.</Text>
        <Button onClick={() => props.handleStartQuickPlay(true)}>Start Quickplay</Button>
      </Stack>
    </Card>
  );
}