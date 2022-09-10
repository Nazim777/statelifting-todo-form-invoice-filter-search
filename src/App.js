import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Todo from './pages/StateLifting/Todo';
import About from './pages/About/About';
import Home from './pages/Home';
import DynamicForm from './pages/DynamicForm/DynamicForm';
import Invoice from './pages/ShoppingInVoice/Invoice';
import Invoice2 from './pages/ShoppingInVoice/Invoice2';
import Json from './pages/Json/Json';
import Filter from './pages/FilterAndStateLifting/Filter';

function App() {
 
  return (
    <div className="App">
    <h1>hello react</h1>
    <BrowserRouter>
   
    <Routes>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/form' element={<DynamicForm/>}/>
      <Route path='/invoice' element={<Invoice/>}/>
      <Route path='/invoice2' element={<Invoice2/>}/>
      <Route path='/json' element={<Json/>}/>
      <Route path='/filter' element={<Filter/>}/>
    </Routes>
    
    
    </BrowserRouter>
      
     
    </div>
  );
}

export default App;
