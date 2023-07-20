import Image, { StaticImageData } from "next/image";

interface LogoImageComponentProps {
  foto: StaticImageData;
  size: number;
}


export function LogoImageComponent(props:LogoImageComponentProps) {
    return (
      <div className="relative rounded-full overflow-hidden border-2 border-green-local-500 group">
        <Image
          width={props.size}
          src={props.foto}
          alt=""
          className="rounded-full bg-green-local-500 group-hover:bg-green-local-300 transition-all duration-500 ease-in-out"
        />
        </div>
    );
  }
  