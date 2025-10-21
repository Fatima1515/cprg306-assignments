import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-center md:justify-start mb-6">
        <h1
          className="text-3xl font-bold text-sky-300"
          style={{ marginLeft: "20px" }}
        >
          Shopping List
        </h1>
      </div>
      <ItemList />
    </main>
  );
}
