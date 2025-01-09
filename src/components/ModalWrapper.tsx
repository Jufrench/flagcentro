import { Modal, ModalProps, ScrollArea } from "@mantine/core";

interface ModalWrapperProps extends ModalProps {

}

export default function ModalWrapper(props: ModalWrapperProps) {
  return (
    <Modal
      yOffset="40%"
      onClose={props.onClose}
      opened={props.opened}
      title={props.title}
      scrollAreaComponent={ScrollArea.Autosize}
      removeScrollProps={{
        allowPinchZoom: true,
        enabled: false
      }}>
      {props.children}
    </Modal>
  )
}