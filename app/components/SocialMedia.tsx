import { Icon } from "../phosphor/Icon";

export function SocialMedias(){
    return (
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
    )
}