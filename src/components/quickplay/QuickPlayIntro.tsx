import { Button } from "@mantine/core";

interface QuickPlayIntroProps {
  handleStartQuickPlay: (value: boolean) => void;
}

export default function QuickPlayIntro(props: QuickPlayIntroProps) {
  return (
    <Button onClick={() => props.handleStartQuickPlay(true)}>Start Quickplay</Button>
  )
}