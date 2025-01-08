import { Modal, ModalProps } from "@mantine/core";

interface ModalWrapperProps extends ModalProps {

}

export default function ModalWrapper(props: ModalWrapperProps) {
  return (
    <Modal onClose={props.onClose} opened={props.opened} title={props.title}>
      {props.children}
    </Modal>
  )
}