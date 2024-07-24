
import { useState } from 'react';
import jsonData from '../data.json';
import SortButton from './SortButton';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const sortProducts = () => {
    const sortedProducts = [...products].sort(
      (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
    );
    setProducts(sortedProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SortButton sortProducts={sortProducts} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
