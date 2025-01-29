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
      // let num = Math.floor(Math.random() * props.unseenCountries.length);
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

  // TODO: make this run just once, probably using useMemo();

  const multiChoiceAnswers = [
    props.activeCountry,
    countries[randomNumbers[0]],
    countries[randomNumbers[1]],
    countries[randomNumbers[2]]
  ];

  
  // TESTING 

  // get random number between 0 & 3 (matches indices of array w/ 4 items)
  const randNum = useMemo(() => {
    return Math.floor(Math.random() * 3);
  }, [props.activeCountry]);

  // Create array to hold multiple choices
  const choicesArray = [];
  
  // make a copy of the random numbers array to avoid empty
  // lookups when shifting on the array
  const randomNumbersCopy = [...randomNumbers];

  // loop through the array
  for (let i = 0; i < 4; i++) {
    // if an index matches the random number,
    // assign that index to the active country & continue to next index
    if (i === randNum) {
      choicesArray[i] = props.activeCountry;
      continue;
    }

    // const firstElement = randomNumbers.shift();
    // Get the first element of the copied random numbers array
    const firstElement = randomNumbersCopy.shift();

    // Add the first element of the random numbers array to the choices array
    // Remove that first element - when looping again there will be one less item
    if (firstElement) choicesArray[i] = countries[firstElement];
  }
  
  TODO:
  // for the random order or answers - on component rerender generate a new random number between 0 and 3
  // then loop through 0 - 3
  // during the loop, add array items based on the index. if the index in the loop matches the randomly generated number, skip (continue) to the next item

  useEffect(() => {
    shuffle(multiChoiceAnswers);
    console.log('%cdo you need use effect here? - always putting the answer first as the first option', 'background:tomato')
  }, [props.activeCountry])

  return (
    <Radio.Group
      value={userAnswer}
      onChange={(newValue: string) => {
        setUserAnswer(newValue);
        if (props.handleSetUserAnswer) props.handleSetUserAnswer(newValue);
      }}>
      <Group>
        {/* <Radio p={4} label={multiChoiceAnswers[0].name} value={multiChoiceAnswers[0].name} style={{ flexBasis: "40%" }} />
        <Radio p={4} label={multiChoiceAnswers[1].name} value={multiChoiceAnswers[1].name} style={{ flexBasis: "40%" }} />
        <Radio p={4} label={multiChoiceAnswers[2].name} value={multiChoiceAnswers[2].name} style={{ flexBasis: "40%" }} />
        <Radio p={4} label={multiChoiceAnswers[3].name} value={multiChoiceAnswers[3].name} style={{ flexBasis: "40%" }} /> */}
        <Radio p={4} label={choicesArray[0].name} value={choicesArray[0].name} style={{ flexBasis: "40%" }} />
        <Radio p={4} label={choicesArray[1].name} value={choicesArray[1].name} style={{ flexBasis: "40%" }} />
        <Radio p={4} label={choicesArray[2].name} value={choicesArray[2].name} style={{ flexBasis: "40%" }} />
        <Radio p={4} label={choicesArray[3].name} value={choicesArray[3].name} style={{ flexBasis: "40%" }} />
      </Group>
    </Radio.Group>
  )
}