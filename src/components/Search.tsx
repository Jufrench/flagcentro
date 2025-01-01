import { Image, SimpleGrid, Text, TextInput } from "@mantine/core";
import { useState } from "react";

import Countries from "../../public/countries.json";

export default function Search() {
  const [userInput, setUserInput] = useState("");

  const foundCoutnries = Countries.filter(country => {
    return country.name.toLowerCase().includes(userInput.toLowerCase());
  })

  return (
    <>
      <Text>Search for a Country</Text>
      <TextInput
        mb="sm"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserInput(event.target.value)}
        value={userInput} />
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
    </>
  )
}