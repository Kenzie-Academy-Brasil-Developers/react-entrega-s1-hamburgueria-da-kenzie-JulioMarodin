import './style.css';
import Product from '../Product';

function MenuContainer({ products, handleClick }) {
  return (
    <div className="mainMenu">
      {products.map((item, index) => {
        const [name, category, price, id] = [
          item.name,
          item.category,
          item.price,
          item.id,
        ];
        return (
          <Product
            key={index}
            name={name}
            category={category}
            price={price}
            id={id}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}

export default MenuContainer;
