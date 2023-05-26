import Image from "next/image";
import CarouselComponent from "./Corousel";

import picture from "../../../public/picture/sette.png";

export function Footer() {
  return (
    <div className="flex h-auto justify-center items-center bg-gradient-to-b from-zinc-800 from-50% via-zinc-800 to-green-local-500 relative py-10">
      <CarouselComponent />
      <div className="absolute bottom-0 right-0">
        <Image src={picture} width={144} />
      </div>
    </div>
  );
}
