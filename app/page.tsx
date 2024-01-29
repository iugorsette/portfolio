import { AnimateLogo } from "./animation/AnimationLogo";
import { Header } from "./components/Header";
import { Technologies } from "./components/Technologies";
import { Icon } from "./phosphor/Icon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-local-purple-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-local-purple-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#371A45] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      <AnimateLogo />
      <Technologies />
    </main>
  );
}
