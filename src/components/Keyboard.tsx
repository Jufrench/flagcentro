import { Button, Group, Stack } from "@mantine/core";
import { IconBackspace, IconChecks } from "@tabler/icons-react";

interface KeyboardProps {
  // letters: string[][];
  // letters: Record<string, string[]>;
  language?: "english" | "spanish" | undefined;
  letters: {
    english: string[][],
    spanish: string[][],
  };
}

export default function Keyboard(props: KeyboardProps) {
  // const language: 'english' | 'spanish' = 'english';
  const language = props.language ?? "english";

  console.log('props', props.letters.english)

  return (
    // <>hello</>
    <Stack gap="md" >
      {props.letters[language].map((row: any, index: number) => {
        return (
          <Group
            gap={((index === 0 && language === 'spanish') ? 4 : 0)}
            justify={(index === 0 && language === 'spanish') ? 'flex-start' : 'space-between'}
            // style={{
            //   width: index === 1 ? "95%" : "100%"
            // }}
          >
            {index === props.letters[language].length - 1 &&
              <Button size="compact-xl"><IconBackspace /></Button>
            }
            {row.map((letter: string) => {
              return (
                <Button
                  size="compact-xl"
                  style={{
                    padding: "0 6px",
                    minWidth: "30px"
                  }}
                >
                  {letter}
                </Button>
              );
            })}
            {index === props.letters[language].length - 1 &&
              <Button size="compact-xl"><IconChecks /></Button>
            }
          </Group>
        );
      })}
    </Stack>
  )
  // return (
  //   <Stack gap="md" >
  //     {props.letters.map((row: string[], index: number) => {
  //       return (
  //         <Group
  //           gap={0}
  //           justify="space-between"
  //           // style={{
  //           //   width: index === 1 ? "95%" : "100%"
  //           // }}
  //         >
  //           {index === props.letters.length - 1 &&
  //             <Button size="compact-xl"><IconBackspace /></Button>
  //           }
  //           {row.map((letter: string) => {
  //             return (
  //               <Button
  //                 size="compact-xl"
  //                 style={{
  //                   padding: "0 6px",
  //                   minWidth: "30px"
  //                 }}
  //               >
  //                 {letter}
  //               </Button>
  //             );
  //           })}
  //           {index === props.letters.length - 1 &&
  //             <Button size="compact-xl"><IconChecks /></Button>
  //           }
  //         </Group>
  //       );
  //     })}
  //   </Stack>
  // )
}