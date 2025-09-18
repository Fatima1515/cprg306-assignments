export default function Item({ name, quantity, category }) {
  return (
    <li className="p-3 mb-2 border rounded-lg shadow-sm bg-white flex justify-between items-center">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">Category: {category}</p>
      </div>
      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
        Qty: {quantity}
      </span>
    </li>
  );
}
