import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"

export function TransactionTable() {
  const [transactions,setTransactions] = useState([])

  useEffect(() => {
      api.get("transactions")
      .then(response => setTransactions(response.data))
  },[])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr>
              <td>{transaction}</td>
              <td className="deposit">R$500,00</td>
              <td>Tecnologia</td>
              <td>23/09/2003</td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}