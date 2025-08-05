import { Button, PasswordInput, Stack } from "@mantine/core";
import { useContext, useState } from "react";
import supabase from "../../supabaseClient";
import { AuthContext } from "../../contexts/AuthContext";
import { notifications } from "@mantine/notifications";

export default function ChangePasswordContent() {
  const { user } = useContext(AuthContext);
  const [password, setPassword] = useState<string>();
  const [passwordConfirm, setPasswordConfirm] = useState<string>();
  const [matchError, setMatchError] = useState<string>();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  async function changePassword() {
    const response = await supabase.from("Users").update({ name }).eq("id", user.id);
    if (response.status === 200) {
      notifications.show({
        title: "Success!",
        message: "Password updated successfully!"
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
      <PasswordInput
        label="Password"
        value={password}
        disabled={!isEditing}
        style={{ flexGrow: 1 }}
        onChange={e => {
          if (matchError) { setMatchError(undefined) }
          setPassword(e.target.value);
        }}
      />
      <PasswordInput
        label="Confirm Password"
        value={passwordConfirm}
        error={matchError}
        disabled={!isEditing}
        style={{ flexGrow: 1 }}
        onChange={e => {
          if (matchError) { setMatchError(undefined) }
          setPasswordConfirm(e.target.value);
        }}
      />
      {isEditing &&
        <Button
          onClick={() => {
            if (password !== passwordConfirm) {
              setMatchError("Passwords must match");
            } else if (!password || !passwordConfirm) {
              setMatchError("Passwords cannot be empty");
            } else {
              changePassword();
            }
          }}
        >
          Update
        </Button>
      }
    </Stack>
  );
}