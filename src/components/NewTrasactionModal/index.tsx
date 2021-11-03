import { FormEvent, useState } from "react";
import Modal from "react-modal"
import { CloseImg, incomeImg, outcomeImg } from "../../assets";
import { Container, RadioBox, TransactionTypetContainer } from "./styles";

interface NewTrasactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}


export const NewTrasactionModal = ({isOpen,onRequestClose}:NewTrasactionModalProps) => {
  const [title,setTitle] = useState('')
  const [value,setValue] = useState(0)
  const [category,setCategory] = useState("")
  const [type, setType] = useState('deposit')
  
  function handleCreateNewTrasaction (event: FormEvent) {
    event.preventDefault();
    console.log({
      title,
      value,
      category,
      type
    })
  }
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
      <Container onSubmit={handleCreateNewTrasaction}>
        <h2>Cadastra transação</h2>

        <input 
          type="text" 
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input 
          type="number" 
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))} 
        />

        <TransactionTypetContainer >
          <RadioBox
            type="button" 
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button" 
            onClick={() => {setType('withdraw')}}
            isActive={type ===  'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypetContainer>

        <input 
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)} 
        />
        
        <button type="submit">Cadastrar</button>

      </Container>

    </Modal>
  )
}