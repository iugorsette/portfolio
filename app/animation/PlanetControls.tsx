import React from 'react';
import { ArrowUp } from '@phosphor-icons/react';

type PlanetControlsProps = {
  handleCreatePlanet: () => void;
  clean: () => void;
};

const PlanetControls: React.FC<PlanetControlsProps> = ({ handleCreatePlanet, clean }) => {
  return (
    <div className="absolute flex flex-row items-center gap-4">
      <a href="#top" className="neon-btn rounded">
        <ArrowUp className="arrow-up" size={18} />
      </a>
      <button
        className="neon-btn rounded"
        type="button"
        onClick={handleCreatePlanet}
      >
        Create a random planet
      </button>
      <button className="neon-btn rounded" type="button" onClick={clean}>
        Clean
      </button>
    </div>
  );
};

export default PlanetControls;
