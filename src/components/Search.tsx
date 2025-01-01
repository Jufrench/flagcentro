import { Button, Group, Image, SimpleGrid, Stack, Text, TextInput } from "@mantine/core";
import { useState } from "react";

import Countries from "../../public/countries.json";

export default function Search() {
  const [userInput, setUserInput] = useState("");
  const [activeRegion, setActiveRegion] = useState("");

  let foundCoutnries = Countries.filter(country => {
    if (activeRegion !== "") {
      return 
    }
    return country.name.toLowerCase().includes(userInput.toLowerCase());
  });

  const regions = [
    'africa', 'asia', 'australia', 'europe', 'north america', 'south america'
  ];

  return (
    <Stack gap="sm">
      <div>
        <Text>Search for a Country</Text>
        <TextInput
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserInput(event.target.value)}
          value={userInput} />
      </div>
      <Group gap={4}>
        {regions.map(item => {
          return (
            <Button color="black" variant="outline" onClick={() => setActiveRegion(item)} size="xs">{item}</Button>
          )
        })}
      </Group>
      <SimpleGrid cols={3}>
        {foundCoutnries.map((country: any) => {
          return (
            <div>
              <Text size="md">{country.name}</Text>
              <Image src={country.flags.png} alt={country.flags.alt} />
            </div>
          )
        })}
      </SimpleGrid>
    </Stack>
  )
}