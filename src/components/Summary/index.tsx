
import { Container } from "./styles";
import * as I from '../../assets'

export function Summary () {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={I.incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={I.outcomeImg} alt="Saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={I.TotalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    
    </Container>
  )
}