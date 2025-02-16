import { Group, TextInput } from "@mantine/core";

interface NameInputsProps {
  countryName: string;
}

export default function NameInputs(props: NameInputsProps) {
  return (
    <Group gap={1} justify="center">
      {Array.from(props.countryName).map((char: string, index: number) => {
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
      })}
    </Group>
  )
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