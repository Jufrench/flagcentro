import { useEffect, useState } from "react";
import { Button } from "@mantine/core";

interface SkipButtonProps {
  /**
   * Method to call when skipping country
   */
  handleSkipCountry: () => void;
}

export default function SkipButton(props: SkipButtonProps) {
  const [countdown, setCountdown] = useState<number>(3);
  const [startCountdown, setStartCountdown] = useState<boolean>(false);

  useEffect(() => {
    if (startCountdown) {
      const interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
      if (countdown === 0) {
        setCountdown(2);
        clearInterval(interval);
        setStartCountdown(false);
        props.handleSkipCountry();
      }
      return () => clearInterval(interval);
    }
  }, [startCountdown, countdown])

  return (
    <Button
      color="red"
      onClick={() => setStartCountdown(true)}
      size="compact-sm"
      variant="light"
      w="fit-content"
    >
      {startCountdown ? `Skipping in ${countdown}`: 'Skip'}
    </Button>
  )
}