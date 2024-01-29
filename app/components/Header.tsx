import { Icon } from "../phosphor/Icon";

export function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="hover:bg-black-900 shadow-lg hover:shadow-local-purple-500/50 delay-150">
            Iugor Sette
          </h1>
        </a>
      </div>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none gap-2">
        <a
          href="https://github.com/iugorsette"
          target="_blank"
          className="hover:bg-local-purple-900 shadow-lg hover:shadow-local-purple-900 "
        >
          <Icon name="github" />
        </a>
        <Icon name="linkedin" />
        <Icon name="instagram" />
      </div>
    </div>
  );
}
