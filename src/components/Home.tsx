import { Button, Card, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import QuickPlayModalWrapper from "./quickplay/QuickPlayModalWrapper";
import QuickPlayContent from "./quickplay/QuickPlayContent";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Stack>
        <Card shadow="md">
          <Stack>
            <Title order={4}>Standard Quick Play</Title>
            <Text>Test your knowledge of all flags of the world.</Text>
            <Button onClick={open}>Start Quickplay</Button>
          </Stack>
        </Card>
        <Card shadow="md">
          <Stack>
            <Title order={4}>Region Quick Play</Title>
            <Text>Test by region</Text>
            <Button onClick={open}>Start Region Quickplay</Button>
          </Stack>
        </Card>
      </Stack>
      <QuickPlayModalWrapper opened={opened} onClose={close} title="Quick Play">
        <QuickPlayContent />
      </QuickPlayModalWrapper>
    </>
  )
}