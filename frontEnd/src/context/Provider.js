import React, { useState, useEffect } from 'react';
import Context from './Context';
import * as MercadoLivre from '../services/MercadoLivre';
import * as Categories from '../services/Categorias';

function Provider({ children }) {
  const [mercadoLivre, setMercadoLivre] = useState('true')
  const [buscape, setBuscape] = useState('true')
  const [categories, setCategories] = useState([])
  const [search, setSearch] = useState([])
  const [loading, setLoading] = useState('true')


  useEffect(() => {
    setLoading('true')
    fetchCategories();
  },[]);

  const fetchCategories = async () => {
    setLoading('true')
    const getCategories = await Categories.getCategories();
    setCategories(getCategories);
    setLoading('false')
  }

  const getProductsByCategory = async (id) => {
    setLoading('true')
    console.log(id);
    const find = categories.find(c => c.name === id)
    console.log(find.MLB);

    // const getProducts = await MercadoLivre.getProductsByCategory(id);
    // // console.log(getProducts.results);
    // setSearch(getProducts.results);
    setLoading('false')
  }

  const getProductsByQuery = async (query) => {
    setLoading('true')
    const getProducts = await MercadoLivre.getProductsByQuery(query);
    // console.log(getProducts);
    setSearch(getProducts.results);
    setLoading('false')
  }

  const searchWithSwitch = async (param, value) => {
    if (param === 'mercadoLivre') {
      getProductsByCategory(value);
    }
  }

  const switchSearch = (param) => {
    switch (param) {
        case 'mercadoLivre':
        setMercadoLivre('true');
        setBuscape('false')
        searchWithSwitch('mercadoLivre')
            break;
        case 'buscape':
            setMercadoLivre('false');
            setBuscape('true')
            searchWithSwitch('buscape')
        break;
        case 'both':
            setMercadoLivre('true');
            setBuscape('true')
            searchWithSwitch('both')
        break;
        default:
            console.log('Error');
            break;
      }
  }

  const test = ['test', 'test', 'test', 'test']

  return (
    <Context.Provider
      value={ { switchSearch, test, search, loading, setLoading, categories, getProductsByCategory, getProductsByQuery } }
      >
      { children }
    </Context.Provider>
  );
}

export default Provider;