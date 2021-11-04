import React, {useContext} from React;

const { categories } = useContext(Context);
console.log(categories);

function Header() {
    return 
    <div>
      <h1>Hello World</h1>
      <div>
        <select
          className=''
          onChange={(e) => (console.log(e.target.value))}
        >
          Search
          <option value="both">Both</option>
          <option value="mercadoLivre">MercadoLivre</option>
          <option value="buscape">Buscapé</option>
        </select>
      </div>
      <div>
        <select
          className=''
          onChange={(e) => (console.log(e.target.value))}
        >
          Categories
          <option value="both">Both</option>
          <option value="mercadoLivre">MercadoLivre</option>
          <option value="buscape">Buscapé</option>
        </select>
      </div>
      <form
        className="flex m-auto justify-center font-hand text-xl pb-4 shadow-xl"
        onSubmit={(e) => (console.log(e.target.value))}>
        <input
          className="border-1 px-2 w-80 rounded-tl-xl"
          type="text"
          maxLength="20"
          onChange={(e) => (console.log(e.target.value))}
        />
        <button
          className="border-1 py-1 px-2 border-black bg-yellow-400 rounded-br-xl"
        >
          Search
        </button>
      </form>
    </div>
}

export default Header