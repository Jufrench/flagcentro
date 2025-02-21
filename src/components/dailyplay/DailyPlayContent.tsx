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
  let { name: countryName } = props.activeCountry;
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

  const [nameSpaces, setNameSpaces] = useState<string[][]>([]);
  const [currentSpace, setCurrentSpace] = useState<{ word: number, position: number}>({
    word: 0,
    position: 0
  });
  const [areSpacesFilled, setAreSpacesFilled] = useState<boolean>(false);

  useEffect(() => {
    const tempArray: string[] = [];

    [...countryName].forEach(letter => {
      if (letter === " ") return;
      tempArray.push("");
    })

    const spaces = countryName.split(" ");
    const emptySpaces = spaces.map(word => {
      return (
        [...word].map(() => {
          return "";
        })
      );
    });

    setNameSpaces([...emptySpaces]);
  }, [props.activeCountry]);

  function handleLetterClick(letter: string) {
    if (areSpacesFilled) { return; }

    const isLastWord = currentSpace.word === nameSpaces.length - 1;
    const isLastPosition = currentSpace.position === nameSpaces[currentSpace.word].length - 1;
    let newNameSpaces = [...nameSpaces];

    newNameSpaces[currentSpace.word][currentSpace.position] = letter;
    setNameSpaces(newNameSpaces);

    // If the letter is the last index in the word
    if (isLastPosition) {
      // If not the last word, move to next word
      if (!isLastWord) {
        const newCurrentSpace = { word: currentSpace.word + 1, position: 0 };
        setCurrentSpace(newCurrentSpace);
        return;
      } else {
        // If IS the last word, then complete!
        console.log('COMPLETE!');
        setAreSpacesFilled(true);
      }
    }

    // If leter is NOT in the last position, move to next position
    if (!isLastPosition) {
      const newCurrentSpace = { word: currentSpace.word, position: currentSpace.position + 1 };
      setCurrentSpace(newCurrentSpace);
    }
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
        countryName={countryName.toUpperCase()}
        nameSpaces={nameSpaces}
      />
      <Keyboard
        language="english"
        letters={letters}
        onClick={(letter: string) => handleLetterClick(letter)} />
    </Stack>
  )
}