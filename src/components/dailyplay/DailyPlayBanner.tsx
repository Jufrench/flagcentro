import { Button, Group, Paper, Stack, Title } from "@mantine/core";
// import { IconSunFilled } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

import DrawerWrapper from "../DrawerWrapper";
// import QuickPlayContent from "../quickplay/QuickPlayContent";
// import { CountryItem } from "../FlagDisplay";
import DailyPlayContent from "./DailyPlayContent";
import Countries from "../../assets/countries.json";
import { useMemo } from "react";

// interface DailyPlayBannerProps {
//   activeCountry?: CountryItem;
// }

export default function DailyPlayBanner() {
  const [opened, { open, close }] = useDisclosure(false);
  let countries = [...Countries];
  const randNum = useMemo(() => Math.floor(Math.random() * countries.length), []);
  const activeCountry = useMemo(() => countries[randNum], []);

  return (
    <>
    <Paper withBorder p="md" shadow="md">
      <Stack>
        <Group justify="center">
          {/* <IconSunFilled color="orange" /> */}
          <Title order={4}>Daily Play</Title>
        </Group>
        {/* <Text ta="center">Test your flag knowledge once a day! (temporarily unlimited)</Text> */}
        <Button onClick={open} size="md">
          Play
        </Button>
      </Stack>
    </Paper>
    <DrawerWrapper opened={opened} onClose={close} title="Daily Play">
      {/* <QuickPlayContent quickPlayType={quickPlayType} countriesFilter={activeRegions} /> */}
      <>
      {/* <QuickPlayContent quickPlayType={"standard"} /> */}
      {/* <DailyPlayContent activeCountry={props.activeCountry} /> */}
      <DailyPlayContent activeCountry={activeCountry} />
      </>
    </DrawerWrapper>
    </>
  )
}