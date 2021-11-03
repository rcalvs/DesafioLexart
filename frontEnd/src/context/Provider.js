import React, { useState, useEffect } from 'react';
import Context from './Context';
import * as API from '../services/API';

function MovieProvider({ children }) {
  const [mercadoLivre, setMercadoLivre] = useState('true')
  const [buscape, setBuscape] = useState('true')
  const [categories, setCategories] = useState([])


  useEffect(() => {
    fetchCategories();
  },[]);

  const fetchCategories = async () => {
    const getCategories = await API.getCategories();
    console.log(getCategories);
    setCategories(getCategories);
  }

  const switchSearch = (param) => {
    switch (param) {
        case 'mercadoLivre':
        setMercadoLivre('true');
        setBuscape('false')
            break;
        case 'buscape':
            setMercadoLivre('false');
            setBuscape('true')
        break;
        case 'both':
            setMercadoLivre('true');
            setBuscape('true')
        break;
        default:
            console.log('Error');
            break;
      }
  }

  return (
    <Context.Provider
      value={ { switchSearch } }
      >
      { children }
    </Context.Provider>
  );
}

export default Provider;