import { Image, List, Text, TextInput } from "@mantine/core";
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
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserInput(event.target.value)}
        value={userInput} />
      <List listStyleType="none" mt="md" style={{ textAlign: "center" }}>
        {foundCoutnries.map((country: any) => {
          return (
            <List.Item>
              <Image src={country.flags.png} alt={country.flags.alt} />
            </List.Item>
          )
        })}
      </List>
    </>
  )
}