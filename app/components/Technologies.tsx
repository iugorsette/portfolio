import Image from 'next/image'
import { techData } from '../db/tech'
import { getImage } from '../provider/image'

export function Technologies() {
  const mobile = document.documentElement.clientWidth < 1024
  const getBorderColor = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'reactjs':
        return 'hover:border-blue-500'
      case 'react native':
        return 'hover:border-sky-500'
      case 'nodejs':
        return 'hover:border-green-500'
      case 'angularjs':
        return 'hover:border-red-500'
      case 'nestjs':
        return 'hover:border-yellow-500'
      default:
        return 'hover:border-local-purple-600'
    }
  }

  return (
    <div className="mt-5 max-w-5xl w-full font-mono text-sm lg:flex flex-col">
      <p className="text-lg mb-8">
        Você pode encontrar alguns dos
        <span className="text-local-purple-600"> meus projetos pessoais </span>
        abaixo.
      </p>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left gap-2">
        {techData.map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            className={`group rounded-lg border border-gray-300 px-5 py-4 transition-colors ${getBorderColor(
              tech.stack
            )} hover:bg-gray-100 hover:dark:bg-neutral-800/30 flex flex-row items-center gap-4 `}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={getImage(tech.stack)}
              alt={tech.name}
              width={mobile ? 50 : 150}
              height={mobile ? 50 : 150}
              className="rounded-lg"
            />

            <div>
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {tech.name}{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  &gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {tech.description}
              </p>
            </div>
          </a>
        ))}

        <div
          className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:bg-gray-100 hover:dark:bg-neutral-800/30 flex flex-col items-center gap-4 
          "
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Carrinho arduino{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &gt;
            </span>
          </h2>
          <iframe
            width="410"
            height="240"
            src="https://www.youtube.com/embed/4hP7lCXj_sY"
            title="Projeto Carrinho seguidor de linha"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <div>
            <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
              Projeto de um carrinho seguidor de linha feito com Arduino ao
              desenvolver pude entender na prática o funcionamento de um robô
              largamente utilizado no ambiente industria
            </p>
          </div>
        </div>
        <div
          className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:bg-gray-100 hover:dark:bg-neutral-800/30 flex flex-col items-center gap-4 
          "
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            PizzApp{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &gt;
            </span>
          </h2>
          <iframe
            width="410"
            height="240"
            src="https://www.youtube.com/embed/vbdFtLaeRDo"
            title="Apresentação do app PizzApp"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>

          <div>
            <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
              Em um projeto da faculdade desenvolvi um aplicativo de delivery de
              pizza, onde o usuário pode escolher o sabor da pizza, adicionar ao
              carrinho e finalizar a compra.{' '}
              <a
                className="text-blue-500"
                target="_blank"
                href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-pmv-ads-2023-2-e3-proj-mov-t2-pizzapp"
              >
                Clique aqui para conferir o projeto no github
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
