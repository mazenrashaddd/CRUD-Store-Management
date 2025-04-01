import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import { productList, formInputList, colors } from "./data";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import Input from "./components/ui/input";
// import { Description } from "@headlessui/react";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorComponent from "./components/ErrorComponent/index";
import ColorCircle from "./components/ColorCircle";
import ColorBox from "./components/ColorBox";
import { v4 as uuidv4 } from "uuid";

interface IProps {}

const App = ({}: IProps) => {
  const defaultProductObject = {
    id: "",
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  /* ----------STATES---------- */
  const [productsCatlog, setProductsCatalog] =
    useState<IProduct[]>(productList);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObject);
  const [tempColors, settempColors] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  /* ----------HANDLERS---------- */

  const closeModal = () => setIsOpen(false);
  const openModal = () => {
    setErrors({ title: "", description: "", imageURL: "", price: "" });
    setIsOpen(true);
  };
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { title, description, imageURL, price } = product;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    const hasErrorMessage = Object.values(errors).some((error) => error !== "");

    if (hasErrorMessage) {
      setErrors(errors);

      // console.log("Form has validation errors:", errors);
      return;
    }
    setProductsCatalog((prev) => [
      { ...product, id: uuidv4(), colors: tempColors },
      ...prev,
    ]);
    setProduct(defaultProductObject);
    settempColors([]);
    closeModal();
    // console.log("Form submitted successfully", product);
  };

  const onCancel = (): void => {
    setProduct(defaultProductObject);
    setErrors({ title: "", description: "", imageURL: "", price: "" }); // Clear validation errors
    closeModal();
  };

  /* ----------RENDERS---------- */
  const renderProductList = productsCatlog.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  const renderFormInputList = formInputList.map(({ id, label, name, type }) => {
    return (
      <div key={id} className="flex flex-col">
        <label htmlFor={id} className="text-md my-1">
          {label}
        </label>
        <Input
          id={id}
          name={name}
          type={type}
          value={product[name]}
          onChange={onChangeHandler}
        />
        <div className="ms-0 mt-0.5">
          <ErrorComponent message={errors[name]} />
        </div>
        {/* <input className="border rounded-sm border-gray-300" type={type} name={name} id={id} /> */}
      </div>
    );
  });

  const renderColorCircle = colors.map((color) => (
    <ColorCircle
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          settempColors((prevtempColors) =>
            prevtempColors.filter((item) => item !== color)
          );

          return;
        }
        settempColors((prevColors) => [...prevColors, color]);
      }}
    />
  ));

  // console.log(product);

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
          <form className="space-y-3" onSubmit={onSubmitHandler}>
            {renderFormInputList}
            <div className="ms-1 flex-wrap">{renderColorCircle}</div>
            <div className="grid grid-cols-4 space-x-1">
              {tempColors.map((color) => (
                <ColorBox key={color} colorCode={color} />
              ))}
            </div>
            <div className="flex  space-x-3 items-center">
              <Button className="bg-indigo-600">Submit</Button>
              <Button className="bg-red-500" onClick={onCancel}>
                Cancel
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </main>
  );
};

export default App;
