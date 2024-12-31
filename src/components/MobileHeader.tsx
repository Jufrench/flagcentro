import { Burger, Group } from "@mantine/core";

interface MobileHeaderProps {

}

export default function MobileHeader(props: MobileHeaderProps) {
  return (
    <Group gap="md" p="sm">
      <Burger></Burger>
    </Group>
  )
}