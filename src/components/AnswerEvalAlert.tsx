import { Alert } from "@mantine/core";
import { IconMoodHappyFilled, IconMoodSadFilled } from '@tabler/icons-react';

interface AnswerEvalAlertProps {
  correctCountry: Record<string, string | any>;
  isCorrect: boolean | null;
}

export default function AnswerEvalAlert(props: AnswerEvalAlertProps) {
  const happyIcon = <IconMoodHappyFilled />;
  const sadIcon = <IconMoodSadFilled />;

  return (
    <Alert
      style={{ flexGrow: 1 }}
      p={5}
      color={props.isCorrect ? "green" : "red"}
      icon={props.isCorrect ? happyIcon : sadIcon}
      title={props.isCorrect ? "Correct!" : `Incorrect: ${props.correctCountry.name} (${props.correctCountry.names.es})`}
    />
  );
}
