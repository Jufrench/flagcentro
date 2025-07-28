import { Button, Divider, Group, SimpleGrid, Stack, Text, TextInput } from "@mantine/core";
import React, { useState } from "react";

import Countries from "../assets/countries.json";
import FlagDisplay from "./FlagDisplay";

export default function Search() {
  const [userInput, setUserInput] = useState("");
  const [activeRegion, setActiveRegion] = useState("");

  let foundCoutnries = Countries.filter(country => {
    if (activeRegion !== "") {
      return country.region.toLowerCase().includes(activeRegion);
    }

    return country.name.toLowerCase().includes(userInput.toLowerCase());
  });

  const regions = [ 'africa', 'americas', 'asia', 'europe', 'oceania' ];

  return (
    <Stack gap="sm" style={{ margin: "0 auto", maxWidth: "500px" }}>
      <div>
        <Text>Search for a Country</Text>
        <TextInput
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserInput(event.target.value)}
          value={userInput}
        />
      </div>
      <Group mt="xs" gap="xs" style={{ flexWrap: "wrap" }}>
        {regions.map(item => {
          return (
            <Button
              key={item}
              color="black"              
              onClick={() => {
                const value = activeRegion === item ? "" : item;
                setActiveRegion(value);
              }}
              rightSection={activeRegion === item ? "x" : null}
              size="xs"
              variant={activeRegion === item ? "filled" : "outline"}
            >
              <Text component="span" tt="capitalize">{item}</Text>
            </Button>
          );
        })}
      </Group>
      <Divider my="xs" />
      {/* <SimpleGrid cols={2}>
        {foundCoutnries.map((country: any) => {
          return (
            <Stack key={country.name} gap={3}>
              <Paper withBorder ta="center" shadow="sm">
                {country.name}
              </Paper>
              <Paper withBorder shadow="sm">
                <Image radius="sm" src={country.flags.png} style={{ border: "1px solid gray" }} />
              </Paper>
            </Stack>
          )
        })}
      </SimpleGrid> */}
      <SimpleGrid cols={2}>
        {foundCoutnries.map((country: any) => {
          return (
            <React.Fragment key={country.name}>
              <FlagDisplay activeCountry={country} showName={true} />
            </React.Fragment>
          );
        })}
      </SimpleGrid>
    </Stack>
  )
}