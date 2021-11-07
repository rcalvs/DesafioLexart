import React, { useContext } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Context from './context/Context';

function App() {

  const { search} = useContext(Context)
  
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

export default App;
