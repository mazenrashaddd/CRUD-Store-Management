import { v4 as uuidv4 } from "uuid";
import { IFormInput, IProduct } from "../interfaces/index";

export const productList: IProduct[] = [
  {
    id: uuidv4(),
    title: "Wireless Headphones",
    description: "High-quality noise-canceling wireless headphones.",
    imageURL:
      "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    price: "120",
    colors: ["#000000", "#FFFFFF", "#0000FF"],
    category: {
      name: "Electronics",
      imageURL:
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Smartphone",
    description: "Latest model smartphone with high-resolution display.",
    imageURL:
      "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    price: "999",
    colors: ["#000000", "#C0C0C0", "#FFD700"],
    category: {
      name: "Electronics",
      imageURL:
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Gaming Laptop",
    description: "Powerful gaming laptop with RTX graphics.",
    imageURL:
      "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    price: "1500",
    colors: ["#000000", "#808080"],
    category: {
      name: "Computers",
      imageURL:
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Smartwatch",
    description: "Track your fitness and notifications on the go.",
    imageURL:
      "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    price: "250",
    colors: ["#000000", "#C0C0C0", "#B76E79"],
    category: {
      name: "Wearables",
      imageURL:
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with rich sound quality.",
    imageURL:
      "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    price: "90",
    colors: ["#FF0000", "#000000", "#0000FF"],
    category: {
      name: "Audio",
      imageURL:
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Wireless Mouse",
    description: "Ergonomic wireless mouse with adjustable DPI.",
    imageURL:
      "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    price: "40",
    colors: ["#000000", "#FFFFFF", "#808080"],
    category: {
      name: "Accessories",
      imageURL:
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard for gaming and work.",
    imageURL:
      "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    price: "80",
    colors: ["#000000", "#FFFFFF"],
    category: {
      name: "Accessories",
      imageURL:
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Smart TV",
    description: "4K Ultra HD Smart TV with streaming capabilities.",
    imageURL:
      "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    price: "800",
    colors: ["#000000", "#808080"],
    category: {
      name: "Home Entertainment",
      imageURL:
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "VR Headset",
    description: "Experience virtual reality with high-resolution VR headset.",
    imageURL:
      "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    price: "350",
    colors: ["#000000", "#FFFFFF"],
    category: {
      name: "Gaming",
      imageURL:
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Fitness Tracker",
    description: "Track your steps, heart rate, and sleep quality.",
    imageURL:
      "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    price: "70",
    colors: ["#000000", "#FFC0CB", "#0000FF"],
    category: {
      name: "Health & Fitness",
      imageURL:
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Drone with Camera",
    description: "Capture stunning aerial footage with 4K camera drone.",
    imageURL:
      "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    price: "600",
    colors: ["#000000", "#FFFFFF"],
    category: {
      name: "Drones",
      imageURL:
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Electric Scooter",
    description: "Foldable electric scooter with long battery life.",
    imageURL:
      "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    price: "500",
    colors: ["#000000", "#FF0000", "#FFFFFF"],
    category: {
      name: "Transportation",
      imageURL:
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Action Camera",
    description: "Waterproof 4K action camera for adventure enthusiasts.",
    imageURL:
      "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    price: "150",
    colors: ["#000000", "#0000FF"],
    category: {
      name: "Cameras",
      imageURL:
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Wireless Earbuds",
    description: "Compact wireless earbuds with noise isolation.",
    imageURL:
      "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    price: "90",
    colors: ["#FFFFFF", "#000000", "#0000FF"],
    category: {
      name: "Audio",
      imageURL:
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Portable Power Bank",
    description: "Fast-charging power bank with 20000mAh capacity.",
    imageURL:
      "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    price: "50",
    colors: ["#000000", "#C0C0C0"],
    category: {
      name: "Accessories",
      imageURL:
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/345/3459683153294137080/previews/G03-200x200.jpg",
    },
  },
];

export const formInputList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "imageUrl",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "string",
  },
];

export const colors = [
  // "#000000", // Black - Classic and versatile
  // "#FFFFFF", // White - Clean and minimal
  "#C0C0C0", // Silver - Premium and modern
  "#8B4513", // Saddle Brown - Leather/Tan
  "#FF5733", // Red-Orange - Bold and attention-grabbing
  "#3498DB", // Sky Blue - Fresh and calming
  "#27AE60", // Emerald Green - Natural and eco-friendly
  "#E74C3C", // Bright Red - Passionate and energetic
  "#F1C40F", // Yellow - Vibrant and cheerful
  "#A569BD", // Purple - Elegant and luxurious
];

