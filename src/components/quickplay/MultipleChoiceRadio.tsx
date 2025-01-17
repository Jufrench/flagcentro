import { useEffect, useMemo, useState } from "react";
import { Group, Radio } from "@mantine/core";

import Countries from "../../assets/countries.json";

interface MultipleChoiceRadioProps {
  /**
   * 
   */
  activeCountry: Record<string, string>
  /**
   * Sets the user's answer
   * @param answer
   * @returns void
   */
  handleSetUserAnswer?: (answer: string) => void;
  /**
   * List of multiple choice answers
   */
  multiChoiceAnswers?: Record<string, string>[];
}

export default function MultipleChoiceRadio(props: MultipleChoiceRadioProps) {
  let countries = [...Countries];

  const [userAnswer, setUserAnswer] = useState<string>("");

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

  const randomNumbers = useMemo(() => {
    return generateRandNums();
  }, [props.activeCountry]);

  console.log("TODO: make this run just once, probably using useMemo()");
  const multiChoiceAnswers = [
    props.activeCountry,
    countries[randomNumbers[0]],
    countries[randomNumbers[1]],
    countries[randomNumbers[2]]
  ];

  useEffect(() => {
    shuffle(multiChoiceAnswers);
    console.log('do you need use effect here?')
  }, [props.activeCountry])

  return (
    <Radio.Group
      value={userAnswer}
      onChange={(newValue: string) => {
        setUserAnswer(newValue);
        if (props.handleSetUserAnswer) {
          props.handleSetUserAnswer(newValue);
        }
      }}>
      <Group>
        <Radio p={4} label={multiChoiceAnswers[0].name} value={multiChoiceAnswers[0].name} style={{ flexBasis: "40%" }} />
        <Radio p={4} label={multiChoiceAnswers[1].name} value={multiChoiceAnswers[1].name} style={{ flexBasis: "40%" }} />
        <Radio p={4} label={multiChoiceAnswers[2].name} value={multiChoiceAnswers[2].name} style={{ flexBasis: "40%" }} />
        <Radio p={4} label={multiChoiceAnswers[3].name} value={multiChoiceAnswers[3].name} style={{ flexBasis: "40%" }} />
      </Group>
    </Radio.Group>
  )
}