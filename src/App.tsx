import { ChangeEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import { productList, formInputList } from "./data";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import Input from "./components/ui/input";
// import { Description } from "@headlessui/react";
import { IProduct } from "./interfaces";

interface IProps {}

const App = ({}: IProps) => {
  /* ----------STATES---------- */
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: ""
    }
  });

  /* ----------HANDLERS---------- */

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target
    setProduct({...product, [name]: value})
  };

  /* ----------RENDERS---------- */
  const renderProductList = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  const renderFormInputList = formInputList.map(({ id, label, name, type }) => {
    return (
      <div key={id} className="flex flex-col">
        <label htmlFor={id} className="text-md my-1">
          {label}
        </label>
        <Input id={id} name={name} type={type} value={product[name]} onChange={onChangeHandler} />
        {/* <input className="border rounded-sm border-gray-300" type={type} name={name} id={id} /> */}
      </div>
    );
  });

console.log(product)

  return (
    <main className="flex-col container mx-auto my-5">
      <div className="mx-3 flex justify-between items-center">
        <h1 className="font-bold font-sans text-3xl md:text-5xl">
          Product <span className="text-indigo-600">Inventory</span>
        </h1>
        <Button
          className="bg-indigo-600 max-w-30 md:max-w-50 md:py-2 w-full"
          onClick={openModal}
        >
          Add Product
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6 mx-3">
        {renderProductList}
      </div>
      <div>
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          title="Add a new product"
        >
          <form className="space-y-3">
            {renderFormInputList}

            <div className="flex  space-x-3 items-center">
              <Button className="bg-red-500" onClick={closeModal}>
                Cancel
              </Button>
              <Button className="bg-indigo-600">Submit</Button>
            </div>
          </form>
        </Modal>
      </div>
    </main>
  );
};

export default App;
