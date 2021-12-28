
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/dialogs';
import DialogsContainer from './components/Dialogs/dialogsContainer';
import Header from './components/Header/header';
import HeaderContainer from './components/Header/header-component';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import ProfileContainer from './components/Profile/profileContainer';
import UsersContainer from './components/Users/users-container';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <HeaderContainer />
        <Navbar />
        <Route path="/dialogs"
          render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?"
          render={() => <ProfileContainer/>} />
        <Route path="/users"
          render={() => <UsersContainer/> } />
      </div>
    </BrowserRouter>

  );
}

export default App;
