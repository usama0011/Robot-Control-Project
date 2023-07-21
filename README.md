Robot Control Project
This project demonstrates a simple environment for controlling a robot using predefined scripts. The frontend allows users to input a script, and the robot's position and direction are updated based on the script execution. The project is built using Java + Spring for the backend and React for the frontend.

Backend (Java + Spring)
The backend is responsible for processing the script and updating the robot's position. It provides an endpoint that accepts the script as a single chunk using the POST method.

Setup and Run (npm run dev)
Clone the repository to your local machine.
Navigate to the backend folder.
Build the backend using your preferred Java build tool (e.g., Maven).
Run the backend application.
Note: Since the backend functionality is simulated in the frontend with a mock function, you can proceed with just running the frontend for demonstration purposes.

Frontend (React)
The frontend is responsible for rendering the user interface and communicating with the backend to update the robot's position.

Setup and Run (npm run dev)
Navigate to the frontend folder.
Install the required dependencies using npm install.
Run the frontend application using npm start.
How to Use
The initial grid position is 0,0, located in the top-left corner.
The grid is limited to a 5x5 size for aesthetic reasons.
Enter your robot movement script in the provided textarea (e.g., "POSITION 1 3 EAST\nFORWARD 3\nWAIT\nTURNAROUND\nFORWARD 1\nRIGHT\nFORWARD 2").
Click the "Execute Script" button to submit the script.
The robot's position and direction will be updated based on the script execution.
The robot will move forward, turn, or wait according to the commands in the script.
Robot Movement Logic
The robot's movement logic is implemented in the frontend (in App.js). The frontend simulates the backend communication and robot movement using a mock function. The script is processed, and the robot's position is updated accordingly.

UI Styling
The UI is styled using CSS to create a 5x5 grid, with grid cells representing the robot's movement space. The robot's position is visually updated on the grid using different colors and styles.

Testing
A test case for the ScriptForm component has been provided. The test checks if the form submission works correctly by validating that the correct script is submitted.

Additional Improvements (if time permits)
Implement a real backend: Replace the mock function with a real backend server to handle script execution and robot movement.
Error handling: Implement error handling for invalid scripts or other potential issues.
Improve UI/UX: Enhance the UI design and add animations to make the application more engaging.
Comprehensive Testing: Write more test cases to achieve full test coverage.
Limit Grid Bounds in Backend: Optionally, restrict the robot's movement to within the 5x5 grid in the backend as well.