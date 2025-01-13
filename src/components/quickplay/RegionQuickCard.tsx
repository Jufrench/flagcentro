import { Button, Card, Group, Radio, Stack, Text, Title } from "@mantine/core";

interface RegionQuickCardProps {
  /**
   * Selected regions by which to apply filter
   */
  activeRegions: string[];
  /**
   * Sets the active regions. If empty, all regions are used.
   * @param regions 
   * @returns void
   */
  handleSetRegions: (regions: string[]) => void;
  /**
   * Opens modal
   */
  open: () => void;
}

export default function RegionQuickCard(props: RegionQuickCardProps) {
  const regions = [ 'africa', 'americas', 'asia', 'europe', 'oceania' ];

  const RegionsButtons = () => {
    return (
      <>
        {regions.map((region: string) => (
          <Radio
            key={region}
            checked={props.activeRegions?.includes(region)}
            label={region.charAt(0).toUpperCase() + region.slice(1)}
            onChange={() => {}}
            onClick={() => {
              if (props.activeRegions && !props.activeRegions.includes(region)) {
                props.handleSetRegions([...props.activeRegions, region])
              }

              console.log('%cTODO: make regions more efficient', 'background:goldenrod')
              if (props.activeRegions.includes(region)) {
                const updatedRegions = props.activeRegions.filter(activeItem => activeItem !== region);
                props.handleSetRegions([...updatedRegions]);
              }
            }} />
        ))}
      </>
    )
  };

  return (
    <Card shadow="md">
      <Stack>
        <Stack gap={0}>
          <Title order={4}>Region Quick Play</Title>
          <Text>By multiple regions or subregions</Text>
        </Stack>
        <Group>
          <RegionsButtons />
        </Group>
        <Button onClick={props.open}>Start Region Quickplay</Button>
      </Stack>
    </Card>
  )
}