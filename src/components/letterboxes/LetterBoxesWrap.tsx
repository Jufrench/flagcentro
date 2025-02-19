import { Group } from "@mantine/core";
import LetterBox from "./LetterBox";

interface LetterBoxesWrapProps {
  countryName: string;
}

export default function LetterBoxesWrap(props: LetterBoxesWrapProps) {
  const words = props.countryName.split(" ");

  return (
    <Group gap="xs" justify="center">
      {words.map((word: string) => {
        return (
          <Group
            key={word}
            gap={2}
            style={{
              whiteSpace: "nowrap",
              display: "flex",
            }}
          >
            {[...word].map((letter: string, index: number) => {
              const key = letter + index;
              return (
                <LetterBox
                  key={key}
                  activeIndex={0}
                  index={index}
                  letter={letter}
                />
              )
            })}
          </Group>
        );
      })}
    </Group>
  )
}