import './App.css';
import Header from "./components/Header"
import Balance from "./components/Balance"
import CashFlow from './components/CashFlow';
import History from './components/History';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <CashFlow />
        <History />
      </div>
      
    </div>
  );
}

export default App;
