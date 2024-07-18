import { SocialMedias } from './SocialMedia'

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed -bottom-2 left-0 flex md:h-2 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none electrolize-regular ">
        <h1 
        >Iugor Sette</h1>
      </div>
      <SocialMedias />
    </div>
  )
}
