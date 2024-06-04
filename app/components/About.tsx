export function About() {
  const downloadcv = () => {
    const pdfUrl = '/Profile.pdf'

    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'Profile.pdf'
    link.click()
  }
  return (
    <div className="mt-20 max-w-5xl w-full font-mono text-sm lg:flex flex-col ">
      <h2
        className="text-3xl font-bold  pb-8 dark:text-white text-black electrolize-regular "
        data-aos="fade-up"
      >
        Who am I
      </h2>
      <p className="text-lg">
        <span className=" text-xl">
          Hi, my name is <span className="text-sky-600 ">Sette</span>.
        </span>
        <br /> I am currently studying{' '}
        <a
          className="text-local-purple-600 hover:text-local-purple-800"
          href="https://www.pucminas.br/PucVirtual/Graduacao/Paginas/Analise-e-Desenvolvimento-de-Sistemas-Tecnologo.aspx"
          target="_blank"
        >
          Systems Analysis and Development
        </a>{' '}
        and working with{' '}
        <span className="text-local-purple-600">
          Robotic Process Automation (RPA)
        </span>
      </p>

      <p className="text-lg">
        This portfolio showcases my{' '}
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
      <p className="text-lg">
        My true passion lies in
        <span className="text-sky-600"> frontend development</span>, where
        I&apos;ve been dedicating my time to personal projects using the{' '}
        <span className="text-blue-600"> React</span> and{' '}
        <span className="text-red-600"> Angular</span> frameworks. Through these
        experiences, I&apos;ve been able to enhance my skills in creating
        engaging and functional user interfaces, applying the latest concepts
        and best practices with{' '}
        <span className="text-local-purple-600"> UI</span>/
        <span className="text-local-purple-600">UX</span> design.
      </p>

      <div className="w-full flex justify-center">
        <button
          className="neon-btn bg-local-purple-600 text-white font-bold py-2 px-4 rounded mt-8 w-32 self-center "
          type="button"
          onClick={downloadcv}
        >
          Download CV
        </button>
      </div>
    </div>
  )
}
