import { Button, Group, Stack } from "@mantine/core";
// import { useMediaQuery } from "@mantine/hooks";
import { IconBackspace, IconChecks } from "@tabler/icons-react";

interface KeyboardProps {
  // letters: string[][];
  // letters: Record<string, string[]>;
  language?: "english" | "spanish" | undefined;
  letters: {
    english: string[][],
    spanish: string[][],
  };
  onClick: (letter: string) => void;
  onClickBackspace: () => void;
}

export default function Keyboard(props: KeyboardProps) {
  // const matches = useMediaQuery('(max-width: 319px)');
  // const language: 'english' | 'spanish' = 'english';
  const language = props.language ?? "english";

  // console.log('props', props.letters.english)

  return (
    <Stack gap="xs" align="center">
      {props.letters[language].map((row: any, index: number) => {
        return (
          <Group
            key={row[0] + index}
            gap={3}
          >
            {index === props.letters[language].length - 1 &&
              <Button
                size="compact-xl"
                onClick={props.onClickBackspace}
              >
                <IconBackspace />
              </Button>
            }
            {row.map((letter: string, index: number) => {
              const key = letter + index;
              return (
                <Button
                  key={key}
                  size="compact-xl"
                  style={{
                    padding: "0 6px",
                    minWidth: "31px",
                  }}
                  onClick={() => props.onClick(letter)}
                >
                  {letter}
                </Button>
              );
            })}
            {/* {index === props.letters[language].length - 1 &&
              <Button ml={3} size="compact-lg"><IconChecks /></Button>
            } */}
          </Group>
        );
      })}
      {/* <Divider size="xs" w={100} /> */}
      <Button fullWidth rightSection={<IconChecks />}>SUBMIT</Button>
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