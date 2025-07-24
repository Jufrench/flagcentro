import { Button, Paper, Stack, Text, Title } from "@mantine/core";
// import { IconSunFilled } from "@tabler/icons-react";
import { readLocalStorageValue, useDisclosure } from "@mantine/hooks";

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
  const hasPlayedToday = readLocalStorageValue({ key: 'has_played_today' });
  console.log('%chasPlayedToday:', 'color:limegreen', hasPlayedToday)

  let countries = [...Countries];
  const randNum = useMemo(() => Math.floor(Math.random() * countries.length), []);
  const activeCountry = useMemo(() => countries[randNum], []);

  return (
    <>
    <Paper withBorder p="md" shadow="md">
      <Stack>
        <Stack gap={0}>
          {/* <IconSunFilled color="orange" /> */}
          <Title order={4}>Daily Play</Title>
          {!hasPlayedToday &&
            <Text>Guess the flag of the day.</Text>
          }
        </Stack>
        {!hasPlayedToday &&
          <Button onClick={open} size="md">
            Play
          </Button>
        }
        {hasPlayedToday === true &&
          <Text>You've played today! Come back tomorrow for another challenge!</Text>
        }
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