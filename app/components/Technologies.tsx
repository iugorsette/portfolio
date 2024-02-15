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
        "I developed a web application using AngularJS, that is the app for Warehouse management system (WMS), and you can see it on my GitHub.",
    },
    {
      name: "Warehouse backend",
      stack: "NestJs",
      url: "https://github.com/iugorsette/warehouse-backend",
      description:
        "I developed a back-end web application using NestJs and MySQL, that's an app for Warehouse management system (WMS), and you can see it on my GitHub.",
    },
    {
      name: "React Gnome Calculator",
      stack: "ReactJs",
      url: "https://github.com/iugorsette/react-calculator",
      description:
        "For academic purposes, I replicated the gnome calculator with some features using react, and you can see it on my GitHub.",
    },
    {
      name: "Pizzapp",
      stack: "React Native",
      url: "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-pmv-ads-2023-2-e3-proj-mov-t2-pizzapp",
      description:
        "I created an app using React Native for school purposes. It is a mobile app for Pizza delivery, and you can find it on my GitHub.",
    },
    {
      name: "Task app frontend",
      stack: "ReactJs",
      url: "https://github.com/iugorsette/task-login-frontend",
      description:
        "I developed a web application using ReactJs to be used as a Task management system, as you can see on my GitHub.",
    },
    {
      name: "Task app backend",
      stack: "NodeJS",
      url: "https://github.com/iugorsette/task-login-backend",
      description:
        "I created and improved a backend API to manage tasks and serve to the frontend, as you can see on my GitHub.",
    },
    {
      name: "Rocypt",
      stack: ".NET C#",
      url: "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t6-rocypt",
      description:
        "I contributed to a password manager API project developed in .NET C#. We employed agile methodologies throughout the project to enhance collaboration and flexibility in our development process.",
    },
  ];

  return (
    <div className="mt-5 max-w-5xl w-full font-mono text-sm lg:flex flex-col">
      <p className="text-lg mb-8">
        You can find some of
        <span className="text-local-purple-600"> my personal projects </span>
        below.
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
