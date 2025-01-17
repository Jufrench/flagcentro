import { useEffect, useState } from "react";
import { Button, Group, Stack, TextInput } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

import Countries from "../../assets/countries.json";
import FlagDisplay from "../FlagDisplay";
import AnswerEvalAlert from "../AnswerEvalAlert";
import NextButton from "../NextButton";
import MultipleChoiceRadio from "./MultipleChoiceRadio";

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

  const randNum = Math.floor(Math.random() * countries.length);
  
  const [activeCountry, setActiveCountry] = useState<any | null>(countries[randNum]);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [answerEval, setAnswerEval] = useState<boolean | null>(null);
  const [showAnswerEval, setShowAnswerEval] = useState<boolean>(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);
  const [totalAnswers, setTotalAnswers] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [seenCountries, setSeenCountries] = useState<any[]>([]);
  const [unseenCountries, setUnseenCountries] = useState<any[]>(countries);

  const handleNextCountry = () => {
    setActiveCountry(unseenCountries[randNum]);
    setUserAnswer("");
    setShowAnswerEval(false);
    setIsSubmitDisabled(false);

    const activeCountryIndex = countries.findIndex(country => activeCountry.name === country.name);
    countries.splice(activeCountryIndex, 1);

    setSeenCountries(prevSeen => [...prevSeen, activeCountry]);

    setUnseenCountries(prevUnseen => prevUnseen.filter(item => {
      if (item.name === activeCountry.name) {
        console.log('item.name:', item.name)
        console.log('activeCountry.name:', activeCountry.name)
      }
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

  const handleSetUserAnswer = (answer: string) => {
    setUserAnswer(answer);
  };
  
  useEffect(() => {}, [totalAnswers]);

  console.group('%cQuickPlayContent:', 'background:tomato');
  console.log('seenCountries:', seenCountries);
  console.log('unseenCountries:', unseenCountries);
  console.groupEnd()

  console.log('%ctry getting the index of the active country and adding the index to a filteedr out list when going to the next country', 'color:tomato')
  console.log('should consider whether multiple choice component should handle render it\'s own answers or not');

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