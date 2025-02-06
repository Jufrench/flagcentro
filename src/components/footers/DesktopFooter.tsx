import { Anchor, Container, Text } from "@mantine/core";

export default function DesktopFooter() {
  return (
    <Container p="xs">
      <Text ta="center" size="xs">
        <span>Made with </span>
        <Anchor href="https://mantine.dev/" target="_blank">Mantine.dev</Anchor>
      </Text>
    </Container>
  )
}