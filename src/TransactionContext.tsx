import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

export const TransactionContext = createContext<TrasnsactionProps[]>([])

interface TrasnsactionProps {
  id: string,
  title: string,
  amount: number,
  category: string,
  type: string,
  createdAt: string,
}

interface TransactionProviderProps {
  children: ReactNode
} 

export function TransactionProvider({children}: TransactionProviderProps){
  const [transactions, setTransactions] = useState<TrasnsactionProps[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  )
}