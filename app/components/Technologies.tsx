export function Technologies() {
  const getBorderColor = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "reactjs":
        return "hover:border-blue-500";
      case "nodejs":
        return "hover:border-green-500";
      case "angularjs":
        return "hover:border-red-500";
      case "nestjs":
        return "hover:border-yellow-500";
      default:
        return "hover:border-gray-300";
    }
  };

  const techData = [
    {
      name: "ReactJs",
      url: "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-pmv-ads-2023-2-e3-proj-mov-t2-pizzapp",
      description:
        "I have ever built a web application using ReactJs and React Native in my university, is a mobile application for Pizza Delivery and you can see on my github.",
    },
    {
      name: "NodeJS",
      url: "https://github.com/iugorsette/task-login-backend",
      description:
        "I create and implement new features performing process automation, as well as working on troubleshooting nodejs applications, I am still working on it.",
    },
    {
      name: "AngularJS",
      url: "https://github.com/iugorsette/warehouse-frontend",
      description:
        "I built a web application using AngularJS, that's app for Warehouse management system (WMS) and you can see on my github.",
    },
    {
      name: "NestJs",
      url: "https://github.com/iugorsette/warehouse-backend",
      description:
        "I built a back-end web application using NestJs and MySQL, that's app for Warehouse management system (WMS) and you can see on my github.",
    },
  ];

  return (
    <>
      <p className="text-lg mb-8">
        Below you can see some of<span className="text-sky-600"> my projects </span> with the respective
        <span className="text-sky-600"> stacks </span> used.
      </p>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-2">
        {techData.map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            className={`group rounded-lg border border-gray-300 px-5 py-4 transition-colors ${getBorderColor(
              tech.name
            )} hover:bg-gray-100 hover:dark:bg-neutral-800/30`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {tech.name}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {tech.description}
            </p>
          </a>
        ))}
      </div>
    </>
  );
}
