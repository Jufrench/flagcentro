import { Button, Group, Modal, Paper, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCheckbox } from "@tabler/icons-react";

import FlagDisplay, { CountryItem } from "../FlagDisplay";

interface TodayStatsBannerProps {
  activeCountry: CountryItem;
}

export default function TodayStatsBanner(props: TodayStatsBannerProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Paper withBorder p="md" shadow="md">
        <Stack gap={0}>
          <Group>
            <IconCheckbox color="limegreen" />
            <Title order={3}>Today's Game Done!</Title>
          </Group>
          <Text ta="center">Great Job!</Text>
          <Button
            mt="xl"
            size="md"
            onClick={open}
          >
            See Today's Stats
          </Button>
        </Stack>
      </Paper>
      <Modal opened={opened} onClose={close}>
        <FlagDisplay activeCountry={props.activeCountry} />
        <Paper withBorder ta="center" shadow="sm" mt="sm">
          {props.activeCountry.name}
        </Paper>
      </Modal>
    </>
  )
}