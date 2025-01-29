import { Button, Group, Image, Paper, SimpleGrid, Stack, Text, TextInput } from "@mantine/core";
import { useState } from "react";

import Countries from "../assets/countries.json";

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
    <Stack gap="sm">
      <div>
        <Text>Search for a Country</Text>
        <TextInput
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserInput(event.target.value)}
          value={userInput} />
      </div>
      <Group gap={4} style={{ flexWrap: "nowrap", overflowX: "scroll" }}>
        {regions.map(item => {
          return (
            <Button
              key={item}
              color="black"              
              onClick={() => {
                const value = activeRegion === item ? "" : item;
                setActiveRegion(value);
              }}
              rightSection={activeRegion === item ? "x" : " "}
              size="xs"
              style={{ overflow: "visible" }}
              variant={activeRegion === item ? "filled" : "outline"}>
              {item}
            </Button>
          )
        })}
      </Group>
      <SimpleGrid cols={2}>
        {foundCoutnries.map((country: any) => {
          return (
            // <div key={country.name}>
            //   <Text size="md" style={{
            //     background: "#fff",
            //     color: "#000"
            //   }}>{country.name}</Text>
            //   <Image src={country.flags.png} alt={country.flags.alt} />
            // </div>
            // <Card key={country.name} withBorder>
            //   <Text size="md" style={{ background: "#fff", color: "#000" }}>
            //     {country.name}
            //   </Text>
            //   <Card.Section>
            //     <Image src={country.flags.png} alt={country.flags.alt} />
            //   </Card.Section>
            // </Card>
            <Paper key={country.name} withBorder>
              <Text size="md" pb="xs" style={{ background: "#fff", color: "#000" }}>
                {country.name}
              </Text>
              <Image src={country.flags.png} alt={country.flags.alt} />
            </Paper>
          )
        })}
      </SimpleGrid>
    </Stack>
  )
}