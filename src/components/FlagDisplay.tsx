import { Card, Image } from "@mantine/core";

interface FlagDisplayProps {
  /**
   * Currently active country shown in the display
   */
  activeCountry: CountryItem;
}

type CountryItem = {
  flag: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  }
}

export default function FlagDisplay(props: FlagDisplayProps) {
  return (
    <Card p={0} shadow="md" style={{ border: "1px solid #ddd" }}>
      <Image src={props.activeCountry.flags.png} alt={props.activeCountry.flags.alt} />
    </Card>
  );
}
