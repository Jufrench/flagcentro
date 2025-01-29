import { Button } from "@mantine/core";
import { useState } from "react"

interface HintButtonProps {
  buttonText: string;
  hintText: string;
}

export default function HintButton(props: HintButtonProps) {
  const [showHint, setShowHint] = useState<boolean>(false);

  return (
    <>
      {showHint
      ? <div>{props.hintText}</div>
      : <Button onClick={() => setShowHint(true)} size="xs">{props.buttonText}</Button>}
    </>
  )
}