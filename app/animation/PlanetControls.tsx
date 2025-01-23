import React from 'react'
import { ArrowUp, Broom } from '@phosphor-icons/react'

type PlanetControlsProps = {
  handleCreatePlanet: () => void
  clean: () => void
}

const PlanetControls: React.FC<PlanetControlsProps> = ({
  handleCreatePlanet,
  clean,
}) => {
  const mobile = document.documentElement.clientWidth < 1024
  const message = mobile ? 'Criar' : 'Criar planeta aleatório'
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
        {message}
      </button>
      <button className="neon-btn rounded" type="button" onClick={clean}>
        {mobile? <Broom className="animate-pulse" size={18} /> : "Resetar"} 
      </button>
    </div>
  )
}

export default PlanetControls
