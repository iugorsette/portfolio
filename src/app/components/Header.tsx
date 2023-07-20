import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import github from "../../../public/githubLogo.svg";
import instagram from "../../../public/instagramLogo.svg";
import linkedin from "../../../public/linkedinLogo.svg";
import whatsapp from "../../../public/whatsappLogo.svg";
import TypingEffect from "../services/TypingEffect";
import foto from "../../../public/picture/foto-github.png";
import { ImageLink } from "./ImageLink";

export function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const size = isMobile ? 96 : 248;
  const texto = isMobile
    ? TypingEffect("Oi,*eu sou o Sette")
    : TypingEffect("Oi, eu sou o Sette*Seja bem-vindo ao meu portfólio"); 

  return (
    <div className=" flex justify-between p-2">
      <div className="rounded-full border-2 border-green-local-500 bg-green-local-500 ">
        <Image
          width={size}
          src={foto}
          alt=""
          className="rounded-full bg-green-local-500"
        />
      </div>

      <div className=" text-green-local-500 flex justify-center items-center ">
        {texto}
      </div>

      <div className=" flex flex-row items-start justify-items-start ">
        <ImageLink link="https://github.com/iugorsette" image={github} />
        <ImageLink link="https://instagram.com/iugorsette" image={instagram} />
        <ImageLink link="https://www.linkedin.com/in/iugorsette/" image={linkedin} />
        <ImageLink link="https://wa.me/5531988071497" image={whatsapp} />
      </div>
    </div>
  );
}
