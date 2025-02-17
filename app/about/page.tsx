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
import { generateMockData,genarateSellData, generateMonthlyMockData } from "../utils/mockData";

const transportData = generateMockData();
const doanhthu = generateMonthlyMockData();
const sellData = genarateSellData();


console.log(transportData.length);

const COLORS = ["#003780", "#0058CC", "#338BFF","green","red"];

const AboutPage = () => {
  const [selectedDayOption, setSelectedDayOption] = useState(10);
  const [selectedMonthOption, setSelectedMonthOption] = useState(6);
  const [filteredDayData, setFilteredDayData] = useState(
    transportData.slice(transportData.length - 3)
  );
  const [filteredMonthData, setFilteredMonthData] = useState(
    doanhthu.slice(doanhthu.length - 1)
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
                <option value={3}>3 ngày</option>
                <option value={5}>5 ngày</option>
                <option value={7}>7 ngày</option>
              </select>
            </div>
            <div className="w-[979px] h-[300px] mt-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={filteredDayData}>
                  <XAxis dataKey="day" tickCount={10}/>
                  <YAxis tickCount={6} />
                  <Tooltip />
                  <Bar dataKey="revenue" name="Thông số" fill="#8884d8" barSize={200} />
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
                    dataKey="quantity"
                    nameKey="product"
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
              <option value={1}>1 ngày qua</option>
              <option value={3}>3 ngày qua</option>
              <option value={7}>7 ngày qua</option>
            </select>
          </div>
          <div className="h-[366px] w-full mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredMonthData} barGap={5}>
                <Legend align="center" verticalAlign="top" fontSize="24px" />
                <XAxis dataKey="day"/>
                <YAxis yAxisId="left" tickCount={6} interval="preserveStartEnd" domain={[0, 100]} />
                <YAxis yAxisId="right" orientation="right" tickCount={6} interval="preserveStartEnd" domain={[0, 10]} />
                <Tooltip />
                <Bar dataKey="loinhuan" name=" Lợi nhuận" fill="#8884d8" barSize={100} yAxisId="right" />
                <Bar dataKey="doanhthu" name=" Doanh thu" fill="green" barSize={100} yAxisId="left" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
