import { useState } from "react";
import { Button, Group, Stack, TextInput } from "@mantine/core";

import Countries from "../../../public/countries.json";
import FlagDisplay from "../FlagDisplay";
import AnswerEvalAlert from "../AnswerEvalAlert";
import NextButton from "../NextButton";
import QuickPlayIntro from "./QuickPlayIntro";

export default function QuickPlay() {
  let countries = Countries;
  const randNum = Math.floor(Math.random() * countries.length);

  const [isQuickPlayReady, setIsQuickPlayReady] = useState<boolean>(false);
  const [activeCountry, setActiveCountry] = useState<any | null>(countries[randNum]);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [answerEval, setAnswerEval] = useState<boolean | null>(null);
  const [showAnswerEval, setShowAnswerEval] = useState<boolean>(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);

  const handleSubmitAnswer = () => {
    if ((activeCountry.name).toLowerCase() === userAnswer.toLowerCase().trim()) {
      setAnswerEval(true);
    } else {
      setAnswerEval(false);
    }

    setShowAnswerEval(true);
    setIsSubmitDisabled(true);
  };

  const handleNextCountry = () => {
    setActiveCountry(countries[randNum]);
    setUserAnswer("");
    setShowAnswerEval(false);
    setIsSubmitDisabled(false);

    const activeCountryIndex = countries.findIndex(country => activeCountry.name === country.name);
    countries.splice(activeCountryIndex, 1);
  };

  const handleStartQuickPlay = (value: boolean) => {
    setIsQuickPlayReady(value);
  }

  return (
    <>
      {!isQuickPlayReady
        ?
        <QuickPlayIntro handleStartQuickPlay={handleStartQuickPlay} />
        :
        <Stack>
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
        </Stack>}
    </>
  );
}

