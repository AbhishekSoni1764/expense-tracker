import './App.css';
import Header from "./components/Header"
import Balance from "./components/Balance"
import CashFlow from './components/CashFlow';
import History from './components/History';
import Addtransactions from './components/Addtransactions';
import { GlobalProvider } from './context/GlobalStates';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="accounts">
        <Balance />
        <CashFlow />
      </div>
      <div className="container">
        <History />
        <Addtransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
