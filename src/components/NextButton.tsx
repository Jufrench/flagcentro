import { Button } from "@mantine/core";

interface NextButtonProps {
  /**
   * Method to call when skipping country
   */
  handleNextCountry: () => void;
}

export default function NextButton(props: NextButtonProps) {

  return (
    <Button
      color="red"
      onClick={props.handleNextCountry}
      size="compact-sm"
      variant="light"
      w="fit-content"
    >
      Next
    </Button>
  )
}