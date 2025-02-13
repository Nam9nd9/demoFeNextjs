"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useEffect } from "react";
import Link from "next/link";
import TextEditor from "@/components/testTextEditor";



const productSchema = z.object({
  name: z.string().min(10, "Tên sản phẩm không hợp lệ"),
  code: z.string().min(6, "Mã barcode không hợp lệ"),
  category: z.string(),
  weight: z.number().min(1, "Khối lượng phải lớn hơn 0"),
  brand: z.string(),
  expiryDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Ngày không hợp lệ"),
  status: z.enum(["Bán", "Ngừng bán"]),
  description: z.string().optional(),
  retailPrice: z.number().min(1, "Giá bán lẻ không hợp lệ"),
  wholesalePrice: z.number().min(1, "Giá bán buôn không hợp lệ"),
  importPrice: z.number().min(1, "Giá nhập không hợp lệ"),
  image: z.any(),
});

type ProductFormValues = z.infer<typeof productSchema>;

const brands = [
  { value: "guchi", label: "Guchi", logo: "/img/logo1.png" },
  { value: "dior", label: "DIor", logo: "/img/logo2.png" },
  { value: "brand3", label: "Brand 3", logo: "/img/logo3.png" },
];

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
  });

  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  const [newProductImage, setNewProductImage] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewProductImage((prevImages) => [...prevImages, URL.createObjectURL(file)]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setNewProductImage((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  
  const onSubmit = (data: ProductFormValues) => {
    const isFormValid = true;

    if (isFormValid) {
      setAlertMessage(`Thêm sản phẩm "${data.name} - ${data.brand}" thành công!`);
      setAlertType("success");
      reset();
    } else {
      setAlertMessage("Có lỗi xảy ra, vui lòng kiểm tra lại thông tin.");
      setAlertType("error");
    }
  };

  
  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage(null);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  return (
    <div className="relative w-[1600px] h-[1374px] mx-auto mt-10 p-6 bg-[#F2F2F7] text-black rounded-lg">
      <div className="w-[1300px] h-[64px] flex justify-between ml-[155px] ">
      <h2 className="flex items-center text-3xl font-semibold mb-6 text-left">
      <Link href="/facebook.com" >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-2"
        >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
        </svg></Link>
        <span className="text-[24px]">Thêm sản phẩm</span>
      </h2>
      <button onClick={()=>alert("Thêm thành công sản phẩm")} className="text-[#C025F4] border border-[#C025F4] w-[207px] h-[40px]">+ Thêm loại sản phẩm
      </button>
      </div>
      {alertMessage && (
        <div
          className={`absolute top-[50px] right-0 w-80 p-4 rounded-lg text-white ${alertType === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          <div className="flex items-center">
            <span className="mr-2">{alertType === "success" ? "✅" : "❌"}</span>
            <p className="text-sm">{alertMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 ml-[155px] mr-[155px] w-[1290px] h-[1166px]">
        <div className="flex flex-col w-[764px] px-6 bg-white border" >
          <fieldset className=" w-[716px] mt-6  rounded-lg   ">
            <div className="space-y-6 h-[66px]">
            <legend className="text-lg font-semibold text-[20px] h-[22px]">Thông Tin Chung</legend>
              <div>
                <label className="block font-medium">Tên sản phẩm</label>
                <input {...register("name")} className="w-full info pt-2 pb-2 pl-[9px] border rounded-md h-[40px]" placeholder="Dưỡng phẩm XYZ" />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block font-medium">Mã barcode</label>
                <input {...register("code")} className="w-full border rounded-md" placeholder="Mã barcode"/>
                {errors.code && <p className="text-red-500 text-sm">{errors.code.message}</p>}
              </div>
              <div>
                <label className="block font-medium">Loại sản phẩm</label>
                <select {...register("category")} defaultValue="" className="w-full p-3 border rounded-md pt-2 pb-2 pl-[9px] h-[40px]">
                  <option value="" disabled>Loại sản phẩm</option>
                  <option value="kemco">Kem cổ</option>
                  <option value="tinhdauthomphng">Tinh dầu thơm phòng</option>
                  <option value="chamsoccothe">Chăm sóc cơ thể</option>
                  <option value="kemduongbanngay">Kem dưỡng ban ngày</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">Khối lượng(g)</label>
                <div className="flex items-center space-x-2">
                  <input
                    {...register("weight", { valueAsNumber: true })}
                    type="number"
                    className="w-full p-3 border rounded-md [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="Khối lượng"
                  />
                </div>
                {errors.weight && <p className="text-red-500 text-sm">{"khối lượng không hợp lệ"}</p>}
              </div>
              <div>
                <label className="block font-medium">Nhãn hiệu</label>
                <select {...register("brand")} defaultValue="" className="w-full p-3 border rounded-md pt-2 pb-2 pl-[9px] h-[40px]">
                  <option  disabled value="">Nhãn hiệu</option>
                  {brands.map((brand) => (
                    <option key={brand.value} value={brand.value}>
                      {brand.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-medium">Hạn sử dụng</label>
                <input type="date" {...register("expiryDate")} className="w-full p-3 border rounded-md pt-2 pb-2 pl-[9px] h-[40px]"/>
              </div>
              <div className="flex justify-between h-[66px] ">
                  <label className="block font-medium">Trạng thái</label>
                  <div className="w-[320px] ">
                  <div className="flex items-center justify-between">
                    <div className=" flex items-center">
                      <input
                     type="radio"
                      id="ban"
                      value="Bán"
                      {...register("status")}
                      className="w-4 h-4 text-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="ban" className="ml-2">Cho phép bán</label>
                  </div>
                  <div className=" flex items-center">
                      <input
                      type="radio"
                      id="ngung-ban"
                      value="Ngừng bán"
                      {...register("status")}
                      className="w-4 h-4 text-blue-500 border-gray-300 rounded"
                      />
                    <label htmlFor="ngung-ban" className="ml-2 ">Ngừng bán</label>
                  </div>
                </div>
                  </div>
              </div>
              <div className="h-[449px] w-[716px] ">
                <label className="block font-medium w-[25pxD]">Mô tả sản phẩm</label>
                <TextEditor/>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="flex flex-col w-[510px] h-[684px]">
          <div className="w-[510px] rounded-lg  bg-white ">
          <fieldset className="mt-6 pl-6 pr-6">
            <legend className="text-lg text-[20px] font-semibold">Giá Sản Phẩm</legend>
            {[{ label: "Giá bán lẻ", name: "retailPrice" }, { label: "Giá bán buôn", name: "wholesalePrice" }, { label: "Giá nhập", name: "importPrice" }].map(({ label, name }) => (
              <div key={name} className="relative w-[66px] mt-6 mb-3">
                <label className="block font-medium">{label}</label>
                <div className="relative">
                  <input
                    type="number"
                    {...register(name as keyof ProductFormValues, { valueAsNumber: true })}
                    className="w-[462px] border rounded-md [&::-webkit-inner-spin-button]:appearance-none c"
                    placeholder="0.000"
                  />
                </div>
                {errors[name as keyof ProductFormValues] && <p className="text-red-500 text-sm">{errors[name as keyof ProductFormValues]?.message}</p>}
              </div>
            ))}
          </fieldset>
          </div>
            <div  className="relative mt-6 w-[510px] h-[269px] rounded-lg  bg-white">
            <fieldset className="p-6 mt-6">
            <legend className="text-lg text-[20px] font-semibold mt-10">Ảnh Sản Phẩm</legend>
            {newProductImage.length > 0 ? (
        <div className="flex justify-center align-middle">
          <button
            onClick={() => setNewProductImage([])}
            className="absolute bg-red-500 text-white top-6 right-[32px]"
          >
            Xóa Tất cả
          </button>
          <div className="flex flex-wrap gap-4 mt-4">
            {newProductImage.map((image, index) => (
              <div key={index} className="relative w-[62px] h-[62px]">
                <img
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-[62px] h-[62px] object-cover rounded-md shadow-lg"
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full p-1"
                >
                  ✖
                </button>
              </div>
            ))}
              <label className="flex flex-col items-center justify-center w-[62px] h-[62px] border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-gray-200 bg-[#F2F2F7]">
                <span className="text-lg">+</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
          </div>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-gray-200">
          <span className="text-pink-600 text-lg w-[127px] h-[28px] bg-[#C025F426]"> + Tải ảnh lên </span>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
        </label>
      )}
          </fieldset>
            </div>

          <div className="col-span-2 text-center mt-6">
            <button type="submit" className="w-full bg-[#C025F4] text-white py-3 rounded-md hover:bg-blue-700">
              Thêm Sản Phẩm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
