
"use client";
import React from "react";
import Link from "next/link";
import { Icon } from '@iconify/react';
import Lottie from "lottie-react"
import  animationData from "../public/assets/data.json"
import {BiSearch} from "react-icons/bi"
const Footer = () => {
  return(




        
        <div className=" mx-auto mt-[35px] h-[137px] bg-gradient-to-r from-[#EF3037] to-[#3F3F95] text-white flex items-center justify-center flex flex-row  ">
        

            <div className="flex flex-row space-x-3 ml-[-160px] mr-[80px]">
            <Link href={'https://www.facebook.com/seinfra.ba/'}>
            <Icon  icon="line-md:facebook" className="w-[35px] h-[40px]"/>
            </Link>
            <Link href={'https://www.instagram.com/seinfraba/'}>
            <Icon icon="line-md:instagram" className="w-[35px] h-[40px]"/>
            </Link>
            <Link href={'https://twitter.com/seinfra_ba'}>
            <Icon icon="line-md:twitter" className="w-[35px] h-[40px]"/>
            </Link>
            <Link href={'https://www.flickr.com/photos/seinfraba/'}>
            <Icon icon="jam:flickr-square" className="w-[35px] h-[40px]"/>
            </Link>
            </div>

            <div >
            <Link href='#' >
            <img src="/assets/logogov.png" alt="" className=" h-[88px] w-[190px]" />
            </Link>
            </div>
      
            <div className="pl-4 pr-4 ml-8 mr-4 border-l-2 border-r-2 border-gray-300">
            <p>Estado da Bahia - Secretaria de Infraestrutura <br/>
            4ª Avenida, 440 - CAB<br/>
            CEP 41.745-002 - Salvador - Bahia<br/>
            Horário de funcionamento: 08:30 às 12:00 e 13:30 às 18:00h</p>
            </div>

      
      
            <div className="flex flex-col space-y-2 ">
            <p>Empresas vinculadas: </p>
          
            <Link href={'http://www.agerba.ba.gov.br'}>
            <img src="/assets/logoagerba.png" alt="" className="w-[110px]" />
            </Link>
            <Link href={'https://www.bahiagas.com.br'}>
            <img src="/assets/logobahiagas.png" alt="" className="w-[130px]" />
            </Link>
            </div>


        </div>
  
    
  )
}

export default Footer