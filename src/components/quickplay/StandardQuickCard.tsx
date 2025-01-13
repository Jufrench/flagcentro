import { Button, Card, Stack, Text, Title } from "@mantine/core";

interface StandardQuickCardProps {
  /**
   * Sets the active regions. If empty, all regions are used.
   * @param regions 
   * @returns void
   */
  handleSetRegions: (regions: string[]) => void;
  /**
   * Opens modal
   */
  open: () => void;
}

export default function StandardQuickCard(props: StandardQuickCardProps) {
  return (
    <Card shadow="md">
      <Stack>
        <Stack gap={1}>
          <Title order={4}>Standard Quick Play</Title>
          <Text>Test your knowledge of all flags of the world.</Text>
        </Stack>
        <Button onClick={() => {
          props.handleSetRegions([]);
          props.open();
        }}>Start Quickplay</Button>
      </Stack>
    </Card>
  )
}