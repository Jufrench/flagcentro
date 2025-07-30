import { Avatar, Button, Divider, Drawer, Stack, Text, Title } from "@mantine/core";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { IconArrowRight } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import PersonalInfoContent from "../components/profile/PersonalInfoContent";
import ChangePasswordContent from "../components/profile/ChangePasswordContent";

enum DrawerContent {
  PersonalInfo = "Personal Info",
  ChangePassword = "Change Password"
}

export default function ProfilePage() {
  const [opened, { open, close }] = useDisclosure(false);

  const { logout, user } = useContext(AuthContext);
  const [drawerContent, setDrawerContent] = useState<DrawerContent | null>();


  const buttonStyle = {
    backgroundColor: "#f6f6f6",
    outline: "1px solid #d6d6d6"
  };

  function openDrawer(content: DrawerContent) {
    setDrawerContent(content);
    open();
  }

  return (
    <>
      <Stack>
        <Title order={3}>Hello {user.name}</Title>
        <Avatar />
        <Stack gap={0}>
          <Button
            variant="subtle"
            justify="space-between"
            fullWidth
            rightSection={<IconArrowRight />}
            size="lg"
            style={buttonStyle}
            onClick={() => openDrawer(DrawerContent.PersonalInfo)}
          >
            Personal Info
          </Button>
          <Button
            variant="subtle"
            justify="space-between"
            fullWidth
            rightSection={<IconArrowRight />}
            size="lg"
            style={buttonStyle}
            onClick={() => openDrawer(DrawerContent.ChangePassword)}
          >
            Change Password
          </Button>
        </Stack>
        
        <Divider />
        <Text>Last Login</Text>
        <Button onClick={logout}>Log out</Button>
      </Stack>
      <Drawer opened={opened} onClose={close} position="right">
        {drawerContent === DrawerContent.PersonalInfo && <PersonalInfoContent />}
        {drawerContent === DrawerContent.ChangePassword && <ChangePasswordContent />}
      </Drawer>
    </>
  );
}