import { useEffect, useState } from "react";
import { Alert, Button, Group, Radio, Stack, TextInput } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

import Countries from "../../assets/countries.json";
import FlagDisplay from "../FlagDisplay";
import AnswerEvalAlert from "../AnswerEvalAlert";
import NextButton from "../NextButton";

interface QuickPlayContentProps {
  /**
   * How to filter the countries. If no value passed, all are used.
   */
  countriesFilter?: string[];
  /**
   * If true, answers will be in multiple choice form.
   */
  isMultChoice: boolean;
}

export default function QuickPlayContent(props: QuickPlayContentProps) {
  let countries = Countries;

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
      setCorrectAnswers(prevCorrect => prevCorrect + 1);
    } else {
      setAnswerEval(false);
    }

    setTotalAnswers(prevScore => prevScore + 1);
    setShowAnswerEval(true);
    setIsSubmitDisabled(true);
  };
  
  useEffect(() => {}, [totalAnswers])

  const generateRandNums = () => {
    let numsArr = [];
    while (numsArr.length !== 3) {
      let num = Math.floor(Math.random() * countries.length);
      let isDuplicate = false;

      numsArr.forEach(item => {
        if (item === num) isDuplicate = true;
      });
      if (isDuplicate) continue;

      numsArr.push(num);
    }

    return numsArr;
  };

  const shuffle = (arr: any[]) => {
    let currentIndex = arr.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex], arr[currentIndex]];
    }
  };

  const randomNumbers = generateRandNums();
  const multChoiceAnswers = [
    activeCountry,
    countries[randomNumbers[0]],
    countries[randomNumbers[1]],
    countries[randomNumbers[2]]
  ];
  shuffle(multChoiceAnswers);

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
      <TextInput
        style={{ fontSize: "16px" }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserAnswer(event.target.value)}
        placeholder="Country Name"
        value={userAnswer}
        withAsterisk />
      <Alert color="orange" title="Multiple choice answering not yet functional" />
      <Group>
        <Radio p={4} label={multChoiceAnswers[0].name} style={{ flexBasis: "40%" }} />
        <Radio p={4} label={multChoiceAnswers[1].name} style={{ flexBasis: "40%" }} />
        <Radio p={4} label={multChoiceAnswers[2].name} style={{ flexBasis: "40%" }} />
        <Radio p={4} label={multChoiceAnswers[3].name} style={{ flexBasis: "40%" }} />
      </Group>
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