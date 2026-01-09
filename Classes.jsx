import React, { useState } from 'react';
import dataGlasses from "./dataGlass.json";

const Glasses = () => {
  // Nên để mặc định là kính đầu tiên hoặc null
  const [glass, setGlass] = useState(dataGlasses[0]);

  return (
    <div>
      <div className='bg-black/50 flex justify-center p-4'>
        <h2 className='text-white text-2xl font-bold uppercase'>Try Glasses App Online</h2>
      </div>

      <div className='bg-[url("/glassesImage/background.jpg")] min-h-screen bg-cover bg-center py-10'>
        <div className='flex justify-center gap-40 px-36'>

          {/* Model bên trái (có kính) */}
          <div className='relative'>
            <img className='w-64' src="/glassesImage/model.jpg" alt="model" />
            
            {/* Ảnh kính */}
            <img
              className='absolute top-[25%] left-[50%] -translate-x-1/2 w-32 opacity-80'
              src={glass?.url}
              alt=""
            />

            {/* Phần thông tin kính */}
            <div className='absolute bottom-0 left-0 right-0 bg-orange-400/50 p-2 text-left h-24'>
              <p className='text-blue-700 font-bold'>{glass?.name}</p>
              <p className='text-white text-xs'>{glass?.desc}</p>
            </div>
          </div>

           {/* Model bên phải (không kính) */}
          <div className='relative'>
            <img className='w-64' src="/glassesImage/model.jpg" alt="model" />
          </div>

        </div>

        {/* Danh sách chọn kính */}
        <div className='bg-white max-w-4xl flex flex-wrap justify-center p-6 gap-4 mx-auto mt-10 shadow-lg'>
          {dataGlasses.map((item) => (
            <img
              key={item.id}
              onclick={() => setGlass(item)} // Thêm sự kiện click để đổi kính
              className='w-24 p-2 border border-gray-200 cursor-pointer hover:border-orange-400 transition-all'
              src={item.url}
              alt={item.name}
              onClick={() => setGlass(item)} // Thêm sự kiện click để đổi kính
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Glasses;