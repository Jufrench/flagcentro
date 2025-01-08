import { Modal, ModalProps, ScrollArea } from "@mantine/core";

interface ModalWrapperProps extends ModalProps {

}

export default function ModalWrapper(props: ModalWrapperProps) {
  return (
    <Modal
      onClose={props.onClose}
      opened={props.opened}
      title={props.title}
      scrollAreaComponent={ScrollArea.Autosize}>
      {props.children}
    </Modal>
  )
}