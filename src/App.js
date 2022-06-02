import { Header } from './components/header';
import {Home} from './pages/home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AddExpense } from './pages/add-expense';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-expense" element={<AddExpense/>} />
        </Routes>
         
      <div>Footer</div>
    </BrowserRouter>
  );
}

export default App;
