import { useMemo, useState } from "react";
import { Alert, Button, Checkbox, List, Modal, Stack, Title } from "@mantine/core";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";

import DailyPlayBanner from "./dailyplay/DailyPlayBanner";
// import TodayStatsBanner from "./dailyplay/TodayStatsBanner";
import Countries from "./../assets/countries.json";
import { IconAlertTriangleFilled } from "@tabler/icons-react";

export default function Home() {
  let countries = [...Countries];
  const randNum = useMemo(() => Math.floor(Math.random() * countries.length), []);
  const activeCountry = useMemo(() => countries[randNum], []);
  // const [activeCountry, setActiveCountry] = useState<any | null>(countries[randNum]);
  // const [hasLocalStorage, setHasLocalStorage] = useState<boolean>(false);
  // const [showWelcomeModal, setShowWelcomeModal] = useLocalStorage<boolean>({
  //   key: 'show_welcome_modal',
  //   defaultValue: true
  // });

  // const [hideWelcomeModal, setHideWelcomeModal] = useLocalStorage<boolean>({
  //   key: 'hide_welcome_modal',
  //   defaultValue: false
  // });

  const [dontShowAgainChecked, setDontShowAgainChecked] = useState<boolean>(false);
  const [dontShowAgain, setDontShowAgain] = useLocalStorage<boolean>({
    key: 'dont_show_again',
    defaultValue: false
  });


  // const [opened, { open, close }] = useDisclosure(false);
  // const [isDailyPlayOpen, dailyPlayHandlers] = useDisclosure(false);
  // const dailyPlayDrawer = {
  //   opened: isDailyPlayOpen,
  //   open: dailyPlayHandlers.open,
  //   close: dailyPlayHandlers.close
  // };
  // const [openedModal, { open: openModal, close: closeModal }] = useDisclosure(false);
  const [isWelcomeModalOpen, welcomeModalHandlers] = useDisclosure(true);
  const welcomeModal = {
    opened: isWelcomeModalOpen,
    open: welcomeModalHandlers.open,
    close: welcomeModalHandlers.close
  };

  // const [isLoginOpen, loginModalHandlers] = useDisclosure(false);
  // const loginModal = {
  //   opened: isLoginOpen,
  //   open: loginModalHandlers.open,
  //   close: loginModalHandlers.close
  // };

  // useEffect(() => {
    // const storageValue = readLocalStorageValue({ key: 'show_welcome_modal' });
    // const storageValue = readLocalStorageValue({ key: 'dont_show_again' });
    // setHasLocalStorage(storageValue === true);
  // }, []);

  // const [activeRegions, setActiveRegions] = useState<string[]>([]);
  // const [quickPlayType, setQuickPlayType] = useState<string>("standard");

  // const handleSetRegions = (regions_param: string[]) => setActiveRegions(regions_param);
  // const handleSetQuickplayType = (type: string) => setQuickPlayType(type);

  // console.group('%c     ', 'background:tomato')
  // console.log('dontShowAgainChecked:', dontShowAgainChecked)
  // console.log('dontShowAgain:', dontShowAgain)
  // console.log('==============')
  // console.log('dontShowStorageValue:', dontShowStorageValue)
  // console.groupEnd()

  function handleCloseWelcomeModal() {
    welcomeModal.close();
    dontShowAgainChecked && setDontShowAgain(true);
  }

  return (
    <>
      <Stack style={{ margin: "0 auto", maxWidth: "500px" }}>
        <Alert
          icon={<IconAlertTriangleFilled />}
          color="yellow"
          title="In Construction"
          style={{ border: "1px solid orange" }}
        >
          Some features of the app are still a work in progress!
        </Alert>
        <DailyPlayBanner activeCountry={activeCountry} />

        {/* Implement later */}
        {/* <TodayStatsBanner activeCountry={activeCountry} /> */}

        {/* <StandardQuickPlayCard
          activeRegions={activeRegions}
          open={open}
          handleSetRegions={handleSetRegions}
          handleSetQuickplayType={handleSetQuickplayType}
        /> */}
        {/* <Stack mt="lg">
          <Button onClick={loginModal.open}>Log in</Button>
          <Button onClick={loginModal.open}>Sign up</Button>
        </Stack> */}
      </Stack>

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
            <List.Item>Sign up to access more features</List.Item>
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
      {/* <Modal opened={isLoginOpen} onClose={loginModal.close}>Create an account!</Modal> */}
    </>
  )
}

// TODO:
/**
 * -- HOME PAGE
 * Add content to the homepage
 * 
 * -- DAILY PLAY
 * Make component for daily play different than quickplay so that
 *   TodayStatsBanner & DailyPlayBanner can share the same active country
 * Use cookies/session storage to check if a use has played daily play
 * Update daily play (quickplaycontent) to use spaces like in DailyPlay.tsx
 * 
 * -- QUICK PLAY
 * Update QuickPlayContent to not require quickplay type
 * When drawer first loads hitting the next button 1 time doesn't work
 * 
 */