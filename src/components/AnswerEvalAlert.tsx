import { Alert } from "@mantine/core";

interface AnswerEvalAlertProps {
  correctCountry: Record<string, string | any>;
  isCorrect: boolean | null;
}

export default function AnswerEvalAlert(props: AnswerEvalAlertProps) {
  return (
    <Alert
      color={props.isCorrect ? "green" : "red"}
      title={props.isCorrect ? "Correct!" : `Incorrect: ${props.correctCountry.name} (${props.correctCountry.names.es})`}
    />
  );
}
