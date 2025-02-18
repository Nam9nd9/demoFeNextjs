"use client";

import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { generateProductMockData } from "../utils/mockData";
import Image from "next/image";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products] = useState(generateProductMockData());
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filtered);
  };
  return (
    <div className="w-[1600px] h-[1060px] bg-[#F2F2F7]">
      <div className="w-full h-16 pt-7 px-6 flex justify-between">
        <div className="text-[32px]">
          <strong>Danh sách sản phẩm</strong>
        </div>
      </div>
      <div className="w-full h-[996px] p-6 gap-6">
        <div className="bg-white p-6 gap-6 h-[913px]">
          <div className="mb-4 relative">
            <input
              id="search"
              className="bg-[#F2F2F7] w-full h-10 py-[9px] pl-12 mt-2 border border-gray-300 rounded"
              placeholder="Tìm kiếm theo tên sản phẩm"
              value={searchQuery}
              onChange={handleSearch}
            />
            <span className="absolute left-4 top-7 transform -translate-y-1/2">
              <IoSearchSharp size={20} color="#888" />
            </span>
          </div>
          <div className="text-lg mt-6 h-[693px] overflow-y-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="py-2 pl-4 w-1 border border-gray-300">STT</th>
                  <th className="py-2 pl-4 w-[32px] border border-gray-300">Ảnh</th>
                  <th className="py-2 pl-4 w-[324px] border border-gray-300">Tên sản phẩm</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr key={product.id} className="odd:bg-white even:bg-gray-50 h-[48px] max-h-12">
                    <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
                    <td className="py-2 px-2 border border-gray-300 relative group">
                      <div className="w-[32px] h-[32px] flex justify-center items-center">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={100}
                          height={100}
                          className="transition-all duration-300 transform group-hover:scale-[5] group-hover:translate-x-[-100px]"/>
                          </div>
                    </td>
                    <td className="py-2 pl-4 border border-gray-300">{product.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
