import '../styles/GridCell.css'; // Import the CSS file

const RobotGrid = ({ position }) => {
  // Create an array to represent the grid cells
  const gridCells = [];

  // Loop to create the 5x5 grid
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      // Check if the current cell matches the robot's position
      const isRobotHere = position.x === col && position.y === row;
      const cellClass = isRobotHere ? 'grid-cell robot' : 'grid-cell';

      // Push the grid cell div to the gridCells array
      gridCells.push(
        <div key={`${col}-${row}`} className={cellClass}>
          {/* Show the robot direction if the robot is on this cell */}
          {isRobotHere ? position.direction[0] : ''}
        </div>
      );
    }
  }

  return (
    <div className="grid">
      {gridCells}
    </div>
  );
};

export default RobotGrid;
