import { Button, Paper, Stack, Text, Title } from "@mantine/core";
// import { IconSunFilled } from "@tabler/icons-react";
import { readLocalStorageValue, useDisclosure, useLocalStorage } from "@mantine/hooks";

import DrawerWrapper from "../DrawerWrapper";
// import QuickPlayContent from "../quickplay/QuickPlayContent";
// import { CountryItem } from "../FlagDisplay";
import DailyPlayContent from "./DailyPlayContent";
import Countries from "../../assets/countries.json";
import { useMemo } from "react";
import FlagDisplay from "../FlagDisplay";

// interface DailyPlayBannerProps {
//   // activeCountry?: CountryItem;
//   // handleSetLastPlayed: (dateValue: Date) => void;
//   // hasPlayedToday?: boolean;
// }

export default function DailyPlayBanner() {
  const [opened, { open, close }] = useDisclosure(false);
  // const hasPlayedToday = readLocalStorageValue({ key: 'has_played_today' });

  let countries = [...Countries];
  const randNum = useMemo(() => Math.floor(Math.random() * countries.length), []);
  const activeCountry = useMemo(() => countries[randNum], []);

  const [lastPlayed, /* setLastPlayed */] = useLocalStorage<string | undefined | Date>({
    key: "last_played",
    defaultValue: readLocalStorageValue({ key: "last_played" })
    // defaultValue: new Date("2025-07-27")
  });

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const hasPlayedToday = lastPlayed && new Date(lastPlayed) >= todayStart;
  // const hasPlayedToday = true;

  // console.log('%chasPlayedToday:', 'border:1px solid limegreen', hasPlayedToday)
  // console.log('%cactiveCountry:', 'border:1px solid limegreen', activeCountry)

  const PlayBannerContent = () => {
    return (
      <>
        <Text>Guess the flag of the day.</Text>
        <Button onClick={open}>Play</Button>
      </>
    );
  };

  // const StatsBannerContent = () => {
  //   return (
  //     <>
  //       <Text>Return tomorrow for another challenge!</Text>
  //       <Button onClick={() => {
  //         console.log('show stats!');
  //       }}>See Stats</Button>
  //     </>
  //   );
  // };

  return (
    <>
      {!hasPlayedToday &&
        <Paper withBorder p="md" shadow="md">
          <Stack gap="sm">
            <Title order={4}>Daily Play</Title>
            <PlayBannerContent />
          </Stack>
        </Paper>
      }
      {hasPlayedToday &&
        <Stack gap="md">
          <Stack gap="xs">
            <Title order={3}>Today's Flag</Title>
            <Button size="compact-sm">See Game Stats</Button>
          </Stack>
          <Paper shadow="md">
            {hasPlayedToday === true && <FlagDisplay activeCountry={activeCountry} showName={true} />}
          </Paper>
        </Stack>
      }
      <DrawerWrapper opened={opened} onClose={close} title="Daily Play">
        {/* <QuickPlayContent quickPlayType={quickPlayType} countriesFilter={activeRegions} /> */}
        <>
        {/* <QuickPlayContent quickPlayType={"standard"} /> */}
        {/* <DailyPlayContent activeCountry={props.activeCountry} /> */}
          <DailyPlayContent activeCountry={activeCountry} />
        </>
      </DrawerWrapper>
    </>
  );
}
