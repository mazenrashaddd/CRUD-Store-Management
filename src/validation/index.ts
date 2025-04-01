/**
 * Validates a product object by checking its title, description, imageURL, and price.
 * Returns an object containing error messages for invalid fields.
 *
 * @param {Object} product - The product details to validate.
 * @param {string} title - The product's title.
 * @param {string} description - A detailed description of the 
 * @param {string} imageURL - A URL linking to the product image.
 * @param {string} price - The product price (should be a valid number).
 *
 * @returns {Object} An object containing error messages for invalid fields. If all fields are valid, the object contains empty strings.
 * @returns {string} return.title - Error message for the title or an empty string.
 * @returns {string} return.description - Error message for the description or an empty string.
 * @returns {string} return.imageURL - Error message for the imageURL or an empty string.
 * @returns {string} return.price - Error message for the price or an empty string.
 *
 * @example
 * const product = {
 *   title: "Smartphone",
 *   description: "A great smartphone with amazing features.",
 *   imageURL: "https://example.com/image.jpg",
 *   price: "299.99"
 * };
 *
 * const errors = productValidation(product);
 * console.log(errors);
 * // Output: { title: "", description: "", imageURL: "", price: "" }
 */

export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
    
  const { title, description, imageURL, price } = product;

  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  if (
    !title.trim() ||
    title.length < 10 ||
    title.length > 50
  ) {
    errors.title = "Product title must be between 10 and 50 characters!";
  }
  if (
    !description.trim() ||
    description.length < 10 ||
    description.length > 900
  ) {
    errors.description =
      "Product description must be between 10 and 900 characters!";
  }

  const validImageURL = /^(ftp|http|https):\/\/[^\s]+$/.test(imageURL);

  if (!imageURL.trim() || !validImageURL) {
    errors.imageURL = "Valid image URL is required!";
  }

  if (!price.trim() || isNaN(Number(price))) {
    errors.price = "Valid price is required!";
  }

  return errors;
};
