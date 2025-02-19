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

  const [nameSpaces, setNameSpaces] = useState<string[][]>([]);
  // const [currentSpace, setCurrentSpace] = useState<number[]>([0, 0]);

  const [currentSpace, setCurrentSpace] = useState<{ word: number, position: number}>({
    word: 0,
    position: 0
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

    setNameSpaces([...emptySpaces]);
  }, [props.activeCountry]);

  console.log('%cnameSpaces:', 'color:goldenrod', nameSpaces)
  // console.log('newNameSpaces[0].length:', nameSpaces[0].length - 1)

  function handleLetterClick(letter: string) {

    const isLastWord = currentSpace.word === nameSpaces.length - 1;
    const isLastPosition = currentSpace.position === nameSpaces[currentSpace.word].length - 1;

    if (isLastWord && isLastPosition) {
      console.log('%cDONE!', 'background:goldenrod')
      return;
    }

    let newNameSpaces = [...nameSpaces];

    // === Works with ARRAY current space
    // === moving to next word can be tricky
    // newNameSpaces[currentSpace[0]][currentSpace[1]] = letter;
    // setNameSpaces(newNameSpaces);
    // const newCurrentSpace = [0, currentSpace[1] + 1];
    // setCurrentSpace(newCurrentSpace);

    // === Works with OBJECT current space
    newNameSpaces[currentSpace.word][currentSpace.position] = letter;
    setNameSpaces(newNameSpaces);

    // If the letter is the last index in the word, move to next word
    if (isLastPosition) {
      const newCurrentSpace = { word: currentSpace.word + 1, position: 0 };
      setCurrentSpace(newCurrentSpace);
      return;
    }

    const newCurrentSpace = { word: currentSpace.word, position: currentSpace.position + 1 };
    setCurrentSpace(newCurrentSpace);


    // const newCurrentSpace = { word: 0, letter: currentSpace.letter + 1 };
    // const newCurrentSpace = [0, currentSpace[1] + 1];
    // setCurrentSpace(newCurrentSpace);
    // setNameSpaces(prevState => {
    //   const newLetter = prevState[currentSpace.word][currentSpace.letter] = letter;
    //   return [...prevState]
    // });



    const test = [[...nameSpaces[0]], [...nameSpaces[1]]]

    console.group('%ctesting:', 'background:tomato')
    console.log('test:', test)
    console.log('newNameSpaces:', newNameSpaces)
    console.log('newNameSpaces[0]:', newNameSpaces[0])
    console.groupEnd()
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