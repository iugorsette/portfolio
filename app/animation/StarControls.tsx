import React from 'react'

type StarControlsProps = {
  stars: any
  setStars: React.Dispatch<React.SetStateAction<any>>
}

const StarControls: React.FC<StarControlsProps> = ({ stars, setStars }) => {
  const mobile = document.documentElement.clientWidth < 1024
  return (
    <div  className="bg-transparent dark:bg-transparent shadow-none rounded-none p-0 flex-row gap-4 justify-between items-center " >
      <div className="flex flex-col">
        <label>{mobile ? 'Stars' : 'Number of stars'}</label>
        <input
          type="range"
          min="1000"
          max="9000"
          value={stars.count}
          onChange={(e) =>
            setStars({ ...stars, count: parseInt(e.target.value) })
          }
        />
      </div>
      <div className="flex flex-col">
        <label>{mobile ? 'Speed' : 'Stars speed'}</label>
        <input
          type="range"
          min="1"
          max="10"
          value={stars.factor}
          onChange={(e) =>
            setStars({ ...stars, factor: parseInt(e.target.value) })
          }
        />
      </div>
      <div className="flex flex-col">
        <label>{mobile ? 'Saturation' : 'Stars saturation'}</label>
        <input
          type="range"
          min="100"
          max="500"
          value={stars.radius}
          onChange={(e) =>
            setStars({ ...stars, radius: parseInt(e.target.value) })
          }
        />
      </div>
    </div>
  )
}

export default StarControls
