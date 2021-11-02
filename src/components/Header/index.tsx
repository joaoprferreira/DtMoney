import logoImg from "../../assets/Logo.svg"
import { Container, Content } from "./styles"

interface HeaderProps {
  onOpenNewTrasactionModal: () => void;
}

export function Header({onOpenNewTrasactionModal}:HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <button type="button" onClick={onOpenNewTrasactionModal}>
          Nova transição
        </button>
      </Content>
    </Container >
  )
}