import './App.css';
import Header from "./components/Header"
import Balance from "./components/Balance"
import CashFlow from './components/CashFlow';
import History from './components/History';
import Addtransactions from './components/Addtransactions';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <CashFlow />
        <History />
        <Addtransactions />
      </div>
      
    </div>
  );
}

export default App;
