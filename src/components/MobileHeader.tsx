import { Burger, Group } from "@mantine/core";

interface MobileHeaderProps {

}

export default function MobileHeader(props: MobileHeaderProps) {
  return (
    <Group gap="md" p="xs">
      <Burger></Burger>
    </Group>
  )
}