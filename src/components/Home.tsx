import { useState } from "react";
import { Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import QuickPlayModalWrapper from "./quickplay/QuickPlayModalWrapper";
import QuickPlayContent from "./quickplay/QuickPlayContent";
import StandardQuickCard from "./quickplay/StandardQuickCard";
import RegionQuickCard from "./quickplay/RegionQuickCard";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const [activeRegions, setActiveRegions] = useState<string[]>([]);

  const handleSetRegions = (regions_param: string[]) => setActiveRegions(regions_param);

  return (
    <>
      <Stack>
        <StandardQuickCard open={open} handleSetRegions={handleSetRegions} />
        <RegionQuickCard open={open} activeRegions={activeRegions} handleSetRegions={handleSetRegions} />
      </Stack>
      <QuickPlayModalWrapper opened={opened} onClose={close} title="Quick Play">
        <QuickPlayContent countriesFilter={activeRegions} />
      </QuickPlayModalWrapper>
    </>
  )
}