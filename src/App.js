import { useState } from 'react';
import './App.css';
import MenuContainer from './Components/MenuContainer';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredItem, setFilteredItem] = useState('');
  const [currentSale, setCurrentSale] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);

  const showProducts = (filteredText) => {
    if (filteredText !== '') {
      const filtered = products.filter((item) => {
        if (item.name === filteredText) {
          return item;
        } else if (item.category === filteredText) {
          return item;
        }
      });

      setFilteredProducts([...filteredProducts, ...filtered]);
      setIsFiltered(true);
      setFilteredItem('');
    }
  };

  const showAll = () => {
    setIsFiltered(false);
  };

  const handleClick = (id) => {
    const idsList = [];

    const newItem = products.find((item) => {
      return id === item.id;
    });

    currentSale.forEach((item) => {
      idsList.push(item.id);
    });

    if (!idsList.includes(id)) {
      setCurrentSale([...currentSale, newItem]);
    }
  };

  if (isFiltered) {
    return (
      <div className="App">
        <h2 className="App-title">Kenzie Burger</h2>
        <main className="App-main">
          <section className="filterContainer">
            <input
              type="text"
              value={filteredItem}
              onChange={(e) => setFilteredItem(e.target.value)}
            />
            <button onClick={showAll}>Todos os produtos</button>
          </section>
          <MenuContainer
            products={filteredProducts}
            handleClick={handleClick}
          />

          <section className="shoppingCart">
            <h2>Carrinho</h2>

            <h5>
              Total a pagar:{' '}
              {currentSale.reduce((total, current) => current.price + total, 0)}
            </h5>

            <div className="shoppingCart__itemsList">
              {currentSale.map((item, index) => {
                return (
                  <div key={index} className="productCard">
                    <h3>{item.name}</h3>
                    <p>Categoria: {item.category}</p>
                    <p>Preço: {item.price}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h2 className="App-title">Kenzie Burger</h2>
        <main className="App-main">
          <section className="filterContainer">
            <input
              type="text"
              value={filteredItem}
              onChange={(evt) => setFilteredItem(evt.target.value)}
            />
            <button onClick={() => showProducts(filteredItem)}>
              Buscar item
            </button>
          </section>

          <MenuContainer products={products} handleClick={handleClick} />

          <section className="App-cart">
            <h2>Carrinho</h2>

            <h5>
              Total a pagar:{' '}
              {currentSale.reduce((total, current) => current.price + total, 0)}
            </h5>

            <div className="App-cart__itemsList">
              {currentSale.map((item, index) => {
                return (
                  <div key={index} className="productCard">
                    <h2>{item.name}</h2>
                    <p>Categoria: {item.category}</p>
                    <p>Preço: {item.price}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
