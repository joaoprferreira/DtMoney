import React from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GLobalStyle } from './styles/global';


export function App() {
  return (
    <div className="App">
      <Header/>
     <Dashboard/>
     <GLobalStyle></GLobalStyle>
    </div>
  );
}


