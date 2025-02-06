import { useState } from "react";
import { Button, Card, Divider, Group, Radio, Stack, Text, Title } from "@mantine/core";

interface StandardQuickCardProps {
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
  /**
   * Handle setting the type of quick play
   * @param type what the quick play type is
   * @returns void
   */
  handleSetQuickplayType: (type: string) => void;
}

export default function StandardQuickPlayCard(props: StandardQuickCardProps) {
  const regions = [ 'africa', 'americas', 'asia', 'europe', 'oceania' ];
  const [quickPlayValue, setQuickPlayValue] = useState<string>("standard");

  const RegionsButtons = () => {
    return (
      <>
        {regions.map((region: string) => (
          <Button
            key={region}
            rightSection={props.activeRegions.includes(region) ? "x" : " "}
            size="xs"
            variant={props.activeRegions.includes(region) ? "filled" : "outline"}
            onClick={() => {
              if (props.activeRegions && !props.activeRegions.includes(region)) {
                props.handleSetRegions([...props.activeRegions, region])
              }

              console.log('%cTODO: make regions more efficient', 'color:goldenrod')
              if (props.activeRegions.includes(region)) {
                const updatedRegions = props.activeRegions.filter(activeItem => activeItem !== region);
                props.handleSetRegions([...updatedRegions]);
              }
            }}
          >
            {region.charAt(0).toUpperCase() + region.slice(1)}
          </Button>
        ))}
      </>
    )
    // return (
    //   <>
    //     {regions.map((region: string) => (
    //       <Radio
    //         key={region}
    //         checked={props.activeRegions?.includes(region)}
    //         label={region.charAt(0).toUpperCase() + region.slice(1)}
    //         onChange={() => {}}
    //         onClick={() => {
    //           console.log('hey!', props.activeRegions?.includes(region))
    //           console.log(props.activeRegions)
    //           if (props.activeRegions && !props.activeRegions.includes(region)) {
    //             props.handleSetRegions([...props.activeRegions, region])
    //           }

    //           console.log('%cTODO: make regions more efficient', 'color:goldenrod')
    //           if (props.activeRegions.includes(region)) {
    //             const updatedRegions = props.activeRegions.filter(activeItem => activeItem !== region);
    //             props.handleSetRegions([...updatedRegions]);
    //           }
    //         }} />
    //     ))}
    //   </>
    // )
  };

  return (
    <Card shadow="md" style={{ maxWidth: "500px", margin: "0 auto" }}>
      <Stack>
        <Stack gap={1}>
          <Title style={{ textDecoration: "underline" }} order={4}>Standard Quick Play</Title>
          <Text>Test your knowledge of all flags of the world.</Text>
        </Stack>
        <Text size="sm">Select Quickplay Type</Text>
        <Radio.Group
          // label="Select Quickplay Type"
          name="quickplayType"
          value={quickPlayValue}
          onChange={(newValue: string) => {
            setQuickPlayValue(newValue)
            props.handleSetQuickplayType(newValue);
          }}>
          <Group>
            <Radio label="Standard" value="standard" />
            <Radio label="Multiple Choice" value="multiple" />
          </Group>
        </Radio.Group>
        <Divider />
        <Text size="sm">Select Region</Text>
        <Group gap="sm">
          <RegionsButtons />
        </Group>
        <Button onClick={() => {
          // props.handleSetRegions([]);
          props.open();
        }}>Start Quickplay</Button>
      </Stack>
    </Card>
  )
}