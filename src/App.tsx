import ProductCard from "./components/ProductCard";
import { productList } from "./data";
import Button from "./components/ui/Button"

interface IProps {}

const App = ({}: IProps) => {
  // Renders
  const renderProductList = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
  return (
    <main className="flex-col container mx-auto my-5">
      <div className="mx-3 flex justify-between items-center">
        <h1 className="font-bold font-sans text-3xl md:text-5xl">
          Product <span className="text-indigo-600">Inventory</span>
        </h1>
        <Button className="bg-indigo-600 max-w-30 md:max-w-50 md:py-2 w-full">Add Product</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6 mx-3">
        {renderProductList}
      </div>
    </main>
  );
};

export default App;
