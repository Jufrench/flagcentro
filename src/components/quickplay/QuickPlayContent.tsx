import { useEffect, useState } from "react";
import { Button, Group, Stack, TextInput } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

import Countries from "../../assets/countries.json";
import FlagDisplay from "../FlagDisplay";
import AnswerEvalAlert from "../AnswerEvalAlert";
import NextButton from "../NextButton";
import MultipleChoiceRadio from "./MultipleChoiceRadio";
import { AnswerHint } from "../Hint/AnswerHint";

interface QuickPlayContentProps {
  /**
   * How to filter the countries. If no value passed, all are used.
   */
  countriesFilter?: string[];
  /**
   * If true, answers will be in multiple choice form.
   */
  quickPlayType: string;
}

export default function QuickPlayContent(props: QuickPlayContentProps) {
  let countries = [...Countries];

  if (props.countriesFilter && props.countriesFilter.length > 0) {
    countries = countries.filter(country => {

      let found = "";
      props.countriesFilter?.forEach(item => {
        if (item.includes(country.region.toLowerCase())) found = item;
      });
      
      return found;
    });
  }

  const [unseenCountries, setUnseenCountries] = useState<any[]>(countries);
  const randNum = Math.floor(Math.random() * unseenCountries.length);
  
  const [activeCountry, setActiveCountry] = useState<any | null>(countries[randNum]);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [answerEval, setAnswerEval] = useState<boolean | null>(null);
  const [showAnswerEval, setShowAnswerEval] = useState<boolean>(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);
  const [totalAnswers, setTotalAnswers] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [/* seenCountries */, setSeenCountries] = useState<any[]>([]);

  const handleNextCountry = () => {
    const randCountry = unseenCountries[randNum];
    setActiveCountry(randCountry);
    setUserAnswer("");
    setShowAnswerEval(false);
    setIsSubmitDisabled(false);

    const activeCountryIndex = countries.findIndex(country => activeCountry.name === country.name);
    
    countries.splice(activeCountryIndex, 1);

    setSeenCountries(prevSeen => [...prevSeen, activeCountry]);

    setUnseenCountries(prevUnseen => prevUnseen.filter(item => {
      return item.name !== activeCountry.name;
    }));
  };

  const handleSubmitAnswer = () => {
    if ((activeCountry.name).toLowerCase() === userAnswer.toLowerCase().trim()) {
      setAnswerEval(true);
      setCorrectAnswers(prevCorrect => prevCorrect + 1);
    } else {
      setAnswerEval(false);
    }

    setTotalAnswers(prevScore => prevScore + 1);
    setShowAnswerEval(true);
    setIsSubmitDisabled(true);
  };

  const handleSetUserAnswer = (answer: string) => setUserAnswer(answer);
  
  useEffect(() => {}, [totalAnswers]);

  console.log('%ctry getting the index of the active country and adding the index to a filtered out list when going to the next country', 'color:tomato');
  // TODO:
  // should consider whether multiple choice component should handle rendering it\'s own answers or not

  return (
    <Stack pt="5em" pb="4em">
      <FlagDisplay activeCountry={activeCountry} />
      <Group justify="flex-end">
        {showAnswerEval && <AnswerEvalAlert correctCountry={activeCountry} isCorrect={answerEval} />}
        <Group gap={5}>
          <span>Score: </span>
          <span><span>{correctAnswers}</span><span>/</span><span>{totalAnswers}</span></span>
        </Group>
      </Group>
      <AnswerHint activeCountry={activeCountry} />
      {props.quickPlayType === "standard" &&
        <TextInput
          style={{ fontSize: "16px" }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserAnswer(event.target.value)}
          placeholder="Country Name"
          value={userAnswer}
          withAsterisk />}
      {props.quickPlayType === "multiple" &&
        <MultipleChoiceRadio
          activeCountry={activeCountry}
          handleSetUserAnswer={handleSetUserAnswer}
          />}
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