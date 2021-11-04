import React, { useState } from 'react';
import Modal from "react-modal"
import { ThemeProvider } from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTrasactionModal } from './components/NewTrasactionModal';
import { GLobalStyle } from './styles/global';
import { theme } from './styles/theme';

Modal.setAppElement("#root")

export function App() {

  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false)

  function handleOpenNewTrasanctionModal() {
    setIsNewTrasactionModalOpen(true)
  }

  function handleCloseNewTrasanctionModal() {
    setIsNewTrasactionModalOpen(false)
  }

  return (
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
  );
}


