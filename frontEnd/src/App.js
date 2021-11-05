import React, {useContext, useEffect} from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Context from './context/Context'

function App() {

  const { test, loading, setLoading, search} = useContext(Context)
  //  console.log(search);
  
  return (
    <div>
      <Header />
      {
        search === undefined || search.length === 0 ?<h2 className='flex justify-center m-auto pt-8'>Faça uma pesquisa!</h2>
        : search.map((ele) => <Card product={ele} />)
      }
    </div>
  );
}
//         :search.map((ele) => <Card product={ele} />)

export default App;
