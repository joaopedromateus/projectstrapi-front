"use client"
import React from "react";
import Link from "next/link";
import { Icon } from '@iconify/react';


const FooterForm = () => {
  return(
<div className="bg-[url('/assets/bonfim.jpg')]  bg-no-repeat bg-cover w-full  h-[400px] w-[100%] flex flex-row bg-fixed bg-left-top items-center">



<div className="flex flex-row gap-4">
  

<div className="flex flex-col  gap-4 ml-[300px] items-center  ">
  <h1 className="font-bold text-white " style={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 1)' }}>Fale Conosco</h1>
  <input type="text" placeholder="Nome" className="px-3 rounded-lg bg-white h-[40px] w-[260px]"/>
  <input type="text" placeholder="Assunto" className="px-3 rounded-lg bg-white  h-[40px] w-[260px]"/>
  <input type="text" placeholder="E-mail" className="px-3 rounded-lg bg-white h-[40px] w-[260px]"/>
</div>

<div >

  <textarea cols="30" rows="10" placeholder="Mensagem" className="h-[150px] w-[400px] bg-white rounded-lg mt-10 px-3 py-2"></textarea>
  

  <div className="w-[89px] h-[33px]  mt-2 flex flex-row">
    <div className="w-[89px] h-[30px]  bg-sky-600 bg-opacity-90 rounded-lg flex flex-row items-center gap-1 px-2 text-white hover:text-black cursor-pointer ">
    <div><Icon icon="teenyicons:send-outline" /></div><div>Enviar</div> 
    </div>
  
  
</div>
</div>

</div>

<div className="ml-7"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d589.2086984762401!2d-38.42386035751787!3d-12.94638535191567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161a73691836bd%3A0xd0a6f9534eaa0e7f!2sSEINFRA%20-%20Secretaria%20de%20Infraestrutura%20da%20Bahia!5e1!3m2!1spt-BR!2sbr!4v1699282650708!5m2!1spt-BR!2sbr" className="w-[600px] h-[350px] rounded-lg"> </iframe> </div>


</div>
)
}

export default FooterForm