import Image, { StaticImageData } from "next/image";

interface LogoImageComponentProps {
  foto: StaticImageData;
  size: number;
}

export function LogoImageComponent(props: LogoImageComponentProps) {
  return (
    <div className="rounded-full border-2 border-green-local-500 bg-green-local-500 ">
      <Image
        width={props.size}
        src={props.foto}
        alt=""
        className="rounded-full bg-green-local-500"
      />
    </div>
  );
}
