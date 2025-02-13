// import { useState } from "react";
import { Button, Checkbox, List, Modal, Stack, Title } from "@mantine/core";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";

// import QuickPlayContent from "./quickplay/QuickPlayContent";
// import StandardQuickPlayCard from "./quickplay/StandardQuickPlayCard";
// import RegionQuickCard from "./quickplay/RegionQuickCard";
// import DrawerWrapper from "./DrawerWrapper";
import DailyPlayBanner from "./dailyplay/DailyPlayBanner";
import { useState } from "react";
// import QuickPlayModalWrapper from "./quickplay/QuickPlayModalWrapper";

export default function Home() {
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
      <Stack>
        <DailyPlayBanner />
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
      {/* <DrawerWrapper opened={opened} onClose={close} title="Daily Play">
        <QuickPlayContent quickPlayType={"standard"} />
      </DrawerWrapper> */}

      {!dontShowAgain &&
        <Modal
          withCloseButton={false}
          opened={welcomeModal.opened}
          onClose={() => {}}
        >
          <Title ta="center" mb="lg" order={3}>Welcome to Flag Centro!</Title>
          <List mb="4em" withPadding>
            <List.Item>Challenge your knowledge of flags once daily</List.Item>
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
 * Use cookies/session storage to check if a use has played daily play
 * Update daily play (quickplaycontent) to use spaces like in DailyPlay.tsx
 * 
 * -- SEARCH
 * Improve UI of flags in search page
 * 
 * -- QUICK PLAY
 * Update QuickPlayContent to not require quickplay type
 * When drawer first loads hitting the next button 1 time doesn't work
 * 
 */