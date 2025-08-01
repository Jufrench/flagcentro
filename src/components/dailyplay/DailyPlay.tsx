import { useRef, useState } from "react";
import { Alert, Button, Stack, TextInput } from "@mantine/core";
import { IconBarrierBlock, IconCheck } from "@tabler/icons-react";


import FlagDisplay from "../FlagDisplay";
import Countries from "../../assets/countries.json";
import { AnswerHint } from "../Hint/AnswerHint";
// import SolveInput from "./SolveInput";
import NameInputs from "./NameInputs";

export default function DailyPlay() {
  const inputRef = useRef(null);
  let countries = [...Countries];
  const randNum = Math.floor(Math.random() * countries.length);
  // const randNum = useMemo(() => Math.floor(Math.random() * countries.length), []);
  const country = countries[randNum];

  // const [userAnswer, setUserAnswer] = useState<string>("");
  const [hasSubmittedAnswer, setHasSubmittedAnswer] = useState<boolean>(false);
  // const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);

  const handleSubmitAnswer = () => {
    // if ((activeCountry.name).toLowerCase() === userAnswer.toLowerCase().trim()) {
    //   setAnswerEval(true);
    //   setCorrectAnswers(prevCorrect => prevCorrect + 1);
    // } else {
    //   setAnswerEval(false);
    // }

    // setShowAnswerEval(true);
    // setIsSubmitDisabled(true);
    setHasSubmittedAnswer(true);
    console.log('inputRef:', inputRef)
  };
  
  return (
    <Stack style={{ margin: "0 auto", maxWidth: "500px" }}>
      <Alert variant="filled" color="red" title="Under Construction" icon={<IconBarrierBlock />}>This page is currently under constuction.</Alert>
      {/* <FlagDisplay activeCountry={country} /> */}
      <AnswerHint activeCountry={country} />
      <NameInputs countryName={country.name} />
      <TextInput
        ref={inputRef}
        style={{ fontSize: "16px" }}
        label="Solve"
        // onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserAnswer(event.target.value)}
        placeholder="Country Name"
        // value={userAnswer}
        />
      {/* <SolveInput
        setUserAnswer={value => {
          handleSetUserAnswer(value);
        }}
      /> */}
      <Button
        style={{ flexGrow: hasSubmittedAnswer ? 0 : 2 }}
        // disabled={userAnswer.length < 2 ? true : isSubmitDisabled}
        onClick={handleSubmitAnswer}
      >
        <IconCheck />
      </Button>
      <Button
        color="red"
        onClick={() => {
        }}
        variant="light"
      >
        Next
      </Button>
    </Stack>
  )
}