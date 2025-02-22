import { useEffect, useState } from "react";
import { Accordion, Alert, Button, Group, Paper, Stack, TextInput } from "@mantine/core";

import FlagDisplay, { CountryItem } from "../FlagDisplay";
import Keyboard from "../Keyboard";
import LetterBoxesWrap from "../letterboxes/LetterBoxesWrap";

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
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | undefined>();
  const [inputValue, setInputValue] = useState<string>('');
  // const [showLetterBoxes, setShowLetterBoxes] = useState<boolean>(true);

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

  function handleClickBackspace() {
    const firstWord = currentSpace.word === 0;
    const firstPosition = currentSpace.position === 0;

    // If the first word and first space DON'T allow backspace click
    if (firstWord && firstPosition) { return; }

    // If the first space & NOT the last word, DO allow backspace click & jump to previous word
    if (firstPosition && !firstWord) {
      const previousWord = currentSpace.word - 1;
      const previousWordLastLetter = nameSpaces[previousWord].length - 1;
      const newCurrentSpace = { word: previousWord, position: previousWordLastLetter };
      let newNameSpaces = [...nameSpaces];

      newNameSpaces[previousWord][previousWordLastLetter] = "";
      setNameSpaces(newNameSpaces);

      setCurrentSpace(newCurrentSpace);
      return;
    }

    let newNameSpaces = [...nameSpaces];
    // Set the previous letter space to an empty string
    newNameSpaces[currentSpace.word][currentSpace.position - 1] = "";
    setNameSpaces(newNameSpaces);

    // Set the current space model to the current word but previous position
    setCurrentSpace(prevState => {
      return {
        word: prevState.word,
        position: prevState.position - 1
      }
    });
  }

  function handleClickLetter(letter: string) {
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
        const newCurrentSpace = { word: currentSpace.word, position: currentSpace.position + 1 };
        setCurrentSpace(newCurrentSpace);
        setAreSpacesFilled(true);
      }
    }

    // If leter is NOT in the last position, move to next position
    if (!isLastPosition) {
      const newCurrentSpace = { word: currentSpace.word, position: currentSpace.position + 1 };
      setCurrentSpace(newCurrentSpace);
    }
  }

  function handleClickSubmit() {
    const flatUserInput = nameSpaces.flat().join('').toLowerCase();
    const trimCountryName = countryName.replace(/\s/g, '').toLowerCase();

    if (flatUserInput === trimCountryName) {
      console.log('%cYOU DID IT!', 'background:lightgreen');
      setIsAnswerCorrect(true);
    } else {
      console.log('%cTry again next time!', 'color:tomato');
      setIsAnswerCorrect(false);
    }

    setHasSubmitted(true);
  }

  function handleSolve() {
    const trimCountryName = countryName.replace(/\s/g, '').toLowerCase();

    if (inputValue.toLowerCase() === trimCountryName) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }

    setHasSubmitted(true);
    // setShowLetterBoxes(false);
  }

  const AnswerResults = () => {
    return (
      <>
        {isAnswerCorrect
          ?
          <Paper shadow="sm">
            <Alert
              title="Correct!"
              color="green"
              variant="light"
              style={{ border: "1px solid #2f9e44"}}
            >
              Great job today!
            </Alert>
          </Paper>
          :
          <Paper shadow="sm">
            <Alert
              title="Aw Shoot!"
              color="red"
              variant="light"
              style={{ border: "1px solid #e03131"}}
            >
              Tomorrow is another day to try again!
            </Alert>
          </Paper>
        }
      </>
    )
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
      {/* {showLetterBoxes &&       */}
        <LetterBoxesWrap
          countryName={countryName.toUpperCase()}
          nameSpaces={nameSpaces}
        />
      {/* } */}
      {!hasSubmitted &&
        <Accordion>
          <Accordion.Item value="solve">
            <Accordion.Control>Solve</Accordion.Control>
            <Accordion.Panel>
              <Group gap="xs">
                <TextInput
                  style={{
                    // flexGrow: 1
                    width: "70%"
                  }}
                  value={inputValue}
                  onChange={event => setInputValue(event.currentTarget.value)}
                />
                <Button style={{ flexGrow: 1 }} onClick={handleSolve}>
                  Solve
                </Button>
              </Group>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      }
      {!hasSubmitted &&
        <Keyboard
          clickLetter={(letter: string) => handleClickLetter(letter)}
          clickSubmit={handleClickSubmit}
          language="english"
          letters={letters}
          onClickBackspace={handleClickBackspace}
        />
      }
      {(hasSubmitted && !isAnswerCorrect) &&
        <Paper
          withBorder
          shadow="xs"
          p="xs"
          ta="center"
        >
          {countryName}
        </Paper>
      }
      {hasSubmitted && <AnswerResults />}
      {/* <Button onClick={() => console.clear()}>Clear Console</Button> */}
    </Stack>
  )
}

// TODO: turn back on persist logs