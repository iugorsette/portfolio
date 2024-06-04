import Image from "next/image";
import { techData } from "../db/tech";
import { getImage } from "../provider/image";

export function Technologies() {
  const getBorderColor = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "reactjs":
        return "hover:border-blue-500";
      case "react native":
        return "hover:border-sky-500";
      case "nodejs":
        return "hover:border-green-500";
      case "angularjs":
        return "hover:border-red-500";
      case "nestjs":
        return "hover:border-yellow-500";
      default:
        return "hover:border-local-purple-600";
    }
  };

  

  return (
    <div className="mt-5 max-w-5xl w-full font-mono text-sm lg:flex flex-col">
      <p className="text-lg mb-8">
        You can find some of
        <span className="text-local-purple-600"> my personal projects </span>
        below.
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
                width={150}
                height={150}
                className="rounded-lg"
              />
           
            <div>
              <h2 className={`mb-3 text-2xl font-semibold`}> 
                {tech.name}{" "}
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
      </div>
    </div>
  );
}
