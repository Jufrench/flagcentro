import { Button } from "@mantine/core";
import { IconArrowBigRightFilled } from "@tabler/icons-react";

interface NextButtonProps {
  /**
   * Method to call when skipping country
   */
  handleNextCountry: () => void;
  hasSubmittedAnswer?: boolean;
}

export default function NextButton(props: NextButtonProps) {

  return (
    <Button
      color="red"
      // onClick={props.handleNextCountry}
      onClick={() => {
        console.log('clicked!!')
        props.handleNextCountry()
      }}
      // size="compact-sm"
      style={{ flexGrow: props.hasSubmittedAnswer ? 2 : 0 }}
      rightSection={<IconArrowBigRightFilled size={14} />}
      variant="light"
      // w="fit-content"
    >
      Next
    </Button>
  )
}