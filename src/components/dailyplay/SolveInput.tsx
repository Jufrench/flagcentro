import { TextInput } from "@mantine/core";
import { useState } from "react";

interface SolveInputProps {
  setUserAnswer: (answer: string) => void;
}

export default function SolveInput(props: SolveInputProps) {
  const [userAnswer, setUserAnswer] = useState<string>("");

  return (
    <TextInput
      style={{ fontSize: "16px" }}
      label="Solve"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
        props.setUserAnswer(event.target.value);
      }}
      placeholder="Country Name"
      value={userAnswer} />
  )
}