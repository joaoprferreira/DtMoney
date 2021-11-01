import logoImg from "../../assets/Logo.svg"

import { Container, Content } from "./styles"

export function Header(){
  return (
    <Container>
      <Content>
      <img src={logoImg} alt="" />
      <button type="button">
        Nova transição
      </button>
      </Content>
    </Container>
  )
}