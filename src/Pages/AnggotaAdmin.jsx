import React from "react";

function AnggotaAdmin() {
  return (
    <div>
      <div className="mb-5 font-bold text-2xl">Data Anggota</div>
      <div>
          <button className="bg-sky-500 text-white py-1 px-2 rounded-lg hover:bg-sky-600">
            Tambah data
          </button>
        </div>
      <div className="float float-right mb-5">
        <input
          type="Search"
          placeholder="Search"
          className="border border-gray-800 rounded-lg pl-2"
        />
      </div>
      <div>
        <table className="w-full mt-6 border border-gray-500 overflow-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs sticky top-0 z-20 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama Anggota
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                No Telepon
              </th>
              <th scope="col" className="px-6 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Dede
              </th>
              <td className="px-6 py-4">dede@gmail.com</td>
              <td className="px-6 py-4">Bandung</td>
              <td className="px-6 py-4">089872983232</td>
              <td className="px-6 py-4 gap-2 flex items-center">
                <a className="font-medium bg-yellow-200 text-blue-950 py-1 px-2 rounded-lg">
                  Update
                </a>
                <a className="font-medium bg-red-400 text-white py-1 px-2 rounded-lg">
                  Delete
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Alipia
              </th>
              <td className="px-6 py-4">alipia@gmail.com</td>
              <td className="px-6 py-4">Bandung</td>
              <td className="px-6 py-4">089872983345</td>
              <td className="px-6 py-4 gap-2 flex items-center">
                <a className="font-medium bg-yellow-200 text-blue-950 py-1 px-2 rounded-lg">
                  Update
                </a>
                <a className="font-medium bg-red-400 text-white py-1 px-2 rounded-lg">
                  Delete
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Bonardi
              </th>
              <td className="px-6 py-4">bona@gmail.com</td>
              <td className="px-6 py-4">Bekasi</td>
              <td className="px-6 py-4">089872983267</td>
              <td className="px-6 py-4 gap-2 flex items-center">
                <a className="font-medium bg-yellow-200 text-blue-950 py-1 px-2 rounded-lg">
                  Update
                </a>
                <a className="font-medium bg-red-400 text-white py-1 px-2 rounded-lg">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AnggotaAdmin;
