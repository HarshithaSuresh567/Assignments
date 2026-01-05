export default function Card({ title }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img src="https://via.placeholder.com/300" className="rounded mb-3" />
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-600">Simple card component.</p>
      <button className="mt-3 px-4 py-1 rounded bg-gray-200 hover:bg-gray-300">
        Read More
      </button>
    </div>
  );
}
