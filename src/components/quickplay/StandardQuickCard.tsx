import { Button, Card, Group, Radio, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";

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
  /**
   * Handle setting the type of quick play
   * @param type what the quick play type is
   * @returns void
   */
  handleSetQuickplayType: (type: string) => void;
}

export default function StandardQuickCard(props: StandardQuickCardProps) {
  const [quickPlayValue, setQuickPlayValue] = useState<string>("standard");

  return (
    <Card shadow="md">
      <Stack>
        <Stack gap={1}>
          <Title order={4}>Standard Quick Play</Title>
          <Text>Test your knowledge of all flags of the world.</Text>
        </Stack>
        <Radio.Group
          label="Select Quickplay Type"
          name="quickplayType"
          value={quickPlayValue}
          onChange={(newValue: string) => {
            setQuickPlayValue(newValue)
            props.handleSetQuickplayType(newValue);
          }}>
          <Group mt="xs">
            <Radio label="Standard" value="standard" />
            <Radio label="Multiple Choice" value="multiple" />
          </Group>
        </Radio.Group>
        <Button onClick={() => {
          props.handleSetRegions([]);
          props.open();
        }}>Start Quickplay</Button>
      </Stack>
    </Card>
  )
}