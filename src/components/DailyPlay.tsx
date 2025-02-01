import { useState } from "react";
import { Button, Stack, TextInput } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";


import FlagDisplay from "./FlagDisplay";
import Countries from "../assets/countries.json";
import { AnswerHint } from "./Hint/AnswerHint";

export default function DailyPlay() {
  let countries = [...Countries];
  const randNum = Math.floor(Math.random() * countries.length);
  const country = countries[randNum];

  const [userAnswer, setUserAnswer] = useState<string>("");
  const [hasSubmittedAnswer, setHasSubmittedAnswer] = useState<boolean>(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);

  const handleSubmitAnswer = () => {
    // if ((activeCountry.name).toLowerCase() === userAnswer.toLowerCase().trim()) {
    //   setAnswerEval(true);
    //   setCorrectAnswers(prevCorrect => prevCorrect + 1);
    // } else {
    //   setAnswerEval(false);
    // }

    // setShowAnswerEval(true);
    setIsSubmitDisabled(true);
    setHasSubmittedAnswer(true);
  };
  
  return (
    <Stack>
      <FlagDisplay activeCountry={country} />
      <AnswerHint activeCountry={country} />
      <TextInput
        style={{ fontSize: "16px" }}
        label="Solve"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserAnswer(event.target.value)}
        placeholder="Country Name"
        value={userAnswer} />
      <Button
        style={{ flexGrow: hasSubmittedAnswer ? 0 : 2 }}
        disabled={userAnswer.length < 2 ? true : isSubmitDisabled}
        onClick={handleSubmitAnswer}
      >
        <IconCheck />
      </Button>
    </Stack>
  )
}