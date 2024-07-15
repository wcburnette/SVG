Logo Generator
A command-line application for generating simple logos for projects without needing a graphic designer.

Features
Text Input: Enter up to three characters for the logo text.
Text Color: Choose a color for the text using color keywords or hexadecimal values.
Shape Selection: Select from circle, triangle, or square shapes for the logo background.
Shape Color: Specify a color for the chosen shape using color keywords or hexadecimal values.
SVG Output: Generates an SVG file named logo.svg based on user input.
Preview: Opens the generated logo.svg file in a browser to view a 300x200 pixel image matching the specified criteria.

Usage
1. Clone the Repository:
git clone <https://github.com/wcburnette/SVG.git>
cd logo-generator
2. Install Dependencies:
npm install
3. Run the Application:
node index.js
4. Follow the Prompts:
Enter up to three characters for the logo text.
Choose a text color using color keywords or hexadecimal values.
Select a shape (circle, triangle, or square).
Specify a color for the shape using color keywords or hexadecimal values.
5. View the Generated Logo:
Once all prompts are completed, an SVG file named logo.svg will be created in the examples directory.
The command line will display "Generated logo.svg".
Open logo.svg in a web browser to view the generated logo.

Example
Input:
Text: "ABC"
Text Color: "#0000FF" (Blue)
Shape: Circle
Shape Color: "#FFA500" (Orange)

Output:
Generates logo.svg with a blue text "ABC" centered inside an orange circle.

Screen Record: https://drive.google.com/file/d/1mGTv8TRGWilVNU2Rnt-hAZnwPJqYHFI6/view?usp=sharing