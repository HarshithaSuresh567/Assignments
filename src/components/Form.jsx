export default function Form() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Contact Form</h3>

      <form className="space-y-4">
        <input className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" placeholder="Name" />
        <input className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" placeholder="Email" />
        <input className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" placeholder="Password" type="password" />
        <button className="w-full bg-gray-200 p-2 rounded hover:bg-gray-300">
          Submit
        </button>
      </form>
    </div>
  );
}
