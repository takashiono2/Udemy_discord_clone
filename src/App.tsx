import React from 'react';
// import { useSelector } from "react-redux";
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import { useAppSelector } from './app/hooks';

function App() {

  const user = useAppSelector((state)=>state.user)

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <><Login/></>
      )}
    </div>
  );
}

export default App;
