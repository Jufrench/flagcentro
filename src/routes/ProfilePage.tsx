import { Avatar, Button, DEFAULT_THEME, Drawer, Group, MantineColorScheme, Paper, SegmentedControl, Select, Stack, Text, Title, useMantineColorScheme } from "@mantine/core";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { IconArrowRight } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import PersonalInfoContent from "../components/profile/PersonalInfoContent";
import ChangePasswordContent from "../components/profile/ChangePasswordContent";
import AvatarContent from "../components/profile/AvatarContent";

enum DrawerContent {
  Avatar = "Avatar",
  PersonalInfo = "Personal Info",
  ChangePassword = "Change Password"
}

export default function ProfilePage() {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const { logout, user } = useContext(AuthContext);
  const [drawerContent, setDrawerContent] = useState<DrawerContent | null>();

  const buttonStyle = {
    padding: 0,
    fontSize: DEFAULT_THEME.fontSizes.md,
    fontWeight: 400,
  };

  const itemWrapStyle = {
    outline: "1px solid #d6d6d6",
    backgroundColor: "#f6f6f6",
    padding: DEFAULT_THEME.spacing.md
  };

  function openDrawer(content: DrawerContent) {
    setDrawerContent(content);
    open();
  }

  return (
    <>
      <Stack>
        <AvatarContent />
        <Paper style={itemWrapStyle}>
          <Stack align="center" gap={0}>
            <Button
              variant="subtle"
              size="compact-xs"
              style={{ alignSelf: "flex-end" }}
              onClick={() => openDrawer(DrawerContent.Avatar)}
            >
              Edit
            </Button>
            <Stack>
              <Avatar />
              <Title order={4}>{user.name}</Title>
            </Stack>
          </Stack>
        </Paper>
        <Stack gap={0}>
          <Paper style={itemWrapStyle}>
            <Button
              variant="subtle"
              justify="space-between"
              fullWidth
              rightSection={<IconArrowRight />}
              style={buttonStyle}
              onClick={() => openDrawer(DrawerContent.PersonalInfo)}
            >
              Personal Info
            </Button>
          </Paper>
          <Paper style={itemWrapStyle}>
            <Button
              variant="subtle"
              justify="space-between"
              fullWidth
              rightSection={<IconArrowRight />}
              style={buttonStyle}
              onClick={() => openDrawer(DrawerContent.ChangePassword)}
            >
              Change Password
            </Button>
          </Paper>
        </Stack>

        <Stack gap={0}>
          <Paper style={itemWrapStyle}>
            <Group>
              <Text>Color Mode</Text>
              <SegmentedControl
                ml="auto"
                onChange={(newValue: string) => {
                  setColorScheme(newValue as MantineColorScheme);
                }}
                value={colorScheme}
                data={["light", "dark"]}
              />
            </Group>
          </Paper>
          <Paper style={itemWrapStyle}>
            <Group>
              <Text>Language</Text>
              <Select
                flex="1 0 50%"
                data={["English", "Spanish"]}
              />
            </Group>
          </Paper>
        </Stack>
        
        {/* <Divider />
        <Text>Last Login</Text> */}
        <Button onClick={logout}>Log out</Button>
      </Stack>
      <Drawer opened={opened} onClose={close} position="right" title={drawerContent}>
        {drawerContent === DrawerContent.PersonalInfo && <AvatarContent />}
        {drawerContent === DrawerContent.PersonalInfo && <PersonalInfoContent />}
        {drawerContent === DrawerContent.ChangePassword && <ChangePasswordContent />}
      </Drawer>
    </>
  );
}