export function About() {
  const downloadcv = () => {
    const pdfUrl = "/Profile.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Profile.pdf";
    link.click();
  };
  return (
    <div className="flex flex-col p-24 gap-4">
      <p className=" text-lg">
        <span className=" text-xl">
          Hello, I&apos;m <span className="text-sky-600">Sette</span>.
        </span>
        <br /> I&apos;m currently studying{" "}
        <a
          className="text-local-purple-600 hover:text-local-purple-800"
          href="https://www.pucminas.br/PucVirtual/Graduacao/Paginas/Analise-e-Desenvolvimento-de-Sistemas-Tecnologo.aspx"
          target="_blank"
        >
          Systems Analysis and Development (ADS)
        </a>{" "}
        and working with{" "}
        <span className="text-local-purple-600">
          Robotic Process Automation (RPA)
        </span>
      </p>

      <p className="text-lg" >This portfolio is a way to demonstrate my knowledge in <span className="text-sky-600">web development</span>.</p>
      <button
        className="neon-btn bg-local-purple-600 text-white font-bold py-2 px-4 rounded mt-8 w-32 self-center"
        type="button"
        onClick={downloadcv}
      >
        Download CV
      </button>
    </div>
  );
}
