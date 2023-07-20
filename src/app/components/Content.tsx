export function Content() {
  const StyledSpan = "text-green-local-500";
  return (
    <div className="flex justify-between items-center align-middle p-8">
      <p className="text-zinc-50 text-2xl ">
        Olá, sou Sette. Atualmente, estou estudando{" "}
        <span className="text-green-local-500">
          Análise e Desenvolvimento de Sistemas
        </span>
        (ADS) e trabalho com RPA (Automação de Processos Robóticos). Tenho
        conhecimento em várias tecnologias, incluindo
        <span className={StyledSpan}> React</span>,
        <span className={StyledSpan}> Node.js</span>,
        <span className={StyledSpan}> MongoDB</span>,
        <span className={StyledSpan}> Docker</span>,
        <span className={StyledSpan}> MySQL</span>,
        <span className={StyledSpan}> HTML</span>,
        <span className={StyledSpan}> CSS</span> e
        <span className={StyledSpan}> TypeScript</span>. Através dessas
        habilidades, sou capaz de criar aplicações web robustas e interativas,
        utilizando as melhores práticas e ferramentas disponíveis. Estou
        constantemente buscando aprimorar meus conhecimentos e acompanhar as
        últimas tendências na área de desenvolvimento de software. Estou animado
        com as possibilidades que essas tecnologias oferecem e estou
        comprometido em fornecer soluções eficientes e inovadoras para os
        desafios que enfrento.
      </p>
    </div>
  );
}
