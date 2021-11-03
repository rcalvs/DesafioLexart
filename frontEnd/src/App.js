import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Provider from './context/Provider'

const { test } = useContext(Context)

function App() {
  return (
    <Provider>
      <div>
        <Header />
        {test.map((ele) =>
          <Card product={ele} />
        )}
      </div>
    </Provider>
  );
}

export default App;
