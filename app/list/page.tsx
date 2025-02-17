"use client";

import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { generateProductMockData } from "../utils/mockData";
import Image from "next/image";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredImage, setHoveredImage] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
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

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setPosition({ x: e.pageX + 10, y: e.pageY + 10 });
  };

  const handleMouseEnter = (image : string) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage("");
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
                  <th className="py-2 pl-4 w-16 border border-gray-300">STT</th>
                  <th className="py-2 pl-4 w-8 border border-gray-300">Ảnh</th>
                  <th className="py-2 pl-4 w-[324px] border border-gray-300">Tên sản phẩm</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr key={product.id} className="odd:bg-white even:bg-gray-50 h-[48px] max-h-12">
                    <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
                    <td className="py-2 px-2 border border-gray-300">
                      <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(product.image)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Image src={product.image} alt={product.name} width={32} height={32} />
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
      {hoveredImage && (
        <Image src={hoveredImage} alt="Hover preview" className="absolute" width={180} height={180} 
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            transition: "top 0.1s, left 0.1s",
          }}
        />
      )}
    </div>
  );
};

export default Page;
