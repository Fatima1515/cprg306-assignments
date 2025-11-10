export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect && onSelect({ name, quantity, category })}
      className="border border-gray-300 rounded-md p-3 bg-pink-200 text-gray-900 mb-2 max-w-md cursor-pointer hover:bg-pink-300 transition"
    >
      <strong className="capitalize">{name}</strong>
      <div className="text-sm text-gray-700 mt-1">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
