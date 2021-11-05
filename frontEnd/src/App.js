import React, {useContext} from 'react';
import Header from './components/Header';
import Provider from './context/Provider';
import Card from './components/Card';

// const { test, loading } = useContext(Context)

function App() {
  return (
    <Provider>
      <div>
        <Header />
        {/* {
          loading ? <span>Loading, please wait a little...</span>
          :test.map((ele) => <Card product={ele} />)
        } */}
        <Card />
        <Card />
        <Card />

      </div>
    </Provider>
  );
}

export default App;
