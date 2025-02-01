import { Stack } from "@mantine/core";
import FlagDisplay from "./FlagDisplay";

import Countries from "../assets/countries.json";
import { AnswerHint } from "./Hint/AnswerHint";

export default function DailyPlay() {
  let countries = [...Countries];
  const randNum = Math.floor(Math.random() * countries.length);
  const country = countries[randNum];
  
  return (
    <Stack>
      <FlagDisplay activeCountry={country} />
      <AnswerHint activeCountry={country} />
    </Stack>
  )
}