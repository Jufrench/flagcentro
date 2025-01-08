import { useState } from "react";
import { Button, Group, Stack, TextInput } from "@mantine/core";

import Countries from "../assets/countries.json";
import FlagDisplay from "./FlagDisplay";
import NextButton from "./NextButton";
import AnswerEvalAlert from "./AnswerEvalAlert";

export default function QuickPlayDrawer() {
  let countries = Countries;
  const randNum = Math.floor(Math.random() * countries.length);
  
  const [activeCountry, setActiveCountry] = useState<any | null>(countries[randNum]);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [answerEval, setAnswerEval] = useState<boolean | null>(null);
  const [showAnswerEval, setShowAnswerEval] = useState<boolean>(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);

  const handleNextCountry = () => {
    setActiveCountry(countries[randNum]);
    setUserAnswer("");
    setShowAnswerEval(false);
    setIsSubmitDisabled(false);

    const activeCountryIndex = countries.findIndex(country => activeCountry.name === country.name);
    countries.splice(activeCountryIndex, 1);
  };

  const handleSubmitAnswer = () => {
    if ((activeCountry.name).toLowerCase() === userAnswer.toLowerCase().trim()) {
      setAnswerEval(true);
    } else {
      setAnswerEval(false);
    }

    setShowAnswerEval(true);
    setIsSubmitDisabled(true);
  };

  return (
    <Stack pt="5em" pb="4em" style={{ minHeight: "100vh" }}>
      <FlagDisplay activeCountry={activeCountry} />
      {showAnswerEval && <AnswerEvalAlert correctCountry={activeCountry} isCorrect={answerEval} />}
      <TextInput
        style={{ fontSize: "16px" }}
        label="Country Name"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserAnswer(event.target.value)}
        placeholder="Name..."
        value={userAnswer}
        withAsterisk />
      <Group>
        <NextButton handleNextCountry={handleNextCountry} />
        <Button
          disabled={userAnswer.length < 2 ? true : isSubmitDisabled}
          onClick={handleSubmitAnswer}
          style={{ flexGrow: 1 }}
        >
          Submit
        </Button>
      </Group>
    </Stack>
  )
}