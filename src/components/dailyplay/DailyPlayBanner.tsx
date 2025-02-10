import { Button, Group, Paper, Stack, Text, Title } from "@mantine/core";
import { IconSunFilled } from "@tabler/icons-react";

interface DailyPlayBannerProps {
  openDrawer: () => void;
}

export default function DailyPlayBanner(props: DailyPlayBannerProps) {
  return (
    <Paper withBorder p="md" shadow="md">
      <Stack>
        <Group>
          <IconSunFilled color="orange" />
          <Title order={3}>Daily Play</Title>
        </Group>
        <Text>Test your flag knowledge once a day!</Text>
        <Button
          onClick={() => props.openDrawer()}>
            Play
        </Button>
      </Stack>
    </Paper>
  )
}