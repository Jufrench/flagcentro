// import { useEffect } from "react";
import { Accordion, Stack } from "@mantine/core";
import { CountryItem } from "../FlagDisplay";
import HintButton from "./HintButton";

interface AnswerHintProps {
  showHint?: boolean | undefined;
  activeCountry: CountryItem;
}

export function AnswerHint(props: AnswerHintProps) {
  // const [value, setValue] = useState(null);
  // const [value, setValue] = useState("Hints");

  const nameSlots: () => string = () => {
    let slots = "";

    for (let i = 0; i < props.activeCountry.name.length; i++) {
      if (props.activeCountry.name[i] === " ") {
        slots += "\xa0\xa0";
        continue;
      }

      slots += "_ ";
    }

    return slots;
  };

  const hints = {
    "Region": props.activeCountry.region,
    "Name": nameSlots()
  };

  // useEffect(() => {
  //   console.log('hello!!!')
  // }, [props.activeCountry])

  // const [showHint, setShowHint] = useState<boolean>(false);

  return (
    <Stack>
      <Accordion
        // defaultValue={null}
        // // value={value}
        // onChange={() => {
        //   console.log('hi', value)
        // }}
        >
        <Accordion.Item value="Hints" style={{ border: "none" }}>
          <Accordion.Control pl={0}>Hints</Accordion.Control>
          <Accordion.Panel>
            <Stack gap="xs">
              {Object.keys(hints).map((key: string) => {
                const hintText = hints[key as keyof typeof hints];
                return (
                  <HintButton key={key} buttonText={key} hintText={hintText} />
                );
              })}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  )
}