// import { useEffect, useState } from "react";
import { Box, Group, TextInput } from "@mantine/core";

interface NameInputsProps {
  countryName: string;
}

export default function NameInputs(props: NameInputsProps) {
  const words = props.countryName.split(" ");
  // console.log('props.countryName:', props.countryName)
  // const [inputWidth, setInputWidth] = useState<number>(36);
  // let inputWidth = 36;

  // useEffect(() => {
  //   let newWidth = 36;
  //   words.forEach((word: string) => {
  //     if (word.length >= 3) {
  //       newWidth = 32;
  //       return;
  //     }
  //   });
  //   newWidth !== 36 && setInputWidth(newWidth);
  // }, [props.countryName]);
  
  return (
    <Group
      gap={6}
      justify="center"
      style={{
        flexWrap: "wrap"
      }}
    >
      {words.map((word: string) => {
        return (
          <Box
            style={{
              whiteSpace: "nowrap",
              display: "flex",
              outline: "1px solid tomato"
            }}
          >
            <>
              {[...word].map((letter: string, index: number) => {
                const key = letter + index;
                return (
                  <TextInput
                    key={key}
                    size="xl"
                    style={{
                      // width: "36px",
                      // width: `${inputWidth}px`,
                      margin: "2px 0",
                      width: "25px"
                    }}
                    styles={{
                      input: {
                        padding: 0,
                        textAlign: "center",
                        fontSize: "1.25em"
                      }
                    }}
                  />
                )
              })}
            </>
          </Box>
        )
      })}
      {/* {Array.from(props.countryName).map((char: string, index: number) => {
        const key = "" + char + index;
        console.log('%cchar:', 'background:tomato', char)

        return (
          <>
            {char === " "
              ? <span style={{ width: "26px" }}>{"\xa0"}</span>
              : <TextInput
                  key={key}
                  size="xl"
                  style={{ width: "26px", margin: "2px 0" }}
                  styles={{
                    input: {
                      padding: 0,
                      textAlign: "center",
                      fontSize: "1.25em"
                    }
                  }}
                />
            }
          </>
        )
      })} */}
    </Group>
  )
  // return (
  //   <Group gap={1} justify="center">
  //     {Array.from(props.countryName).map((char: string, index: number) => {
  //       const key = "" + char + index;
  //       console.log('%cchar:', 'background:tomato', char)

  //       return (
  //         <>
  //           {char === " "
  //             ? <span style={{ width: "26px" }}>{"\xa0"}</span>
  //             : <TextInput
  //                 key={key}
  //                 size="xl"
  //                 style={{ width: "26px", margin: "2px 0" }}
  //                 styles={{
  //                   input: {
  //                     padding: 0,
  //                     textAlign: "center",
  //                     fontSize: "1.25em"
  //                   }
  //                 }}
  //               />
  //           }
  //         </>
  //       )
  //     })}
  //   </Group>
  // )
}

  // return (
  //   <>
  //     {char === ""
  //       ? <>\xa0</>
  //       : <TextInput
  //           key={key}
  //           size="xl"
  //           style={{ width: "26px" }}
  //           styles={{
  //             input: {
  //               padding: 0,
  //               textAlign: "center",
  //               fontSize: "1.25em"
  //             }
  //           }}
  //         />
  //     }
  //   </>
  // )