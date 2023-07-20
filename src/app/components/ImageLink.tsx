import Image from "next/image";

interface ImageLinkProps {
  link: string;
  image: string;
}

export function ImageLink(props: ImageLinkProps) {
  return (
    <a
      target="_blank"
      href={props.link}
      className="hover:shadow-sm hover:bg-zinc-700 rounded-full w-8 "
    >
      <Image alt="github" src={props.image} />
    </a>
  );
}
