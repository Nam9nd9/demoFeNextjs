"use client";

import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { generateShippingMockData } from "../utils/mockData";
import StatusBadge from "@/components/statusBadge";

const ShippingList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [shipments] = useState(generateShippingMockData());  // Dữ liệu mock
  const [filteredShipments, setFilteredShipments] = useState(shipments);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = shipments.filter((shipment) =>
      shipment.customerName.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredShipments(filtered);
  };

  return (
    <div className="w-[1600px] h-[1060px] bg-[#F2F2F7]">
      <div className="w-full h-16 pt-7 px-6 flex justify-between">
        <div className="text-[32px]">
          <strong>Danh sách vận chuyển</strong>
        </div>
      </div>
      <div className="w-full h-[996px] p-6 gap-6">
        <div className="bg-white p-6 gap-6 h-[913px]">
          <div className="mb-4 relative">
            <input
              id="search"
              className="bg-[#F2F2F7] w-full h-10 py-[9px] pl-12 mt-2 border border-gray-300 rounded"
              placeholder="Tìm kiếm theo tên khách hàng"
              value={searchQuery}
              onChange={handleSearch}
            />
            <span className="absolute left-4 top-7 transform -translate-y-1/2">
              <IoSearchSharp size={20} color="#888" />
            </span>
          </div>
          <div className="text-lg mt-6 h-full overflow-y-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="py-2 pl-4 w-16 border border-gray-300">STT</th>
                  <th className="py-2 pl-4 w-[150px] border border-gray-300">Mã đơn</th>
                  <th className="py-2 pl-4 w-[150px] border border-gray-300">Ngày tạo</th>
                  <th className="py-2 pl-4 w-[200px] border border-gray-300">Tên khách</th>
                  <th className="py-2 pl-4 w-[200px] border border-gray-300">Trạng thái vận chuyển</th>
                </tr>
              </thead>
              <tbody>
                {filteredShipments.map((shipment, index) => (
                  <tr key={shipment.id} className="odd:bg-white even:bg-gray-50 h-[48px] max-h-12">
                    <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
                    <td className="py-2 px-4 border border-gray-300">{shipment.orderId}</td>
                    <td className="py-2 px-4 border border-gray-300">{shipment.date}</td>
                    <td className="py-2 px-4 border border-gray-300">{shipment.customerName}</td>
                    <td className="py-2 px-4 border border-gray-300">
                      <StatusBadge type={shipment.type} value={shipment.shippingStatus} />
                    </td>
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

export default ShippingList;
