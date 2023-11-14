"use client"
import React from "react";
import cardList from '../public/data';
import Link from "next/link";
import { Icon } from '@iconify/react';

const Cards = () => {
  return (
    // Cards
    <div className="flex flex-row">
    
    {/* Serviços */}
    
    {/* Left Cards 1.0v */}
    {/* <div className="container mt-8 sm:ml-1 md:ml-5 lg:ml-10">
      <h1 className="mb-4 text-xl font-bold text-slate-900">Serviços</h1>
      <div className="flex grid gap-5 sm:grid-cols-1 md:grid-cols-2 md:space-x-4 md:gap-4 lg:grid-cols-3 xl:grid-cols-5 lg:gap-[80px]">
        {cardList.map((card, index) => (
            <div className="relative shadow-lg rounded-xl h-80 w-60 mb-11 ">
                <Link href={card.link}  key={index}>  <img className="object-cover w-full h-full rounded-xl" src={card.img} alt="" />   
                <h3 className="absolute text-3xl font-bold text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" style={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 1)' }}>
                {card.title}
                </h3></Link>
            </div>
      
        ))}
      </div>
    </div> */}

    {/* Left Cards 2.0v 
    <div className="container px-8 ml-[70px] mt-8">
  <h1 className="mb-4 text-xl font-bold text-slate-900">Serviços</h1>
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
    {cardList.map((card, index) => (
      <div key={index} className="relative">
        <Link href={card.link}>
          <div className="mb-4 shadow-lg rounded-xl">
            <img className="object-cover w-full h-80 rounded-xl" src={card.img} alt="" />
          </div>
          <h3 className="absolute text-3xl font-bold text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" style={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 1)' }}>
            {card.title}
          </h3>
        </Link>
      </div>
    ))}
  </div>
    </div>   */}

      <div className="container px-4 mx-auto mt-8 sm:ml-1 md:ml-5 lg:ml-10">
        <h1 className="mb-4 text-xl font-bold text-slate-900">Serviços</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-[40px]">
      {cardList.map((card, index) => (
      <div key={index} className="relative shadow-lg rounded-xl mb-11">
          <Link href={card.link}>
            <img className="object-cover w-full h-80 rounded-xl" src={card.img} alt="" />
            <h3 className="absolute font-bold text-center text-white transform -translate-x-1/2 -translate-y-1/2 sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl top-1/2 left-1/2" style={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 1)' }}>
            {card.title}
            </h3>
        </Link>
      </div>
      ))}
      </div>
      </div>


  {/* Links Úteis */}

  {/* Right Cards 1.0v */}
  {/*       
  <div className="grid gap-6 mt-5 mr-8 md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 ">
      <div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white flex justify-center items-center  rounded-xl w-[60px] h-[60px]"><Icon icon="fluent-emoji-high-contrast:e-mail" width="40" height="48"  /></div>
      <div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white flex justify-center items-center rounded-xl w-[60px] h-[60px]"><Icon icon="fluent-emoji-high-contrast:e-mail" width="40" height="48"  /></div>
      <div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white flex justify-center items-center rounded-xl w-[60px] h-[60px]"><Icon icon="fluent-emoji-high-contrast:e-mail" width="40" height="48"  /></div>
      <div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white flex justify-center items-center rounded-xl w-[60px] h-[60px]"><Icon icon="fluent-emoji-high-contrast:e-mail" width="40" height="48"  /></div>
      <div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white flex justify-center items-center rounded-xl w-[60px] h-[60px]"><Icon icon="fluent-emoji-high-contrast:e-mail" width="40" height="48"  /></div>
      <div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white flex justify-center items-center rounded-xl w-[60px] h-[60px]"><Icon icon="fluent-emoji-high-contrast:e-mail" width="40" height="48"  /></div>
      <div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white flex justify-center items-center rounded-xl w-[60px] h-[60px]"><Icon icon="fluent-emoji-high-contrast:e-mail" width="40" height="48"  /></div>
      <div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white flex justify-center items-center rounded-xl w-[60px] h-[60px]"><Icon icon="fluent-emoji-high-contrast:e-mail" width="40" height="48"  /></div>
      <div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white flex justify-center items-center rounded-xl w-[60px] h-[60px]"><Icon icon="fluent-emoji-high-contrast:e-mail" width="40" height="48"  /></div>
  </div> */}
  
      <div className="mt-8 mr-8">  
            <div>
              <h4 className="items-center content-center mr-8 font-bold text-center align-middle align-center">Links Úteis</h4>
            </div>
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3  mt-8 mr-8"> 
        <Link href={'www.office.com'}>  <div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white text-sm flex flex-col justify-center items-center pb-1 rounded-xl w-[70px] h-[70px]"><Icon icon="fluent-emoji-high-contrast:e-mail" width="40" height="48" />Webmail</div>
        </Link>
        <Link href={'http://www.infraestrutura.ba.gov.br/modules/consultas_externas/index.php?cod=30'}>  <div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white text-sm flex flex-col justify-center items-center pb-1 rounded-xl w-[70px] h-[70px]"><Icon icon="dashicons:networking" width="40" height="48" />Intranet</div>
        </Link>
        <Link href={'http://dovirtual.ba.gov.br/egba/reader2'}> <div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white text-xs flex flex-col justify-center items-center pb-1 pt-1 rounded-xl w-[70px] h-[70px]"><Icon icon="tdesign:book-open" width="40" height="48" /> Diário <div> </div> Oficial</div></Link>
        <Link href={'https://seibahia.ba.gov.br/sip/login.php?sigla_orgao_sistema=GOVBA&sigla_sistema=SEI&infra_url=L3NlaS8='}> <div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white text-sm flex flex-col justify-center items-center  pt-1 pb-1 rounded-xl w-[70px] h-[70px]"><Icon icon="medical-icon:i-administration" width="40" height="48" />SEI Bahia</div></Link>
        <Link href={'www.office.com'}><div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white text-xs flex flex-col justify-center items-center pt-1 pb-1 rounded-xl w-[70px] h-[70px]"><Icon icon="icons8:buy" width="40" height="48"/>Compras <div></div> net.ba</div></Link>
        <Link href={'http://www.condutoronline.infraestrutura.ba.gov.br'}><div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white text-xs flex flex-col justify-center items-center pt-1 pb-1 rounded-xl w-[70px] h-[70px]"><Icon icon="mingcute:car-line" width="40" height="48"/>Condutor <div></div> Online</div></Link>
        <Link href={'https://rhbahia.ba.gov.br'}><div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white text-xs flex flex-col justify-center   pt-1 pb-1 items-center rounded-xl w-[70px] h-[70px]"><img src="/assets/rh.png" alt="" width="55" height="68" /> RH Bahia</div></Link>
        <Link href={'www.office.com'}><div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white text-xs flex flex-col justify-center items-center pt-1 pb-1 rounded-xl w-[70px] h-[70px]"><Icon icon="fluent-emoji-high-contrast:e-mail" width="40" height="48"  />XYZ</div>  </Link>
        <Link href={'www.office.com'}><div className="w-3 bg-gradient-to-r from-[#553dc2] to-[#373797] text-white text-xs flex flex-col justify-center items-center pt-1 pb-1 rounded-xl w-[70px] h-[70px]"><Icon icon="fluent-emoji-high-contrast:e-mail" width="40" height="48"  />XYZ</div></Link>
      </div>
    </div>
  </div>
  
  );
};

export default Cards;
