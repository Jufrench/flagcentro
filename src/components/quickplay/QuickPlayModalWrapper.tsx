import { Modal, ModalProps, ScrollArea } from "@mantine/core";

interface QuickPlayModalWrapperProps extends ModalProps {

}

export default function QuickPlayModalWrapper(props: QuickPlayModalWrapperProps) {
  return (
    <Modal
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