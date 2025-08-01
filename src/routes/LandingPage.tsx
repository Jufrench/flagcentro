import { useContext, useState } from "react";
import DailyPlayBanner from "../components/dailyplay/DailyPlayBanner";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import { Alert, Anchor, Button, Checkbox, Group, List, Modal, PasswordInput, Stack, Text, TextInput, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import supabase from "../supabaseClient";

import { AuthContext } from "../contexts/AuthContext";

export default function LandingPage() {
  // const [lastPlayed, setLastPlayed] = useLocalStorage<string | undefined | Date>({
  //   key: "last_played",
  //   defaultValue: readLocalStorageValue({ key: "last_played" })
  //   // defaultValue: new Date("2025-07-27")
  // });

  // const todayStart = new Date();
  // todayStart.setHours(0, 0, 0, 0);

  // const hasPlayedToday = lastPlayed && new Date(lastPlayed) >= todayStart;

  const [loginAction, setLoginAction] = useState<"login" | "signup" | undefined>();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordMatchError, setPasswordMatchError] = useState<string | undefined>();

  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const { login } = useContext(AuthContext);

  const [dontShowAgainChecked, setDontShowAgainChecked] = useState<boolean>(false);
  const [dontShowAgain, setDontShowAgain] = useLocalStorage<boolean>({
    key: 'dont_show_again',
    defaultValue: false
  });

  const [isWelcomeModalOpen, welcomeModalHandlers] = useDisclosure(true);
  const welcomeModal = {
    opened: isWelcomeModalOpen,
    open: welcomeModalHandlers.open,
    close: welcomeModalHandlers.close
  };

  function handleCloseWelcomeModal() {
    welcomeModal.close();
    dontShowAgainChecked && setDontShowAgain(true);
  }

  const [isLoginModalOpen, loginModalHandlers] = useDisclosure(false);
  const loginModal = {
    opened: isLoginModalOpen,
    open: loginModalHandlers.open,
    close: loginModalHandlers.close
  };

  async function createUser(userInfo: Record<string, string>) {
    const authId = await createAuthUser({ email: userInfo.email, password: userInfo.password });
    const status = await createPublicUser(authId);

    if (status === 201) {
      notifications.show({
        title: "Pending",
        message: "Verification email sent!"
      });

      loginModal.close();
    }
  }

  const createAuthUser = async (userInfo: Record<string, string>) => {
    const response = await supabase.auth.signUp({
      email: userInfo.email,
      password: userInfo.password,
      // options: { emailRedirectTo: 'https://example.com/welcome', },
    });

    return response.data.user?.id;
  };

  const createPublicUser = async (auth_id: any) => {
    const { /* data, error, */ status } = await supabase.from('Users').insert({
      name,
      email,
      auth_id
    });

    return status;
  };

  // function handleSetLastPlayed(dateValue: Date) {
  //   setLastPlayed(dateValue);
  // }

  return (
    <>
      <Stack p="sm">
        <Title ta="center" order={2}>Flag Centro</Title>
        <Stack gap={0}>
          <Text ta="center">Test your flag knowledge once a day!</Text>
        </Stack>
        <DailyPlayBanner />
        {/* <Paper withBorder p="md">
          <Stack align="center" gap="xs">
            <Text>Create an account to access more features!</Text>
            <Button
              onClick={() => {
                // toggle();
                setLoginAction("signup");
                loginModal.open();
              }}
            >
              Sign Up!
            </Button>
            <Group gap={0}>
              <Text size="sm">Already have an account?</Text>
              <Button
                onClick={() => {
                  // toggle();
                  setLoginAction("login");
                  loginModal.open();
                }}
                size="xs"
                variant="subtle"
                >
                  Log in
                </Button>
            </Group>
          </Stack>
        </Paper> */}
        <Alert
          title="Create an account to access more features!"
          styles={{
            message: { display: "flex", flexDirection: "column", alignItems: "center" }
          }}
        >
          <Button
            onClick={() => {
              setLoginAction("signup");
              loginModal.open();
            }}
          >
            Sign Up!
          </Button>
          <Group gap={0}>
            <Text size="sm">Already have an account?</Text>
            <Button
              onClick={() => {
                // toggle();
                setLoginAction("login");
                loginModal.open();
              }}
              size="xs"
              variant="subtle"
              >
                Log in
              </Button>
          </Group>
        </Alert>
      </Stack>

      {/* Welcome Modal */}
      {!dontShowAgain &&
        <Modal
          withCloseButton={false}
          opened={welcomeModal.opened}
          onClose={() => {}}
        >
          <Title ta="center" mb="lg" order={3}>Welcome to Flag Centro!</Title>
          <List mb="4em">
            <List.Item>Challenge your knowledge of flags daily</List.Item>
            <List.Item>Guesses are limited</List.Item>
            <List.Item>
              <Anchor
                mr={5}
                component="button"
                variant="subtle"
                onClick={loginModal.open}
              >
                Sign up
              </Anchor>
              <span>to access more features</span>
            </List.Item>
          </List>
          <Stack ta="center" gap="xl">
            <Checkbox
              onChange={e => setDontShowAgainChecked(e.currentTarget.checked)}
              label="Don't show this again"
            />
            <Button onClick={handleCloseWelcomeModal}>
              Let's Go!
            </Button>
          </Stack>
        </Modal>
      }

      {/* Sign Up/Sign In Modal */}
      <Modal.Root opened={loginModal.opened} onClose={() => loginModal.close()}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>
              {/* {toggleValue === "login" ? "Log in" : "Sign Up"} */}
              {loginAction === "login" ? "Log in" : "Sign Up"}
            </Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <Stack>
              {/* {toggleValue === "login" &&  */}
              {loginAction === "login" && 
                <>
                  <TextInput
                    placeholder="Email"
                    value={loginEmail}
                    onChange={event => {
                      setLoginEmail(event.target.value)
                    }}
                  />
                  <PasswordInput
                    placeholder="Password"
                    value={loginPassword}
                    onChange={event => setLoginPassword(event.target.value)}
                  />
                  <Button onClick={() => login(loginEmail, loginPassword)}>Log in</Button>
                </>
              }
              {/* {toggleValue === "signup" &&  */}
              {loginAction === "signup" && 
                <>
                  <TextInput
                    placeholder="Name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                  />
                  <TextInput
                    placeholder="Email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                  />
                  <PasswordInput
                    placeholder="Password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                  />
                  <PasswordInput
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    error={passwordMatchError}
                    onChange={event => {
                      passwordMatchError && setPasswordMatchError(undefined);
                      setConfirmPassword(event.target.value);
                    }}
                  />
                  <Button
                    onClick={() => {
                      if (password === confirmPassword) {
                        createUser({ email, password });
                      } else {
                        setPasswordMatchError("Passwords must match!");
                      }
                    }}
                  >
                    Create Account
                  </Button>
                </>
              }
            </Stack>
          </Modal.Body>
        </Modal.Content>

      </Modal.Root>
    </>
  )
}