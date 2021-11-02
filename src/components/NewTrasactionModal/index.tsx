import Modal from "react-modal"

interface NewTrasactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTrasactionModal = ({
  isOpen,
  onRequestClose
}:NewTrasactionModalProps) => {
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    >
      <h1>Cadastra transação</h1>
    </Modal>
  )
}