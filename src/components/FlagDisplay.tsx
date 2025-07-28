import { Card, Image, Paper, Stack } from "@mantine/core";

interface FlagDisplayProps {
  /**
   * Currently active country shown in the display
   */
  activeCountry: CountryItem;
  showName?: boolean;
}

export type CountryItem = {
  flag: string;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  },
  name: string;
  names: {
    en: string;
    es: string;
  },
  region: string;
}

export default function FlagDisplay(props: FlagDisplayProps) {
  return (
    <Stack gap="xs">
      {props.showName &&
        <Paper withBorder ta="center" shadow="sm">
          {props.activeCountry.name}
        </Paper>
      }
      <Card p={0} shadow="md" style={{ border: "1px solid #ddd" }}>
        <Image src={props.activeCountry.flags.png} alt={props.activeCountry.flags.alt} />
      </Card>
    </Stack>
  );
}
