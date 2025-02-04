import { useState } from "react";
import { Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import QuickPlayContent from "./quickplay/QuickPlayContent";
import StandardQuickPlayCard from "./quickplay/StandardQuickPlayCard";
// import RegionQuickCard from "./quickplay/RegionQuickCard";
import DrawerWrapper from "./DrawerWrapper";
// import QuickPlayModalWrapper from "./quickplay/QuickPlayModalWrapper";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const [activeRegions, setActiveRegions] = useState<string[]>([]);
  const [quickPlayType, setQuickPlayType] = useState<string>("standard");

  const handleSetRegions = (regions_param: string[]) => setActiveRegions(regions_param);
  const handleSetQuickplayType = (type: string) => setQuickPlayType(type);

  return (
    <>
      <Stack>
        <StandardQuickPlayCard
          activeRegions={activeRegions}
          open={open}
          handleSetRegions={handleSetRegions}
          handleSetQuickplayType={handleSetQuickplayType}
        />
        {/* <RegionQuickCard open={open} activeRegions={activeRegions} handleSetRegions={handleSetRegions} /> */}
      </Stack>
      {/* <QuickPlayModalWrapper opened={opened} onClose={close} title="Quick Play">
        <QuickPlayContent quickPlayType={quickPlayType} countriesFilter={activeRegions} />
      </QuickPlayModalWrapper> */}
      <DrawerWrapper opened={opened} onClose={close} title="Quick Play">
        <QuickPlayContent quickPlayType={quickPlayType} countriesFilter={activeRegions} />
      </DrawerWrapper>
    </>
  )
}