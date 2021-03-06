import React, {useContext, useState} from 'react';
import Context from '../context/Context';


function Header() {
  const { categories, getProductsByCategory, getProductsByQuery, switchSearch } = useContext(Context);
  const [ query, setQuery ] = useState('');

  const submitQuery = (event) => {
    event.preventDefault();
    getProductsByQuery(query);
  }
  
  return (
    <div className='flex p-4 justify-center shadow-xl'>
      <div className='flex mx-4'>
        <select
          className='rounded-lg px-2 my-2  focus:outline-none block'
          onChange={(e) => (switchSearch(e.target.value))}
        >
          <option value="hidden" disabled selected hidden>Web</option>
          <option value="both">Both</option>
          <option value="mercadoLivre">MercadoLivre</option>
          <option value="WallMart">WallMart</option>
        </select>
      </div>
      <div className='flex mx-4'>
        <select
          className='rounded-lg px-2 my-2  focus:outline-none block'
          onChange={(e) => (getProductsByCategory(e.target.value))}
        >
          Categories
          <option value="" disabled selected hidden>Categories</option>
          {
            categories.map((category) => (<option value={category.name}>{category.name}</option>))
          }
        </select>

      </div>
      <form
        className='flex p-2'
        onSubmit={(e) => (submitQuery(e))}>
        <input
          className='w-72 border-2 px-2 rounded-lg mx-2 border-blue-400 focus:border-blue-500 focus:outline-none focus:ring'
          type="text"
          maxLength='20'
          onChange={(e) => (setQuery(e.target.value))}
        />
        <button className='rounded-lg p-2 px-4 bg-blue-400 hover:bg-blue-500'>
          Search
        </button>
      </form>
    </div>
  )
}

export default Header;