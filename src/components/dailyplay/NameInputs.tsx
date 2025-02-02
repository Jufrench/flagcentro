import { Group, TextInput } from "@mantine/core";

interface NameInputsProps {
  countryName: string;
}

export default function NameInputs(props: NameInputsProps) {
  console.log('props.numOfInputs', props.countryName)
  return (
    <Group gap={1}>
      {Array.from(props.countryName).map((char: string, index: number) => {
        const key = "" + char + index;

        return (
          // <div>
          <TextInput
            key={key}
            size="xl"
            style={{ width: "30px" }}
            styles={{
              input: {
                padding: 0,
                textAlign: "center"
              }
            }}
            />
          // </div>
        )
      })}
    </Group>
  )
}