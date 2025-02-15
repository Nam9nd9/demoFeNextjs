"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Label,
} from "recharts";
import { generateMockData, generateMonthlyMockData } from "../utils/mockData";

const transportData = generateMockData();
const doanhthu = generateMonthlyMockData();

const sellData = [
  { id: 3, value: 15110, label: "Bàn chải" },
  { id: 2, value: 12529, label: "Nước hoa" },
  { id: 1, value: 73253, label: "Dưỡng ẩm" },
];
const COLORS = ["#003780", "#0058CC", "#338BFF"];

const AboutPage = () => {
  const [selectedDayOption, setSelectedDayOption] = useState(10);
  const [selectedMonthOption, setSelectedMonthOption] = useState(6);
  const [filteredDayData, setFilteredDayData] = useState(
    transportData.slice(transportData.length - 10)
  );
  const [filteredMonthData, setFilteredMonthData] = useState(
    doanhthu.slice(doanhthu.length - 6)
  );


  const handleSelectDay = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const days = parseInt(e.target.value, 10);
    setSelectedDayOption(days);
    setFilteredDayData(transportData.slice(transportData.length - days));
  };
  const handleSelectMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const months = parseInt(e.target.value, 10);
    setSelectedMonthOption(months);
    setFilteredMonthData(doanhthu.slice(doanhthu.length - months));
  };

  return (
    <div className="w-[1600px] bg-[#F2F2F7]">
      <div className="h-[80px] p-6 text-xl">Báo cáo</div>
      <div className="px-6 h-[1552px]">
        <div className="flex gap-6 h-[403px]">
          <div className="w-[1027px] h-full bg-white p-6">
            <div className="flex justify-between items-center">
              <span className="text-[20px]">Chỉ số vận chuyển</span>
              <select
                className="w-[117px] h-[28px] pl-2 bg-[#6464963D] text-black border border-gray-300 rounded-md"
                value={selectedDayOption}
                onChange={handleSelectDay}
              >
                <option value={10}>10 ngày</option>
                <option value={20}>20 ngày</option>
                <option value={30}>30 ngày</option>
              </select>
            </div>
            <div className="w-[979px] h-[300px] mt-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={filteredDayData}>
                  <XAxis dataKey="day" />
                  <YAxis tickCount={6} />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#8884d8" barSize={120} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="w-[501px] h-full bg-white text-black p-6">
            <span className="text-[20px] mb-4">Top sản phẩm</span>
            <div className="ml-[48.5px]">
              <ResponsiveContainer width={300} height={300}>
                <PieChart>
                  <Pie
                    data={sellData}
                    dataKey="value"
                    nameKey="label"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {sellData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend width={356} iconType="square" display="flex" style={{ gap: "10px" }} />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-8 h-[509px] bg-white w-[1552px] p-6">
          <div className="flex justify-between items-center">
            <div>
              <div className="h-[25px]">
                <span>Doanh thu cửa hàng</span>
              </div>
              <div className="h-[38px]">
                <span>
                  <strong className="text-[32px]">254.295.000</strong>
                  <a className="text-green-500"> + 11%</a>
                  <a> so với tháng trước </a>
                </span>
              </div>
            </div>
            <select className="w-[117px] h-[28px] pl-2 bg-[#6464963D] text-black border border-gray-300 rounded-md" 
            value={selectedMonthOption}
            onChange={handleSelectMonth}>
              <option value={12}>1 năm qua</option>
              <option value={9}>9 tháng qua</option>
              <option value={6}>6 tháng qua</option>
            </select>
          </div>
          <div className="h-[366px] w-full mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredMonthData}>
                <Legend align="center" verticalAlign="top" fontSize="24px" />
                <XAxis dataKey="month" />
                <YAxis tickCount={6} interval="preserveStartEnd" domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="loinhuan" name=" Lợi nhuận" fill="#8884d8" barSize={95} />
                <Bar dataKey="doanhthu" name=" Doanh thu" fill="green" barSize={95} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
