import { useState } from "react";
import { Button, Group, Stack, TextInput } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

import Countries from "../../assets/countries.json";
import FlagDisplay from "../FlagDisplay";
import AnswerEvalAlert from "../AnswerEvalAlert";
import NextButton from "../NextButton";

export default function QuickPlayContent() {
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
    <Stack>
      <FlagDisplay activeCountry={activeCountry} />
      {showAnswerEval && <AnswerEvalAlert correctCountry={activeCountry} isCorrect={answerEval} />}
      <TextInput
        style={{ fontSize: "16px" }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserAnswer(event.target.value)}
        placeholder="Country Name"
        value={userAnswer}
        withAsterisk />
      <Group>
        <NextButton handleNextCountry={handleNextCountry} />
        <Button
          style={{ flexGrow: 1 }}
          disabled={userAnswer.length < 2 ? true : isSubmitDisabled}
          onClick={handleSubmitAnswer}
        ><IconCheck /></Button>
      </Group>
    </Stack>
  )
}