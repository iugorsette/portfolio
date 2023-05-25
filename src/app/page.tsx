import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-zinc-800 ">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
