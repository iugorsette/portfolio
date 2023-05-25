import Image from "next/image";
import github from "../../../public/githubLogo.svg";
import instagram from "../../../public/instagramLogo.svg";
import linkedin from "../../../public/linkedinLogo.svg";
import whatsapp from "../../../public/whatsappLogo.svg";
import TypingEffect from "../services/TypingEffect";

export function Header() {
  const texto = TypingEffect("Oi, eu sou o Sette ");
  return (
    <div className=" flex justify-between p-2">
      <img
        src="https://github.com/iugorsette.png"
        alt=""
        className="rounded-full h-32 w-32 border-4 bg-green-local-500"
      />
      <h1 className=" text-green-local-500">{texto}</h1>
      <div className=" flex flex-row justify-items-start items-start">
        <a target="_blank" href="http://github.com/iugorsette">
          <Image width={24} alt="github" src={github} />
        </a>
        <a target="_blank" href="http://instagram.com/iugorsette">
          <Image width={24} alt="instagram" src={instagram} />
        </a>
        <a target="_blank" href="http://linkedin.com/iugorsette">
          <Image width={24} alt="linkedin" src={linkedin} />
        </a>
        <a target="_blank" href="http://whatsapp.com/iugorsette">
          <Image width={24} alt="whatsapp" src={whatsapp} />
        </a>
      </div>
    </div>
  );
}
