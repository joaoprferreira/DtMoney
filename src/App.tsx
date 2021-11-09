import React, { useEffect, useState } from 'react';
import Modal from "react-modal"
import { ThemeProvider } from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTrasactionModal } from './components/NewTrasactionModal';
import { api } from './services/api';
import { GLobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { TransactionContext } from './TransactionContext';

Modal.setAppElement("#root")

export function App() {

  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false)

  function handleOpenNewTrasanctionModal() {
    setIsNewTrasactionModalOpen(true)
  }

  function handleCloseNewTrasanctionModal() {
    setIsNewTrasactionModalOpen(false)
  }

  interface TrasnsactionProps {
    id: string,
    title: string,
    amount: number,
    category: string,
    type: string,
    createdAt: string
  }


  const [transactions, setTransactions] = useState<TrasnsactionProps[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <TransactionContext.Provider value={transactions}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header onOpenNewTrasactionModal={handleOpenNewTrasanctionModal} />
          <Dashboard />
          <NewTrasactionModal
            isOpen={isNewTrasactionModalOpen}
            onRequestClose={handleCloseNewTrasanctionModal}
          />

          <GLobalStyle />
        </div>
      </ThemeProvider>
    </TransactionContext.Provider>
  );
}


