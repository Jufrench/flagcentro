import { useState } from "react";
import { Button, Card, Group, Radio, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import QuickPlayModalWrapper from "./quickplay/QuickPlayModalWrapper";
import QuickPlayContent from "./quickplay/QuickPlayContent";

export default function Home() {
  const regions = [ 'africa', 'americas', 'asia', 'europe', 'oceania' ];
  const [opened, { open, close }] = useDisclosure(false);
  const [activeRegions, setActiveRegions] = useState<string[]>([]);

  const RegionsButtons = () => {
    return (
      <>
        {regions.map((region: string) => (
          <Radio
            key={region}
            checked={activeRegions?.includes(region)}
            label={region.charAt(0).toUpperCase() + region.slice(1)}
            onChange={() => {}}
            onClick={() => {
              if (activeRegions && !activeRegions.includes(region)) {
                setActiveRegions([...activeRegions, region])
              }

              console.log('%cTODO: make regions more efficient', 'background:goldenrod')
              if (activeRegions.includes(region)) {
                const updatedRegions = activeRegions.filter(activeItem => activeItem !== region);
                setActiveRegions([...updatedRegions]);
              }
            }} />
        ))}
      </>
    )
  };

  return (
    <>
      <Stack>
        <Card shadow="md">
          <Stack>
            <Stack gap={1}>
              <Title order={4}>Standard Quick Play</Title>
              <Text>Test your knowledge of all flags of the world.</Text>
            </Stack>
            <Button onClick={() => {
              setActiveRegions([]);
              open();
            }}>Start Quickplay</Button>
          </Stack>
        </Card>

        <Card shadow="md">
          <Stack>
            <Stack gap={0}>
              <Title order={4}>Region Quick Play</Title>
              <Text>By multiple regions or subregions</Text>
            </Stack>
            <Group>
              <RegionsButtons />
            </Group>
            <Button onClick={open}>Start Region Quickplay</Button>
          </Stack>
        </Card>

      </Stack>
      <QuickPlayModalWrapper opened={opened} onClose={close} title="Quick Play">
        <QuickPlayContent countriesFilter={activeRegions} />
      </QuickPlayModalWrapper>
    </>
  )
}