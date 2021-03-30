import './App.css';
import Greeter from './artifacts/Greeter.json';
import { DrizzleProvider } from '@drizzle/react-plugin'
import { LoadingContainer, AccountData, ContractData, ContractForm } from '@drizzle/react-components';

const options = {
  contracts: [Greeter]
}

function App() {
  return (
    <DrizzleProvider options={options}>
      <LoadingContainer>
        <div>
          <h5>Your account :</h5>
          <AccountData accountIndex={0} units={"ether"}></AccountData>
          <h5>Current greeting: </h5>
          <ContractData contract="Greeter" method="get"></ContractData>
          <h5>Set Greeting: </h5>
          <ContractForm contract="Greeter" method="set"></ContractForm>
        </div>
      </LoadingContainer>
    </DrizzleProvider>
  );
}

export default App;
