// import { useState } from "react";
import { Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import QuickPlayContent from "./quickplay/QuickPlayContent";
// import StandardQuickPlayCard from "./quickplay/StandardQuickPlayCard";
// import RegionQuickCard from "./quickplay/RegionQuickCard";
import DrawerWrapper from "./DrawerWrapper";
import DailyPlayBanner from "./dailyplay/DailyPlayBanner";
// import QuickPlayModalWrapper from "./quickplay/QuickPlayModalWrapper";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  // const [activeRegions, setActiveRegions] = useState<string[]>([]);
  // const [quickPlayType, setQuickPlayType] = useState<string>("standard");

  // const handleSetRegions = (regions_param: string[]) => setActiveRegions(regions_param);
  // const handleSetQuickplayType = (type: string) => setQuickPlayType(type);

  return (
    <>
      <Stack>
        <DailyPlayBanner openDrawer={open} />
        {/* <StandardQuickPlayCard
          activeRegions={activeRegions}
          open={open}
          handleSetRegions={handleSetRegions}
          handleSetQuickplayType={handleSetQuickplayType}
        /> */}
      </Stack>
      <DrawerWrapper opened={opened} onClose={close} title="Quick Play">
        {/* <QuickPlayContent quickPlayType={quickPlayType} countriesFilter={activeRegions} /> */}
        <QuickPlayContent quickPlayType={"standard"} />
      </DrawerWrapper>
    </>
  )
}

// TODO:
/**
 * -- HOME PAGE
 * Add content to the homepage
 * 
 * -- DAILY PLAY
 * Use cookies/session storage to check if a use has played daily play
 * Update daily play (quickplaycontent) to use spaces like in DailyPlay.tsx
 * 
 * -- SEARCH
 * Improve UI of flags in search page
 * 
 * -- QUICK PLAY
 * Update QuickPlayContent to not require quickplay type
 * When drawer first loads hitting the next button 1 time doesn't work
 * 
 */