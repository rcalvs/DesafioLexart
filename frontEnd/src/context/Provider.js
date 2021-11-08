import React, { useState, useEffect } from 'react';
import Context from './Context';
import * as MercadoLivre from '../services/MercadoLivre';
import * as Categories from '../services/Categorias';
import axios from "axios";

function Provider({ children }) {
  const [mercadoLivre, setMercadoLivre] = useState('true');
  const [buscape, setBuscape] = useState('true');
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

    if ( mercadoLivre === 'true' || buscape === 'false') {
      const response = await checkDatabaseFirst(find.MLB);

       if (response === false) {
        const getProducts = await MercadoLivre.getProductsByCategory(find.MLB);
        setSearch(getProducts.results);
        schemaTemplate(find.MLB, getProducts.results);
        setLoading('false');
      }

    } else if ( mercadoLivre === 'false' || buscape === 'true') {
      const response = await checkDatabaseFirst(find.buscape);

       if (response === false) {
        const getProducts = await scrapperSearchById(find.buscape);
        setSearch(getProducts);
        schemaTemplate(find.buscape, getProducts.category_results);
        setLoading('false');
      }
    } else {
      const response = await checkDatabaseFirst(find.MLB);

      if (response === false) {
        const getProductsFromMLB = await MercadoLivre.getProductsByCategory(find.MLB);
        const getProductsFromBuscape = await scrapperSearchById(find.buscape);
        const completeSearch = [...getProductsFromBuscape, ...getProductsFromMLB.results];
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
    if ( mercadoLivre === 'true' || buscape === 'false') {
      const response = await checkDatabaseFirst(query);

      if (response === false) {
        const getProducts = await MercadoLivre.getProductsByQuery(query);
        setSearch(getProducts.results);
        schemaTemplate(query, getProducts.results);
        setLoading('false');     
      }
    } else if ( mercadoLivre === 'false' || buscape === 'true') {
      const response = await checkDatabaseFirst(query);

      if (response === false) {
        const getProducts = await scrapperSearchByQuery(query);
        setSearch(getProducts);
        schemaTemplate(query, getProducts);
        setLoading('false');
      }
    } else {
      const response = await checkDatabaseFirst(query);

      if (response === false) {
        const getProductsFromMLB = await MercadoLivre.getProductsByQuery(query);
        const getProductsFromBuscape = await buscape.getProductsByQuery(query);
        const completeSearch = [...getProductsFromBuscape, ...getProductsFromMLB.results];
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
        setBuscape('false');
        // console.log('Você está no MercadoLivre');
          break;
        case 'buscape':
          setMercadoLivre('false');
          setBuscape('true')
          // console.log('Você está no buscape');
          break;
        case 'both':
          setMercadoLivre('true');
          setBuscape('true')
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

  const scrapperURL = 'http://localhost:3001/buscape';
  const scrapperSearchById = async (id) => {
    const response = await axios.get(`${scrapperURL}/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        return res.data;
      })
    return response;
  }
  
  const scrapperQueryURL = 'http://localhost:3001/buscape/query';
  const scrapperSearchByQuery = async (query) => {
    const response = await axios.get(`${scrapperQueryURL}/${query}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        return res.data;
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