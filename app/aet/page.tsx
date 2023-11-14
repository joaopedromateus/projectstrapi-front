import Blogs from "@/components/Blogs"
import React from "react"
import Link from "next/link";

export default function NoticiasPage(){
  return <>
  
    <h1 className="font-bold text-[1.3rem]  ml-[200px] mt-14 mb-4">Autorização Especial de Trânsito:</h1>
    <div className="ml-[200px] mr-[200px] mb-6" >
    <Link href={'http://sider.derba.ba.gov.br/aet/'}>
    <img src="assets/aet.png" alt="Imagem indicando link para página de solicitação de Autorização Especial de Trânsito" /></Link>
    <span className="font-bold">O que é Autorização Especial de Trânsito?</span><br/>
    <div><br/>
    </div>

<div><span className="text-base font-bold text-sky-500">Amparo Legal</span></div>
<br />
<p>O Código de Trânsito Brasileiro - CTB - prevê a 	necessidade da Autorização Especial de Trânsito - AET, para 	os veículos que transportam cargas indivisíveis, com pesos e 	ou dimensões excedentes (Art.101 e Resolução N.º210 do 	CONTRAN).</p>
<p>Outros tipos de Combinações de Veículos de Carga - CVC 	e Combinações para Transporte de Veículos - CTV 	(cegonheiros), conforme legislação própria (Resoluções 735/18, 210, 211 e 564/15, todas do 	CONTRAN), estão obrigados à prévia obtenção de Autorização 	Especial de Trânsito - AET.</p>
<p>A Autorização Especial de Trânsito (AET) é um documento 	emitido pela SIT, autorizando o trânsito nas rodovias sob 	sua jurisdição, a partir da análise e aprovação de documentos 	encaminhados pelo interessado na realização do transporte de 	cargas, regida pelas características do transporte requerido, 	conforme o Código de Trânsito de Brasileiro (CTB) e as 	Resoluções do Conselho Nacional de Trânsito (CONTRAN).</p>
<br/>
<div className="text-base font-bold text-sky-500"> Artigo 101</div>
<br/>
<p>Ao veículo ou combinação de veículos utilizado no transporte de carga indivisível, que não se enquadre nos limites de peso e dimensões estabelecidos pelo CONTRAN, poderá ser concedida, pela autoridade com circunscrição sobre a via, Autorização Especial de Trânsito - AET, com prazo certo, válida para cada viagem, atendidas as medidas de segurança consideradas necessárias.</p>
<p>§1º - A autorização será concedida mediante requerimento que especificará as características do veículo ou combinação de veículos e de carga, o percurso, a data e o horário do deslocamento inicial.</p>
<p>§2º - A autorização não exime o beneficiário da responsabilidade por eventuais danos que o veículo ou a combinação de veículos causar à via ou a terceiros.</p>
<p>§3º - Aos guindastes autopropelidos ou sobre caminhões poderá ser concedida, pela autoridade com circunscrição sobre a via, Autorização Especial de Trânsito - AET, com prazo de seis meses, atendidas as medidas de segurança consideradas necessárias. </p>
<br/>
<div className="text-base font-bold text-sky-500"> Legislação </div>
<br />
<p><a className="text-blue-800 hover:text-black"  href="https://infraestrutura.gov.br/resolucoes-contran.html" target="_blank">Resoluções do CONTRAN</a></p>
<p><a className="text-blue-800 hover:text-black"  href="http://200.187.9.65/docs/download/aet/portaria_135_2017.pdf" target="_blank">Portaria nº 135/2017 - BA-099</a></p>
<p><a className="text-blue-800 hover:text-black"  href="http://www.infraestrutura.ba.gov.br/arquivos/File/publicacoes/instrucoesdeservico/2022/inst_serv_2022.pdf" target="_blank">Instrução de Serviço - 003/2022</a></p>
<p><a className="text-blue-800 hover:text-black"  href="http://200.187.9.65/docs/download/aet/lei_14031_2018.pdf" target="_blank">Lei 14.031/2018 - Taxas SEINFRA/SIT</a></p>
<p><a className="text-blue-800 hover:text-black"  href="http://200.187.9.65/docs/download/aet/portaria_restritiva_142_2015.pdf" target="_blank">PORTARIA RESTRITIVA Nº 142/2015 - BA-130</a></p>
<p><a className="text-blue-800 hover:text-black"  href="http://200.187.9.65/docs/download/aet/portaria_restritiva_24_2019.pdf" target="_blank">PORTARIA RESTRITIVA Nº 024/2019 - BA-680</a></p>
<p><a className="text-blue-800 hover:text-black"  href="http://200.187.9.65/docs/download/aet/portaria_restritiva_25_2019.pdf" target="_blank">PORTARIA RESTRITIVA Nº 025/2019 - BR-242</a></p>
<p><a className="text-blue-800 hover:text-black"  href="http://200.187.9.65/docs/download/aet/portaria_restritiva_30_2019.pdf" target="_blank">PORTARIA RESTRITIVA Nº 030/2019 - BA-131</a></p>
<p><br/>
</p>
<br/>
<div className="text-base font-bold text-sky-500">Documentos 	necessários para obter Autorizações Especiais de Trânsito:</div>
<br/>

<div className="flex flex-row w-[800px]  px-4 bg-gray-300 hover:bg-gray-400 py-2 rounded-t-xl items-center   "> 
  <div className="mr-8"> Combinação para Transporte de Veículo - CTV e Combinações de <br/>Transporte de Veículos e Cargas Paletizadas - CTVP </div>
  <div><img src="http://www.infraestrutura.ba.gov.br/arquivos/Image/imagens/aetctv.png" class="fright" alt="" width="147" height="44" /></div>	  
</div>
<ul className="bg-gray-200 w-[800px] px-4 rounded-b-xl py-4">
    <li>- Cópia dos Certificados de Registro e Licenciamentos dos Veículos - CRLV<br/>
    (Cavalo + Semi Reboques);</li>
    <li>- Laudo Técnico e Projeto Técnico Originais;</li>
</ul>


<div className="flex flex-row w-[800px]  px-4 mt-2 bg-gray-300 hover:bg-gray-400 rounded-t-xl py-2 items-center  ">  
  <div className="mr-8">Guindastes</div>
  <div><img src="http://www.infraestrutura.ba.gov.br/arquivos/Image/imagens/aetguindaste.png" class="fright" alt="" width="147" height="44" /></div>	  
</div>
<ul className="bg-gray-200 w-[800px] px-4 rounded-b-xl py-4">
      <li>- Cópia dos Certificados de Registro e Licenciamentos dos Veículos - CRLV;<br/>
    </li>
    <li>- Ficha Técnica do Guindaste</li>
</ul>


<div className="flex flex-row w-[800px]  px-4 mt-2 bg-gray-300 hover:bg-gray-400 rounded-t-xl py-2 items-center">  
  <div className="mr-8">Cargas Indivisíveis</div>
  <div><img src="http://www.infraestrutura.ba.gov.br/arquivos/Image/imagens/aetdimensoesexcedentes.png" class="fright" alt="" width="147" height="44" /></div>	  
</div>
<ul className="bg-gray-200 w-[800px] px-4 rounded-b-xl py-4">
    <li>Cópia dos Certificados de Registro e Licenciamentos 			dos Veículos - CRLV<br/>
    (Cavalo + Semi Reboques);</li>
</ul>


<div className="flex flex-row w-[800px]  px-4 mt-2 bg-gray-300 hover:bg-gray-400 rounded-t-xl py-2 items-center">  
  <div className="mr-8">Combinação de Veículos de Carga - CVC </div>
  <div><img src="http://www.infraestrutura.ba.gov.br/arquivos/Image/imagens/aetcvc.png" class="fright" alt="" width="147" height="44" /></div>	  
</div>
<ul className="bg-gray-200 w-[800px] px-4 rounded-b-xl py-4">
      <li>- Cópia dos Certificados de Registro e Licenciamentos 			dos Veículos - CRLV<br/>
    (Cavalo + Semi Reboques);</li>
    <br/>
    <li>- Laudo Técnico e Projeto Técnico Originais;</li>
    <br/>
    <li>- Anotação de Responsabilidade Técnica - ART Original</li>
</ul>



<div className="flex flex-row w-[800px]  px-4 mt-2 bg-gray-300 hover:bg-gray-400 py-2 rounded-t-xl items-center" > 
  <div className="mr-8">Veículos Mistos e de Passeio</div>
  <div><img src="http://www.infraestrutura.ba.gov.br/arquivos/Image/imagens/aetmisto.png" class="fright" alt="" width="147" height="44" /></div>	  
</div>
<ul className="bg-gray-200 w-[800px] px-4 py-4 rounded-b-xl">
        <li>- Cópia dos Certificados de Registro e Licenciamentos 			dos Veículos - CRLV<br/>
    </li>

</ul>



<div className="flex flex-row w-[800px]  px-4 bg-gray-300 hover:bg-gray-400 py-2 mt-4 rounded-t-xl items-center"> 
Permissão de Tráfego BA-099   </div>
<div className="bg-gray-200 w-[800px] px-4 py-4 rounded-b-xl">
<ul>
    <li>- Cópia dos Certificados de Registro e Licenciamentos dos Veículos - CRLV<br/>
    (Cavalo + Semi Reboques);</li>
    <li>- Cópia Contrato Social da Empresa (Pessoa Jurídica) ou Comprovante de Residência e CPF (Pessoa Física);</li>
    <li>- Cópia Carta de Anuência da Concessionária - CLN;</li>
    <li>- Cópia Nota Fiscal e/ou Contrato de Prestação de Serviço</li>
</ul>
<p className="font-bold">Obs.: A Permissão de Tráfego BA 099 para Guindastes acima de 48,5 toneladas de PBT tem validade de 03 (três) meses.</p>
</div>

    <div className="bg-gray-200 w-[800px] px-4 py-4 mt-4 rounded-t-xl rounded-b-xl">
        <div className="text-base font-bold text-sky-500 ">Saiba mais </div>
          <p>As autorizações Especiais de Trânsito somente serão 	disponiblizadas após a análise de todos os documentos 	recebidos e pagamento realizado via boleto bancário.</p>
          <p>A documentação (Projeto Técnico + Laudo Técnico + Anotação de Responsabilidade Técnica - ART) ORIGINAIS deverá ser encaminhada para o endereço: </p>
          <p>Governo da Bahia - 4ª Avenida, nº445 - CAB - Centro Administrativo da Bahia - CEP 41.745-002 Salvador - Bahia</p>
          <p>Dúvidas entre em contato conosco através 	do telefone (71) 3115-2245/8576</p>
          <p>Horário de atendimento telefônico 9:00 hs às 12:00 hs e 14:00 hs à 17:00 hs</p>
          <p>E-mail: aet@infra.ba.gov.br</p>
        </div>
    </div>
</>

}


