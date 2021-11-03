import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Provider from './context/Provider'

function App() {
  return (
    <Provider>
      <div>
        <Header />
      </div>
    </Provider>
  );
}

export default App;
