import React, { useState, useEffect } from 'react';
import Context from './Context';
import * as MercadoLivre from '../services/MercadoLivre';
import * as Categories from '../services/Categorias';
import * as WallMart from '../services/WallMart';
import axios from "axios";

function Provider({ children }) {
  const [mercadoLivre, setMercadoLivre] = useState('true');
  const [wallMart, setWallMart] = useState('true');
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState('true');
  const [query, setQuery] = useState({});

  
  useEffect(() => {
    setLoading('true');
    fetchCategories();
  },[]);

  const fetchCategories = async () => {
    setLoading('true');
    const getCategories = await Categories.getCategories();
    setCategories(getCategories);
    setLoading('false');
  }

  const getProductsByCategory = async (id) => {
    setLoading('true');
    const find = categories.find(c => c.name === id);

    if ( mercadoLivre === 'true' || wallMart === 'false') {
      const response = await checkDatabaseFirst(find.MLB);

      if (response === false) {
        const getProducts = await MercadoLivre.getProductsByCategory(find.MLB);
        setSearch(getProducts.results);
        schemaTemplate(find.MLB, getProducts.results);
        setLoading('false');
      }

    } else if ( mercadoLivre === 'false' || wallMart === 'true') {
      const response = await checkDatabaseFirst(find.WallMart);

      if (response === false) {
        const getProducts = await WallMart.getProductsByCategory(find.WallMart);
        setSearch(getProducts.category_results);
        schemaTemplate(find.WallMart, getProducts.category_results);
        setLoading('false');
      }
    } else {
      const response = await checkDatabaseFirst(find.MLB);

      if (response === false) {
        const getProductsFromMLB = await MercadoLivre.getProductsByCategory(find.MLB);
        const getProductsFromWallMart = await WallMart.getProductsByCategory(find.WallMart);
        const completeSearch = [...getProductsFromMLB.results, ...getProductsFromWallMart.category_results];
        setSearch(completeSearch);
        schemaTemplate(find.MLB, completeSearch);
        setLoading('false');
      }
    }
  }

  const checkDatabaseFirst = async (param) => {
    const response = await searchCheck(param);
    if (Boolean(response) === true) {
      console.log('response é True');
      setSearch(response);
      return true;
    }
    console.log('response é False');
    return false;
  }

  const getProductsByQuery = async (query) => {
    setLoading('true');
    if ( mercadoLivre === 'true' || wallMart === 'false') {
      const response = await checkDatabaseFirst(query);

      if (response === false) {
        const getProducts = await MercadoLivre.getProductsByQuery(query);
        setSearch(getProducts.results);
        schemaTemplate(query, getProducts.results);
        setLoading('false');     
      }
    } else if ( mercadoLivre === 'false' || wallMart === 'true') {
      const response = await checkDatabaseFirst(query);

      if (response === false) {
        const getProducts = await WallMart.getProductsByQuery(query);
        setSearch(getProducts.category_results);
        schemaTemplate(query, getProducts.category_results);
        setLoading('false');
      }
    } else {
      const response = await checkDatabaseFirst(query);

      if (response === false) {
        const getProductsFromMLB = await MercadoLivre.getProductsByQuery(query);
        const getProductsFromWallMart = await WallMart.getProductsByQuery(query);
        const completeSearch = [...getProductsFromMLB.results, ...getProductsFromWallMart.category_results];
        setSearch(completeSearch);
        schemaTemplate(query, completeSearch);
        setLoading('false');
      }
    }
  }

  const switchSearch = (param) => {
    switch (param) {
        case 'mercadoLivre':
        setMercadoLivre('true');
        setWallMart('false');
        // console.log('Você está no MercadoLivre');
          break;
        case 'WallMart':
          setMercadoLivre('false');
          setWallMart('true')
          // console.log('Você está no WallMart');
          break;
        case 'both':
          setMercadoLivre('true');
          setWallMart('true')
          // console.log('Você está buscando na Rede');
          break;
        default:
          console.log('Error');
          break;
    }
  }

  ////////////// BackEnd Connections //////////////

  const schemaTemplate = (id, data) => {
    const sliced = data;
    const schema = {
      query: id,
      data: sliced.slice(0,2)
    };
    setQuery(schema);
    console.log(query);
    searchSubmit(query);
  }

  const postURL = 'http://localhost:3001/save';
  const searchSubmit = () => {
    axios.post(postURL, { query })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  const getURL = 'http://localhost:3001/save';
  const searchCheck = async (id) => {
    const response = await axios.get(`${getURL}/${id}`, { query })
      .then(res => {
        if (res.data.search === null) {
          return console.log('Error: Could not find data from Database');
        } else {
          return res.data.search.data;
        }
      })
    return response;
  }

  ////////////// /////////////////// //////////////

  return (
    <Context.Provider
      value={ { switchSearch, search, loading, setLoading, categories, getProductsByCategory, getProductsByQuery } }
      >
      { children }
    </Context.Provider>
  );
}

export default Provider;