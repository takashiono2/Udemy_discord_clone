import React, { useEffect } from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import './components/login/Login.scss';
import Login from './components/login/Login';
import { useAppDispatch,useAppSelector } from './app/hooks';
import { login,logout } from "./features/userSlice"
import { auth } from "./firebase";

//useAppSelectorとして新たに型定義し、App.tsxで使用
function App() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((loginUser)=>{
      if(loginUser){
        console.log(loginUser);
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      }else{
        dispatch(logout)
      }
    })
  },[dispatch])

  return (
    <div className="App">
      { user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )
    }
    </div>
  );
}

export default App;
