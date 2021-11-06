import React, { useState, useEffect } from 'react';
import Context from './Context';
import * as MercadoLivre from '../services/MercadoLivre';
import * as Categories from '../services/Categorias';
import * as WallMart from '../services/WallMart';

function Provider({ children }) {
  const [mercadoLivre, setMercadoLivre] = useState('true')
  const [wallMart, setWallMart] = useState('true')
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
    const find = categories.find(c => c.name === id)
    if ( mercadoLivre === 'true' || wallMart === 'false') {
      const getProducts = await MercadoLivre.getProductsByCategory(find.MLB);
      setSearch(getProducts.results);
      setLoading('false')
    } else if ( mercadoLivre === 'false' || wallMart === 'true') {
      const getProducts = await WallMart.getProductsByCategory(find.WallMart);
      setSearch(getProducts.category_results);
      setLoading('false')
    } else {
      const getProductsFromMLB = await MercadoLivre.getProductsByCategory(find.MLB);
      const getProductsFromWallMart = await WallMart.getProductsByCategory(find.WallMart);
      const completeSearch = [...getProductsFromMLB.results, ...getProductsFromWallMart.category_results];
      setSearch(completeSearch);
      setLoading('false')
    }
  }

  const getProductsByQuery = async (query) => {
    setLoading('true')
    if ( mercadoLivre === 'true' || wallMart === 'false') {
      const getProducts = await MercadoLivre.getProductsByQuery(query);
      setSearch(getProducts.results);
      setLoading('false')
    } else if ( mercadoLivre === 'false' || wallMart === 'true') {
      const getProducts = await WallMart.getProductsByQuery(query);
      setSearch(getProducts.category_results);
      setLoading('false')
    } else {
      const getProductsFromMLB = await MercadoLivre.getProductsByQuery(query);
      const getProductsFromWallMart = await WallMart.getProductsByQuery(query);
      const completeSearch = [...getProductsFromMLB.results, ...getProductsFromWallMart.category_results];
      setSearch(completeSearch);
      setLoading('false')
    }
  }

  const switchSearch = (param) => {
    switch (param) {
        case 'mercadoLivre':
        setMercadoLivre('true');
        setWallMart('false')
        console.log('Você está no MercadoLivre');
            break;
        case 'WallMart':
            setMercadoLivre('false');
            setWallMart('true')
            console.log('Você está no WallMart');
            break;
        case 'both':
            setMercadoLivre('true');
            setWallMart('true')
            console.log('Você está buscando na Rede');
            break;
        default:
            console.log('Error');
            break;
      }
  }

  return (
    <Context.Provider
      value={ { switchSearch, search, loading, setLoading, categories, getProductsByCategory, getProductsByQuery } }
      >
      { children }
    </Context.Provider>
  );
}

export default Provider;