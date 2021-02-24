import './App.css';
import Header from './components/header'

import Sidebar from './components/sidebar'
import FilesView from './components/filesView/FilesView'
import SideIcons from './components/sideIcons'

import GDriveLogo from './media/google-drive-logo.png'

import { auth, provider } from "./firebase";
import { useState } from 'react';

function App() {
  // authentification
  
  // Uncomment if you want to skip 'Logging in to Google Drive' part

  // const [user, setUser] = useState({
  //   displayName: "Oksana Bibik",
  //   email: "oksanabibik93@gmail.com",
  //   emailVerified: true,
  //   phoneNumber: null,
  //   photoURL: "https://media-exp1.licdn.com/dms/image/C5603AQFGdoqMJ_e2Mw/profile-displayphoto-shrink_100_100/0/1600210358514?e=1619049600&v=beta&t=jg27zaoB2ccJ_AxcLha7JETsRWiSs1pXulxjooSjeEg"
  // })
  const [user, setUser] = useState()

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }

  return (
    <div className="app">
      {
        user ? (
          <>
            <Header userPhoto={user.photoURL}/>
            <div className="app__main">
              <Sidebar />
              <FilesView />
              <SideIcons />
            </div>
          </>
        ) : (
          <div className='app__login'>
              <img src={GDriveLogo} alt="Google Drive" />
              <button onClick={handleLogin}>Log in to Google Drive</button>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
