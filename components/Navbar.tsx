"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return(

    <div> 
    <div className=" bg-gray-300 w-[100%] flex flex-row  justify-center text-[15px] font-medium">
    <div><a href="#"><p className="pl-4 pr-4 ml-8 mr-4 text-black border-l-2 border-r-2 hover:text-white">Acessibilidade</p></a></div>
    <div><a href="#"><p className="pr-4 mr-4 text-black border-r-2 hover:text-white">Sites do Governo</p></a></div>
    <div><a href="#"><p className="pr-4 mr-4 text-black border-r-2 hover:text-white">Ouvidoria Geral</p></a></div>
    <div><a href="#"><p className="pr-4 mr-4 text-black border-r-2 hover:text-white">Transparência</p></a></div>
    </div>
    
    <div className=" mx-auto mt-[35px] h-[60px] bg-gradient-to-r from-[#EF3037] to-[#3F3F95] text-white flex items-center justify-between mb-8">
    <Link href='/'>
    <img src="/assets/logoseinfra.png" alt="" className="ml-14 cursor-pointer h-[102px] w-[250px]" />
    </Link>
      
    <nav className="flex items-center ml-[-290px] gap-[35px] cursor-pointer list-none">
    <li className=" hover:border-b-[0.5px]"><Link href="/">Início</Link></li>
    
    <li className=" hover:border-b-[0.5px]">Institucional</li>
    
    <li className=" hover:border-b-[0.5px]"> <Link href="/noticias">Notícias</Link></li>
    
    <li className=" hover:border-b-[0.5px]">Serviços</li>
    <li className=" hover:border-b-[0.5px]">Documentos</li>
    <li className=" hover:border-b-[0.5px]">Transparência</li>
    <li className=" hover:border-b-[0.5px]">Fale Conosco</li>
    </nav>
    
    <div>
    </div>
    </div>
    </div>
  )
}

export default Navbar