import { Stack } from "@mantine/core";
import FlagDisplay, { CountryItem } from "../FlagDisplay";

interface DailyPlayContentProps {
  activeCountry: CountryItem;
}

export default function DailyPlayContent(props: DailyPlayContentProps) {
  return (
    <Stack pb="4em" style={{ margin: "0 auto", maxWidth: "500px" }}>
      <FlagDisplay activeCountry={props.activeCountry} />
    </Stack>
  )
}