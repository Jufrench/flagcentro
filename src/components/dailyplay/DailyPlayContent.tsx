import { Stack } from "@mantine/core";

import FlagDisplay, { CountryItem } from "../FlagDisplay";
import Keyboard from "../Keyboard";
// import NameInputs from "./NameInputs";
import LetterBoxesWrap from "../letterboxes/LetterBoxesWrap";
import { useEffect, useState } from "react";

interface DailyPlayContentProps {
  activeCountry: CountryItem;
}

export default function DailyPlayContent(props: DailyPlayContentProps) {
  // const qwertyEnglish = [
  //   ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  //   ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  //   ["Z", "X", "C", "V", "B", "N", "M"]
  // ];

  // const qwertySpanish = [
  //   ["Á", "É", "Í", "Ó", "Ú"],
  //   ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  //   ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
  //   ["Z", "X", "C", "V", "B", "N", "M"]
  // ];

  const letters = {
    english: [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["Z", "X", "C", "V", "B", "N", "M"]
    ],
    spanish: [
      ["Á", "É", "Í", "Ó", "Ú"],
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
      ["Z", "X", "C", "V", "B", "N", "M"]
    ]
  };

  const [/* userLetters */, setUserLetters] = useState<string>("");
  // const [nameSpaces, setNameSpaces] = useState<string[]>([]);
  const [nameSpaces, setNameSpaces] = useState<string[][]>([]);
  // const [currentSpace, setCurrentSpace] = useState<number[]>([0, 0]);
  const [currentSpace, setCurrentSpace] = useState<{ word: number, letter: number}>({
    word: 0,
    letter: 0
  });

  useEffect(() => {
    const tempArray: string[] = [];
    [...props.activeCountry.name].forEach(letter => {
      if (letter === " ") return;
      tempArray.push("");
    })

    // setNameSpaces([...tempArray]);

    const spaces = props.activeCountry.name.split(" ");
    const emptySpaces = spaces.map(word => {
      return (
        [...word].map(() => {
          return "";
        })
      );
    })

    // console.log('spaces:', spaces);
    // console.log('emptySpaces:', emptySpaces);

    setNameSpaces([...emptySpaces]);
  }, [props.activeCountry]);

  // console.log('nameSpaces:', nameSpaces)

  function handleLetterClick(letter: string) {
    // console.log('letter:', letter)
    setUserLetters(letter);
    let newNameSpaces: string[][] = [[]];
    newNameSpaces[currentSpace.word][currentSpace.letter] = letter;
    console.log('newNameSpaces:', [newNameSpaces, ...nameSpaces])

    const newCurrentSpace = { word: 0, letter: currentSpace.letter + 1 };
    setCurrentSpace(newCurrentSpace);
    // setNameSpaces(newNameSpaces);

    // setCurrentSpace(prevSpace => prevSpace + 1);
  }

  return (
    <Stack pb="4em" style={{ margin: "0 auto", maxWidth: "500px" }}>
      <FlagDisplay activeCountry={props.activeCountry} />
      {/* <Keyboard letters={qwertyEnglish} /> */}
      {/* <Group gap={1} justify="center">
        {Array.from(props.activeCountry.name.toUpperCase()).map(letter => {
          return (
            <Box
              pt="xs"
              pb="xs"
              style={{
                border: "1px solid #ccc",
                minWidth: "27px",
                textAlign: "center"
              }}
            >
              {letter}
            </Box>
          );
        })}
      </Group> */}
      {/* <NameInputs countryName={props.activeCountry.name} /> */}
      <LetterBoxesWrap
        countryName={props.activeCountry.name.toUpperCase()}
        nameSpaces={nameSpaces}
      />
      <Keyboard
        language="english"
        letters={letters}
        onClick={(letter: string) => handleLetterClick(letter)} />
    </Stack>
  )
}