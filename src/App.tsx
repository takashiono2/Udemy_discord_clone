import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import './components/login/Login.scss';
import Login from './components/login/Login';
// import { useSlector } from 'react-redux';


function App() {
  const user = null;
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
