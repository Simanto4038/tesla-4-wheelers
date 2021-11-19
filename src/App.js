
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
import ProductUpLoad from './Components/Admin/ProductUpLoad';
import AdminHandle from './Components/Admin/AdminHandle';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import Models from './Components/Models/Models';
import BuildandPrice from './Components/Catagory/BuildandPrice';
import Summary from './Components/Catagory/Summary';
import MyDashboard from './Components/Dashboard/MyDashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
     <BrowserRouter>
     <Header/>
     <Switch>
       <Route exact path='/'>
       <Home/>
       </Route>
       <Route exact path='/home'>
       <Home/>
       </Route>
       <Route exact path='/models'>
       <Models/>
       </Route>

      
      
       <Route path='/home/jeep/:_id'>
       <Detail/>
       </Route>
       <Route path='/home/build/:_id'>
       <BuildandPrice/>
       </Route>
       <Route path='/logIn'>
         <Login/>
       </Route>
       <Route path='/signUp'>
         <Signup/>
       </Route>

      

       <PrivetRoute path="/mydash">
       <MyDashboard/>
       </PrivetRoute>

       <PrivetRoute path='/admin'>
       <AdminHandle/>
       </PrivetRoute>

       <PrivetRoute path='/Summary'>
       <Summary/>
       </PrivetRoute>


     </Switch>
     <Footer/>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
