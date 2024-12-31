import { useState } from "react";
import { Button, Stack, TextInput } from "@mantine/core";

import Countries from "../../public/countries.json";
import FlagDisplay from "./FlagDisplay";
import AnswerEvalAlert from "./AnswerEvalAlert";
import SkipButton from "./SkipButton";

export default function QuickPlay() {
  const randNum = Math.floor(Math.random() * 250);

  const [activeCountry, setActiveCountry] = useState<any>(Countries[randNum]);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [answerEval, setAnswerEval] = useState<boolean | null>(null);
  const [showAnswerEval, setShowAnswerEval] = useState<boolean>(false);

  const handleSubmitAnswer = () => {
    if ((activeCountry.name).toLowerCase() === userAnswer.toLowerCase()) {
      setAnswerEval(true);
    } else {
      setAnswerEval(false);
    }

    setShowAnswerEval(true);

    setTimeout(() => {
      handleNextCountry();
    }, 2000);
  };

  const handleNextCountry = () => {
    setActiveCountry(Countries[randNum]);
    setUserAnswer("");
    setShowAnswerEval(false);
  };

  return (
    <Stack>
      <FlagDisplay activeCountry={activeCountry} />
      {showAnswerEval && <AnswerEvalAlert isCorrect={answerEval} />}
      <TextInput
        style={{ fontSize: "16px" }}
        label="Country Name"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserAnswer(event.target.value)}
        placeholder="Name..."
        value={userAnswer}
        withAsterisk />
      <Button disabled={userAnswer.length < 2 ? true : false} onClick={handleSubmitAnswer}>Submit</Button>
      <SkipButton handleSkipCountry={handleNextCountry} />
    </Stack>
  );
}

