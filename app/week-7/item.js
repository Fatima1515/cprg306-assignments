export default function Item({ name, quantity, category }) {
  return (
    <li className="border border-gray-300 rounded-md p-3 bg-pink-200 text-gray-900 mb-2 max-w-md">
      <strong className="capitalize">{name}</strong>
      <div className="text-sm text-gray-700 mt-1">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
