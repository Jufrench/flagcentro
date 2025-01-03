import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

interface QuickPlayModalProps {
  handleStartQuickPlay: () => void;
}

export default function QuickPlayModal(props: QuickPlayModalProps) {
  const [opened, { close }] = useDisclosure(true);

  return (
    <Modal opened={opened} onClose={close} title="Click Start for a quick play session">
      <Button onClick={() => {
        props.handleStartQuickPlay();
        close();
      }}>Start</Button>
    </Modal>
  )
}