import { useState } from 'react';
import './App.css';
import ScriptForm from './components/ScriptForm';
import RobotGrid from './components/RobotGrid';

const App = () => {
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0, direction: 'EAST' });

  const executeScript = (script) => {
    // Simulate the backend communication and robot movement
    return new Promise((resolve) => {
      // Simulate the delay of backend processing
      setTimeout(() => {
        // Process the script and update the robot position
        const commands = script.trim().split('\n');
        let position = { ...robotPosition };

        for (const command of commands) {
          const [instruction, ...args] = command.split(' ');

          if (instruction === 'POSITION') {
            const [x, y, direction] = args;
            position = { x: parseInt(x), y: parseInt(y), direction };
          } else if (instruction === 'FORWARD') {
            const steps = parseInt(args[0]);
            switch (position.direction) {
              case 'EAST':
                position.x += steps;
                break;
              case 'WEST':
                position.x -= steps;
                break;
              case 'NORTH':
                position.y -= steps;
                break;
              case 'SOUTH':
                position.y += steps;
                break;
              default:
                break;
            }
          } else if (instruction === 'RIGHT') {
            const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
            const currentIndex = directions.indexOf(position.direction);
            const nextIndex = (currentIndex + 1) % directions.length;
            position.direction = directions[nextIndex];
          } else if (instruction === 'TURNAROUND') {
            const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
            const currentIndex = directions.indexOf(position.direction);
            const oppositeIndex = (currentIndex + 2) % directions.length;
            position.direction = directions[oppositeIndex];
          } else if (instruction === 'WAIT') {
            // Do nothing
          }
        }

        // Update the robot position in the state
        setRobotPosition(position);
        resolve(position);
      }, 1000); // Simulated 1-second delay
    });
  };

  const handleScriptSubmit = (script) => {
    executeScript(script).then((updatedPosition) => {
      console.log('Robot position updated:', updatedPosition);
      // You can add any additional handling here if needed
    });
  };

  return (
    <div className="App">
      <h1>Robot Control</h1>
      <ScriptForm onSubmit={handleScriptSubmit} />
      <RobotGrid position={robotPosition} />
    </div>
  );
};

export default App;
