import React from 'react';

type StarControlsProps = {
  stars: any;
  setStars: React.Dispatch<React.SetStateAction<any>>;
};

const StarControls: React.FC<StarControlsProps> = ({ stars, setStars }) => {
  return (
    <div className=" flex flex-col gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="flex flex-col">
        <label>Stars count</label>
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
        <label>Stars factor</label>
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
        <label>Stars radius</label>
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
  );
};

export default StarControls;
