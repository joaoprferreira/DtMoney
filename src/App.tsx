import React, { useState } from 'react';
import Modal from "react-modal"
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTrasactionModal } from './components/NewTrasactionModal';
import { GLobalStyle } from './styles/global';

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
    <div className="App">
      <Header onOpenNewTrasactionModal={handleOpenNewTrasanctionModal}/>

     <Dashboard/>
    <NewTrasactionModal
      isOpen={isNewTrasactionModalOpen}
      onRequestClose={handleCloseNewTrasanctionModal}
    />

     <GLobalStyle/>
    </div>
  );
}


