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

  const techData = [
    {
      name: "Warehouse frontend",
      stack: "AngularJS",
      url: "https://github.com/iugorsette/warehouse-frontend",
      description:
        "I built a web application using AngularJS, that's app for Warehouse management system (WMS) and you can see on my github.",
    },
    {
      name: "Warehouse backend",
      stack: "NestJs",
      url: "https://github.com/iugorsette/warehouse-backend",
      description:
        "I built a back-end web application using NestJs and MySQL, that's app for Warehouse management system (WMS) and you can see on my github.",
    },
    {
      name: "React Gnome Calculator",
      stack: "ReactJs",
      url: "https://github.com/iugorsette/react-calculator",
      description:
        "For study purposes, I replicated the gnome calculator with some features using react and you can see on my github",
    },
    {
      name: "Pizzapp",
      stack: "React Native",
      url: "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-pmv-ads-2023-2-e3-proj-mov-t2-pizzapp",
      description:
        "I have ever built a web application using React Native in my university, is a mobile application for Pizza Delivery and you can see on my github.",
    },
    {
      name: "Task app frontend",
      stack: "ReactJs",
      url: "https://github.com/iugorsette/task-login-frontend",
      description:
        "I built a web application using ReactJs, that's app for Task management system and you can see on my github.",
    },
    {
      name: "Task app backend",
      stack: "NodeJS",
      url: "https://github.com/iugorsette/task-login-backend",
      description:
        "I create and implement new features performing process automation, as well as working on troubleshooting nodejs applications, I am still working on it.",
    },
    {
      name: "Rocypt",
      stack: ".NET C#",
      url: "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t6-rocypt",
      description:
        "I contributed to a password manager API project developed in .NET C#. Throughout the project, we employed agile methodologies to enhance collaboration and flexibility in our development process.",
    },
  ];

  return (
    <div className="mt-5 max-w-5xl w-full font-mono text-sm lg:flex flex-col">
      <p className="text-lg mb-8">
        In my current position, I am involved in activities that provide me with
        the opportunity to improve my knowledge of{" "}
        <span className="text-yellow-600">Python</span> and
        <span className="text-yellow-600"> Vanilla JS</span>. Perform
        maintenance tasks and develop RPA solutions. Furthermore, I had the
        opportunity to gain experience working with tools such as
        <span className="text-sky-600"> Docker</span>,
        <span className="text-sky-600"> Puppeteer</span>,
        <span className="text-sky-600"> Nutjs</span>,
        <span className="text-sky-600"> GitHub</span>,
        <span className="text-sky-600"> GraphQL</span>, and many others.
      </p>
      <p className="text-lg mb-8">
        Below you can see some of
        <span className="text-local-purple-600"> my personal projects </span>.
      </p>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-2">
        {techData.map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            className={`group rounded-lg border border-gray-300 px-5 py-4 transition-colors ${getBorderColor(
              tech.stack
            )} hover:bg-gray-100 hover:dark:bg-neutral-800/30`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {tech.name}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {tech.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
