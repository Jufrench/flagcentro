import { NavLink } from "react-router";
import { ActionIcon, Group } from "@mantine/core";
import { IconBoltFilled, IconFriends, IconHomeFilled, IconSearch, IconUser } from '@tabler/icons-react';
// import { useDisclosure } from "@mantine/hooks";

// import QuickPlayContent from "./quickplay/QuickPlayContent";
// import QuickPlayModalWrapper from "./quickplay/QuickPlayModalWrapper";

export default function BottomNavBar() {
  // const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Group p="md" justify="space-between">
        <NavLink to="/" end><ActionIcon size="xl" variant="light"><IconHomeFilled /></ActionIcon></NavLink>
        <NavLink to="/search" end><ActionIcon size="xl" variant="light"><IconSearch /></ActionIcon></NavLink>
        {/* <ActionIcon size="xl" onClick={open}>
          <IconBoltFilled />
        </ActionIcon> */}
        <NavLink to="/dailyplay" end><ActionIcon size="xl" variant="light"><IconBoltFilled /></ActionIcon></NavLink>
        <NavLink to="/multi" end><ActionIcon size="xl" variant="light"><IconFriends /></ActionIcon></NavLink>
        <NavLink to="/profile" end><ActionIcon size="xl" variant="light"><IconUser /></ActionIcon></NavLink>
      </Group>
      {/* <QuickPlayModalWrapper opened={opened} onClose={close} title="Flag Centro">
        <QuickPlayContent quickPlayType="standard" />
      </QuickPlayModalWrapper> */}
    </>
  )
}