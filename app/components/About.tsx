import { Astronaut } from '../animation/Astronaut'
import DownloadButton from '../animation/DownloadButton'

export function About() {
  const minhaIdade = new Date().getFullYear() - 1997
  const tempoDeExperiencia = new Date().getFullYear() - 2022
  return (
    <div className="mt-20 max-w-5xl w-full font-mono text-sm lg:flex flex-col items-center">
      <h2
        className="text-3xl font-bold pb-8 dark:text-white text-black electrolize-regular"
        data-aos="fade-up"
      >
        Sobre mim
      </h2>
      <div className="flex flex-col md:items-center lg:flex-row lg:items-start w-full">
        <div className="md:w-full lg:w-3/4">
          <p className="text-lg">
              Eu sou o <span className="text-sky-600">Sette</span>, sô mineiro, crossfiteiro, gamer, creio em <span
                className="text-sky-600 text-xl "
              >Deus</span> e tenho
              {' '}{minhaIdade} anos. Sou formado em{' '}
            <a
              className="text-local-purple-600 hover:text-local-purple-800"
              href="https://www.pucminas.br/PucVirtual/Graduacao/Paginas/Analise-e-Desenvolvimento-de-Sistemas-Tecnologo.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Análise e Desenvolvimento de Sistemas
            </a>{' '}
            e trabalho como{' '}
            <span className="text-local-purple-600">
              Desenvolvedor de Software
            </span>{' '}
            com foco em Web.
            <br />
            Minha jornada na tecnologia começou em 2018, quando iniciei meus
            estudos no curso de Engenharia de Computação. Nesse período,
            desenvolvi uma base sólida em hardware e cheguei a montar meu
            próprio PC, além de criar alguns projetos com <span className='text-sky-800'>Arduino</span>. Com a
            pandemia, em 2020, decidi migrar para a área de desenvolvimento de
            sistemas, aprendendo mais sobre programação e, eventualmente,
            cursando ADS. Desde então, venho
            acumulando mais de {tempoDeExperiencia} anos de experiência como desenvolvedor, sempre
            buscando aprimorar minhas habilidades e explorar novas tecnologias.
          </p>
          <p className="text-lg">
            O objetivo deste portfólio é falar sobre mim e mostrar minhas
            habilidades e conhecimentos em
            <span className="text-sky-600"> desenvolvimento web</span>.
          </p>
          <p className="text-lg mb-8">
            Atualmente trabalho como desenvolvedor de software na{' '}
            <a
              href="https://www.instagram.com/smartleiloes/?hl=pt-br"
              target="_blank"
              className="text-orange-600"
            >
              {' '}
              SmartLeiloes
            </a>
            , trabalho com as stacks{' '}
            <span className="text-red-600">Angular</span> e
            <span className="text-blue-600"> NestJS</span>, focado em entregar
            softwares de alta qualidade e valor para o usuário. Estou
            continuamente expandindo minhas habilidades e crescendo em um campo
            que é incrível e cheio de oportunidades interessantes!
          </p>
        </div>
        <div className="lg:w-1/4 flex justify-center lg:justify-end">
          <Astronaut />
        </div>
      </div>
      <DownloadButton />
    </div>
  )
}
