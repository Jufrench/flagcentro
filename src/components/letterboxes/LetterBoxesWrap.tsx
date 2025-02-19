import { Group } from "@mantine/core";
import LetterBox from "./LetterBox";

interface LetterBoxesWrapProps {
  countryName: string;
  // nameSpaces: string[];
  nameSpaces: string[][];
}

export default function LetterBoxesWrap(props: LetterBoxesWrapProps) {
  // const words = props.countryName.split(" ");


  return (
    <Group gap="xs" justify="center">
      {props.nameSpaces.map((word: string[], index: number) => {

        // TODO: change the key for this

        return (
          <Group
            key={word[0] + index}
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
                  // activeIndex={0}
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
  // return (
  //   <Group gap="xs" justify="center">
  //     {words.map((word: string) => {
  //       return (
  //         <Group
  //           key={word}
  //           gap={2}
  //           style={{
  //             whiteSpace: "nowrap",
  //             display: "flex",
  //           }}
  //         >
  //           {[...word].map((letter: string, index: number) => {
  //             const key = letter + index;
  //             return (
  //               <LetterBox
  //                 key={key}
  //                 // activeIndex={0}
  //                 // index={index}
  //                 // letter={letter}
  //               />
  //             )
  //           })}
  //         </Group>
  //       );
  //     })}
  //   </Group>
  // )
}