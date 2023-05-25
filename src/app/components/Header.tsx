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
        className="rounded-full h-60 w-60 border-4 bg-green-local-500"
      />
      <div className=" text-green-local-500 flex justify-center items-center ">
        {texto}
      </div>
      <div className=" flex flex-row justify-items-start items-start">
        <a
          target="_blank"
          href="https://github.com/iugorsette"
          className="hover:shadow-sm hover:bg-zinc-700 rounded-full "
        >
          <Image width={24} alt="github" src={github} />
        </a>
        <a
          target="_blank"
          href="https://instagram.com/iugorsette"
          className="hover:shadow-sm hover:bg-zinc-700 rounded-full "
        >
          <Image width={24} alt="instagram" src={instagram} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/iugor-sette-66a0a0185/"
          className="hover:shadow-sm hover:bg-zinc-700 rounded-full "
        >
          <Image width={24} alt="linkedin" src={linkedin} />
        </a>
        <a
          target="_blank"
          href="https://wa.me/5531988071497"
          className="hover:shadow-sm hover:bg-zinc-700 rounded-full "
        >
          <Image width={24} alt="whatsapp" src={whatsapp} />
        </a>
      </div>
    </div>
  );
}
