import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a Product</h1>
      <form className="space-y-4">
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Enter product name"
          />
        </div>
        <div>
          <label>Product Price:</label>
          <input
            type="number"
            className="border p-2 rounded"
            placeholder="Enter product price"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </form>

      <h1 className="text-2xl font-bold mt-8 mb-4">Display Products</h1>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace this section with dynamic rows */}
          <tr>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">Sample Product</td>
            <td className="border border-gray-300 px-4 py-2">$10.00</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">2</td>
            <td className="border border-gray-300 px-4 py-2">Another Product</td>
            <td className="border border-gray-300 px-4 py-2">$20.00</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}
