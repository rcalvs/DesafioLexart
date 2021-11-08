import React, { useContext } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Context from './context/Context';

function App() {

  const { search, loading } = useContext(Context)
  
  return (
    <div>
      <Header />
      {
        loading === 'true' ? 
        <div class="flex justify-center items-center pt-4">
          <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
        </div>
        : <></>
      }
      {
        search === undefined || search.length === 0 ?<h2 className='flex justify-center m-auto pt-8'>Faça uma pesquisa!</h2>
        : search.map((ele) => <Card product={ele} />)
      }
    </div>
  );
}

export default App;
