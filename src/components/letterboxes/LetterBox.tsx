import { Box } from "@mantine/core";
import { useState } from "react";

interface LetterBoxProps {
  activeIndex: number;
  index: number;
  letter: string;
}

export default function LetterBox(props: LetterBoxProps) {
  // const [isActive, setIsActive] = useState();
  const [boxChar, /* setBoxChar */] = useState<string>("");

  console.log('props.index:', props.index)

  return (
    <Box
      pt="xs"
      pb="xs"
      style={{
        border: "1px solid #ccc",
        minHeight: "48px",
        minWidth: "27px",
        textAlign: "center"
      }}
    >
      {boxChar}
      {/* {props.letter} */}
    </Box>
  )
}