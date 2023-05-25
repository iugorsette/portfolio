import Image from "next/image";
import CarouselComponent from "./Corousel";

import picture from "../../../public/picture/sette.png";

export function Footer() {
  return (
    <div className="flex ">
      <div className="flex h-auto justify-center items-center bg-gradient-to-b from-zinc-800 to-green-local-500 relative">
        <CarouselComponent />
        <div>
          <Image src={picture} width={144} />
        </div>
      </div>
    </div>
  );
}
