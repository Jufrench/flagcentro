import { Button, Group, Paper, Stack, Text, Title } from "@mantine/core";
import { IconSunFilled } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

import DrawerWrapper from "../DrawerWrapper";
// import QuickPlayContent from "../quickplay/QuickPlayContent";
import { CountryItem } from "../FlagDisplay";
import DailyPlayContent from "./DailyPlayContent";

interface DailyPlayBannerProps {
  activeCountry: CountryItem;
}

export default function DailyPlayBanner(props: DailyPlayBannerProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
    <Paper withBorder p="md" shadow="md">
      <Stack>
        <Group>
          <IconSunFilled color="orange" />
          <Title order={3}>Daily Play</Title>
        </Group>
        <Text ta="center">Test your flag knowledge once a day! (temporarily unlimited)</Text>
        <Button onClick={open} size="md">
          Play
        </Button>
      </Stack>
    </Paper>
    <DrawerWrapper opened={opened} onClose={close} title="Daily Play">
      {/* <QuickPlayContent quickPlayType={quickPlayType} countriesFilter={activeRegions} /> */}
      <>
      {/* <QuickPlayContent quickPlayType={"standard"} /> */}
      <DailyPlayContent activeCountry={props.activeCountry} />
      </>
    </DrawerWrapper>
    </>
  )
}