import { Button, Group, Paper, Stack, Text, Title } from "@mantine/core";
import { IconSunFilled } from "@tabler/icons-react";
import DrawerWrapper from "../DrawerWrapper";
import QuickPlayContent from "../quickplay/QuickPlayContent";
import { useDisclosure } from "@mantine/hooks";

export default function DailyPlayBanner() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
    <Paper withBorder p="md" shadow="md">
      <Stack>
        <Group>
          <IconSunFilled color="orange" />
          <Title order={3}>Daily Play</Title>
        </Group>
        <Text>Test your flag knowledge once a day! (temporarily unlimited)</Text>
        <Button onClick={open}>
          Play
        </Button>
      </Stack>
    </Paper>
    <DrawerWrapper opened={opened} onClose={close} title="Daily Play">
      {/* <QuickPlayContent quickPlayType={quickPlayType} countriesFilter={activeRegions} /> */}
      <QuickPlayContent quickPlayType={"standard"} />
    </DrawerWrapper>
    </>
  )
}