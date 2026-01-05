export default function Table() {
  return (
    <div className="p-8 overflow-x-auto">
      <table className="w-full border bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {["Alice", "Bob", "Charlie"].map((name, i) => (
            <tr key={i} className="odd:bg-gray-100 hover:bg-gray-200">
              <td className="border p-2">{name}</td>
              <td className="border p-2">User</td>
              <td className="border p-2">Active</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
