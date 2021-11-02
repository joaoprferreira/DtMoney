import Modal from "react-modal"
import { CloseImg, incomeImg, outcomeImg } from "../../assets";
import { Container, TransactionTypetContainer } from "./styles";

interface NewTrasactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTrasactionModal = ({isOpen,onRequestClose}:NewTrasactionModalProps) => {
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={CloseImg} alt="Fechar" />
      </button>
      <Container>
        <h2>Cadastra transação</h2>
        <input type="text" placeholder="Titulo" />
        <input type="number" name="" id="" placeholder="Valor" />

        <TransactionTypetContainer>
          <button
            type="button" 
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            type="button" 
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypetContainer>

        <input placeholder="Categoria" />
        
        <button type="submit">Cadastrar</button>

      </Container>

    </Modal>
  )
}