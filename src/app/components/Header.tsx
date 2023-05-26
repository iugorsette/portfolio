import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import github from "../../../public/githubLogo.svg";
import instagram from "../../../public/instagramLogo.svg";
import linkedin from "../../../public/linkedinLogo.svg";
import whatsapp from "../../../public/whatsappLogo.svg";
import TypingEffect from "../services/TypingEffect";

export function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const size = isMobile ? 30 : 60;
  const texto = isMobile
    ? TypingEffect("Oi,*eu sou o Sette") // Texto para dispositivos móveis
    : TypingEffect("Oi, eu sou o Sette*Seja bem-vindo ao meu portfólio"); // Texto padrão

  return (
    <div className=" flex justify-between p-2">
      <div className="rounded-full border-2 border-green-local-500 bg-green-local-500 h-${size} w-${size} ">
        <Image
          src="https://github.com/iugorsette.png"
          alt=""
          className={`rounded-full h-${size} w-${size} bg-green-local-500`}
        />
      </div>

      <div className=" text-green-local-500 flex justify-center items-center ">
        {texto}
      </div>

      <div className=" flex flex-row items-start justify-items-start ">
        <a
          target="_blank"
          href="https://github.com/iugorsette"
          className="hover:shadow-sm hover:bg-zinc-700 rounded-full w-8 "
        >
          <Image alt="github" src={github} />
        </a>
        <a
          target="_blank"
          href="https://instagram.com/iugorsette"
          className="hover:shadow-sm hover:bg-zinc-700 rounded-full w-8"
        >
          <Image alt="instagram" src={instagram} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/iugor-sette-66a0a0185/"
          className="hover:shadow-sm hover:bg-zinc-700 rounded-full w-8"
        >
          <Image alt="linkedin" src={linkedin} />
        </a>
        <a
          target="_blank"
          href="https://wa.me/5531988071497"
          className="hover:shadow-sm hover:bg-zinc-700 rounded-full w-8"
        >
          <Image alt="whatsapp" src={whatsapp} />
        </a>
      </div>
    </div>
  );
}
