import './App.css';
import Header from "./components/Header"
import Balance from "./components/Balance"
import CashFlow from './components/CashFlow';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <CashFlow />
      </div>
      
    </div>
  );
}

export default App;
