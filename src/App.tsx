import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import './components/login/Login.scss';
import Login from './components/login/Login';
import { useAppSelector } from './app/hooks';

//useAppSelectorとして新たに型定義し、App.tsxで使用
function App() {
  const user = useAppSelector((state) => state.user);

  return (
    <div className="App">
      { user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )
    }
    </div>
  );
}

export default App;
