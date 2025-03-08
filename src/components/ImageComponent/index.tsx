interface IProps {
  imageUrl: string;
  imageAltText: string;
  className: string;
}

const Image = ({ imageUrl, imageAltText, className }: IProps) => {
  return <img src={imageUrl} alt={imageAltText} className={className} />;
};

export default Image;
