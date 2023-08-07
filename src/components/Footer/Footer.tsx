import Image from "next/image";

import ibama_logo from "public/ibama_logo.png";
import petrobras_logo from "public/petrobras_logo.png";
import ipead_nova_logo from "public/logo_ipead_nova.png";
import uenf_logo from "public/uenf.png";

export function Footer() {
  return (
    <footer className="flex gap-8 items-center justify-center px-10 py-6 bg-white border border-[#E7E7E7]">
      <div className="flex justify-center gap-8">
        <Image src={ibama_logo} width={46} alt="" />
        <Image src={uenf_logo} width={62} alt="" />
        <Image src={petrobras_logo} width={142} alt="" />
        <Image src={ipead_nova_logo} width={186} alt="" />
      </div>
      <p className="w-[405px] text-xs text-[#0064C8]">
        A realização do Projeto Pescarte é uma medida de mitigação exigida pelo
        licenciamento ambiental federal, conduzido pelo IBAMA.
      </p>
    </footer>
  );
}