import { IProduct } from "../../interfaces";
import Image from "../ImageComponent";
import Button from "../ui/Button";
import { textSlicer } from "../../utils/functions";
import ColorCircle from "../ColorCircle";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, price, colors, category } = product;

  /* ------------------- RENDERS ------------------- */
  const renderColorCircle = colors.map((color) => (
    <ColorCircle key={color} color={color} />
  ));

  return (
    <div className="border rounded-md p-2 flex-col">
      <Image
        imageUrl={imageURL}
        imageAltText={title}
        className="w-full rounded-md h-60 object-cover object-center"
      />

      <h3 className="text-md font-semibold from-neutral-800 my-1 md:my-2">
        {title}
      </h3>
      <p className="text-zinc-950">{textSlicer(description)}</p>
      <div className="flex items-center space-x-2 my-3">
        <div className="ms-1 flex-wrap">{renderColorCircle}</div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-indigo-950 font-semibold">${price}</span>
        <Image
          imageUrl={category.imageURL}
          imageAltText={category.name}
          className="w-8 h-8 rounded-full"
        />
      </div>

      <div className="flex items-center space-x-2 mt-3 justify-between">
        <Button className="bg-indigo-600" width={"w-full"}>
          Edit
        </Button>
        <Button className="bg-red-500" width={"w-full"}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
