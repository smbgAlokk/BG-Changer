# Background Changer

This is a simple and interactive Background Color Changer application built with **ReactJS** using **Vite**. The app allows users to dynamically change the background color of the page with a set of predefined colors. The transition between colors is smooth, offering a clean and modern design.

## Features

- **Responsive Design**: The layout adjusts automatically for different screen sizes.
- **Smooth Transitions**: Color changes happen with a smooth transition for a visually appealing experience.
- **Predefined Colors**: A set of six color options is available:
  - **OffWhite (#EDE8F5)**
  - **Cream (#BAB2B5)**
  - **Blue (#123C69)**
  - **Pink (pink)**
  - **White (#FBE9D0)**
  - **Sky (#90AEAD)**
- **Fixed Position Buttons**: The color-changing buttons are always accessible at the bottom of the page.
- **Minimalist Design**: A simple interface with a title and buttons, using soft shadows and rounded shapes for a polished look.

## Installation

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/yourusername/background-changer.git
   \`\`\`

2. Navigate to the project directory:

   \`\`\`bash
   cd background-changer
   \`\`\`

3. Install the dependencies:

   \`\`\`bash
   npm install
   \`\`\`

4. Start the development server:

   \`\`\`bash
   npm run dev
   \`\`\`

5. Open the app in your browser:

   \`\`\`
   http://localhost:3000
   \`\`\`

## Usage

Once the app is running, you'll see a set of buttons at the bottom of the page. Each button corresponds to a color option. Click any button to change the background color of the page.

## Tech Stack

- **ReactJS**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **Tailwind CSS** (for styling): Utility-first CSS framework for fast UI development.

## How It Works

- The app uses React's \`useState\` hook to manage the background color of the page.
- Each button, when clicked, updates the background color by setting the state to the corresponding color.
- Tailwind CSS is used for styling the buttons, layout, and smooth color transitions.

## Future Improvements

- Add more color options.
- Allow users to input custom colors using a color picker.
- Save the selected color in local storage so the choice persists across sessions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
