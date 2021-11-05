import React, {useContext, useEffect} from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Context from './context/Context'

function App() {

  const { test, loading, setLoading, search} = useContext(Context)

  return (
    <div>
      <Header />
      {/* {
        test ? <span>Loading, please wait a little...</span>
        :test.map((ele) => <Card product={ele} />)
      } */}
      {
        search ? <span>Loading, please wait a little...</span>
        :search.map((ele) => <Card product={ele} />)
      }
    </div>
  );
}

export default App;
