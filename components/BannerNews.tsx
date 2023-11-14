"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

  const BannerNews = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
    const response = await axios.get(`http://localhost:1337/api/blogs?populate=*&sort=createdAt:desc&pagination[start]=0&pagination[limit]=${limit}`);
    let responseData = response.data.data;
    setData(responseData);
    };
    fetchData();

  }, [limit]);

  const handleLimit = () => {
    setLimit(limit + 3);
  };

  return (
    <div className=" mx-auto xl:max-w-[1180px] text-white pb-[40px] ">
      <div className=" mt-14  gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      
      {data?.map((item: any) => (
    <div key={item.id} className="cursor-pointer w-full border border-[#8f92a0] rounded-xl shadow-md">
      <Link href={`/news/${item.id}`}>
      <div>
        <div className="h-[240px] w-full overflow-hidden">
          <img src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} alt="" className="w-full h-[100%] object-cover hover:scale-[109%] transition-all duration-300 ease-in-out rounded-t-xl "/>
        </div>
        <div className="pt-[15px] pl-[8px] pb-[5px] ">
          <h2 className="bg-[#4B6BFB]/[5%] inline-block text-[#4B6BFB] py-[2px] ml-[10px] px-[4px] mb-[15px]">{item.attributes.category}</h2>
          <p className="text-[24px] text-black ml-[10px] mr-[10px] font-bold">{item.attributes.title}</p>
          <div className="ml-[10px] pb-[10px] flex items-center gap-[25px] pt-[10px] text-[#97989F]">
            <div className="flex items-center gap-[10px]">
              <div><img src={`http://localhost:1337${item.attributes.avatar.data.attributes.url}`} alt=""/></div>
              <p>{item.attributes.author}</p>
            </div>
            <div><p>{item.attributes.date}</p></div>
          </div>
        </div>
      </div>
      </Link>
  </div>
))}
      </div>

      <div className="flex items-center justify-end pt-[40px]">
      <Link href="/noticias"><button className="h-[50px] w-[150px] border border-[#2f3241] text-[#97989F] hover:text-black">+ Notícias</button></Link>
      </div>

    </div>
  );
};

export default BannerNews;
