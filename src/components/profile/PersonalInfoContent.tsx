import { Button, Stack, TextInput } from "@mantine/core";
import { useContext, useState } from "react";
import supabase from "../../supabaseClient";
import { AuthContext } from "../../contexts/AuthContext";
import { notifications } from "@mantine/notifications";

export default function PersonalInfoContent() {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState<string>(user.name);
  const [nameError, setNameError] = useState<string>();
  // const [email, setEmail] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  async function updatePeronsalInfo() {
    const response = await supabase.from("Users").update({ name }).eq("id", user.id);
    if (response.status === 200) {
      notifications.show({
        title: "Success!",
        message: "Name updated successfully!"
      });
    }
  }

  return (
    <Stack>
      <Button
        variant="subtle"
        size="compact-xs"
        style={{ alignSelf: "flex-end" }}
        onClick={() => setIsEditing(state => !state)}
      >
        {isEditing && <>Cancel</>}
        {!isEditing && <>Edit</>}
      </Button>
      <TextInput
        label="Name"
        value={isEditing ? name : user.name}
        error={nameError}
        disabled={!isEditing}
        // placeholder={user.name}
        style={{ flexGrow: 1 }}
        onChange={e => {
          if (nameError) { setNameError(undefined) }
          setName(e.target.value);
        }}
      />
      {/* <TextInput
        label="Email"
        value={email}
        style={{ flexGrow: 1 }}
        onChange={e => setEmail(e.target.value)}
      /> */}
      {isEditing &&
        <Button
          onClick={() => {
            if (name === "") {
              setNameError("Name cannot be empty");
            } else {
              updatePeronsalInfo();
            }
          }}
        >
          Save
        </Button>
      }
    </Stack>
  );
}