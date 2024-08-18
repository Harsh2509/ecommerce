export function Card({
  title,
  image,
  price,
}: {
  title: string;
  image: string;
  price: number;
}): JSX.Element {
  return (
    <div className="max-w-sm w-96 h-[27rem] rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center">
      <img src={image} alt={title} className="w-60 h-60 object-fill" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex gap-4 justify-center items-center mt-2">
          <span className="text-lg font-bold text-gray-900">${price}</span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
