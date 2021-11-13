
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import Catagory from './Components/Catagory/Catagory';
import Detail from './Components/Catagory/Detail';
import 'mdb-ui-kit/css/mdb.min.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <AuthProvider>
     <BrowserRouter>
     <Header/>
     <Switch>
       <Route exact path='/home'>
       <Home/>
       </Route>
       <Route exact path='/menu'>
       <Catagory/>
       </Route>
      
       <Route exact path='/home/jeep/:_id'>
       <Detail/>
       </Route>
       <Route path='/logIn'>
         <Login/>
       </Route>
       <Route path='/signUp'>
         <Signup/>
       </Route>
     </Switch>
     <Footer/>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
