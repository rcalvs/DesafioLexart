export async function getCategories() {
    const fetchCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categoriesResponse = await fetchCategories.json();
    return categoriesResponse;
  }

export async function getProductsByCategory(id) {
    const fetchCategories = await fetch('https://api.mercadolibre.com/sites/MLB/search?category=${id}');
    const productsByCategsResponse = await fetchCategories.json();
    return productsByCategsResponse;
  }

export async function getProductsByQuery(query) {
    const fetchCategories = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=${query}$limit=10');
    const productsByQueryResponse = await fetchCategories.json();
    return productsByQueryResponse;
  }
