export async function getCategories() {
    const fetchCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categoriesResponse = await fetchCategories.json();
    return categoriesResponse;
  }
