"use client"
import TestTextEditor from '@/components/testTextEditor'
import React, { useState } from 'react'

const page = () => {
  const [description,setDescription] = useState<string>('');
  console.log(description);
  
  return (
    <div className='w-full h-[1000px] flex justify-center items-center bg-purple-200'>
                <div className="h-[449px] w-[716px] bg-white">
                <label className="block font-medium w-[25pxD] text-[20px]">Mô tả sản phẩm</label>
                <TestTextEditor value={description} onChange={setDescription} />
              </div>
    </div>
  )
}

export default page
