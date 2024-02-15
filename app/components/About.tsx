export function About() {
  const downloadcv = () => {
    const pdfUrl = "/Profile.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Profile.pdf";
    link.click();
  };
  return (
    <div className="z-10 mt-20 max-w-5xl w-full font-mono text-sm lg:flex flex-col">
      <p className="text-lg">
        <span className=" text-xl">
          Hi, my name is <span className="text-sky-600">Sette</span>.
        </span>
        <br /> I am currently studying{" "}
        <a
          className="text-local-purple-600 hover:text-local-purple-800"
          href="https://www.pucminas.br/PucVirtual/Graduacao/Paginas/Analise-e-Desenvolvimento-de-Sistemas-Tecnologo.aspx"
          target="_blank"
        >
          Systems Analysis and Development
        </a>{" "}
        and working with{" "}
        <span className="text-local-purple-600">
          Robotic Process Automation (RPA)
        </span>
      </p>

      <p className="text-lg">
        This portfolio showcases my{" "}
        <span className="text-sky-600">web development</span> skills and
        knowledge.
      </p>
      <p className="text-lg mb-8">
        As part of my current role, I work with
        <span className="text-yellow-600"> Python</span> and
        <span className="text-yellow-600"> Vanilla JS</span>, and develop RPA
        solutions. I also perform maintenance tasks and have gained hands-on
        experience working with various tools such as
        <span className="text-sky-600"> Docker</span>,
        <span className="text-sky-600"> Puppeteer</span>,
        <span className="text-sky-600"> Nutjs</span>,
        <span className="text-sky-600"> GitHub</span>,
        <span className="text-sky-600"> GraphQL</span>, and more.
      </p>
      
      <div className="w-full flex justify-center">
        <button
          className="neon-btn bg-local-purple-600 text-white font-bold py-2 px-4 rounded mt-8 w-32 self-center"
          type="button"
          onClick={downloadcv}
        >
          Download CV
        </button>
      </div>
    </div>
  );
}
