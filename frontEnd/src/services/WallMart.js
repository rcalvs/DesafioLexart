// export async function getCategories() {
//     const fetchCategories = await fetch(`https://api.bluecartapi.com/categories?api_key=${REACT_APP_API}`);
//     const categoriesResponse = await fetchCategories.json();
//     return categoriesResponse;
//   }

export async function getProductsByCategory(id) {
  const fetchCategories = await fetch(`https://api.bluecartapi.com/request?api_key=${process.env.REACT_APP_API}&type=category&category_id=${id}`);
  const productsByCategsResponse = await fetchCategories.json();
  return productsByCategsResponse;
}

export async function getProductsByQuery(query) {
  const fetchCategories = await fetch(`https://api.bluecartapi.com/request?api_key=${process.env.REACT_APP_API}&type=search&search_term=${query}`);
  const productsByQueryResponse = await fetchCategories.json();
  return productsByQueryResponse;
}
