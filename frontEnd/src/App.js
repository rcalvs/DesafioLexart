import React, {useContext} from React;
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Provider from './context/Provider'

const { test, loading } = useContext(Context)

function App() {
  return (
    <Provider>
      <div>
        <Header />
        {
          loading ? <span>Loading, please wait a little...</span>
          :test.map((ele) => <Card product={ele} />)
        }
      </div>
    </Provider>
  );
}

export default App;
