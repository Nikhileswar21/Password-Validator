# 🔒 Interactive Password Validator

A lightweight, real-time Password Validator built using pure HTML5, CSS3, and  JavaScript. This project provides instant visual feedback to users as they type, ensuring their password meets standard security strength requirements before submission.

[Project Preview](images/preview.png) 



## ✨ Features
- **Real-Time Validation:** Checks password criteria instantly on every keypress (`keyup` event).
- **Visual Criteria Checklist:** Dynamically toggles UI states (icons and colors) for met requirements.
- **Password Visibility Toggle:** Show/hide password option for a better user experience.
- **Dynamic Strength Indicator:** Visual bar or color shift representing weak, medium, and strong states.
- **Fully Responsive:** Optimized layout for mobile, tablet, and desktop screens.

## 🔐 Validation Rules
The password is validated against the following security standards:
1. **Minimum Length:** At least 8 characters long.
2. **Uppercase Letter:** Contains at least one capital letter (A-Z).
3. **Lowercase Letter:** Contains at least one lowercase letter (a-z).
4. **Number:** Contains at least one digit (0-9).
5. **Special Character:** Contains at least one special character (e.g., `@`, `#`, `$`, `%`, `!`).

## 🛠️ Technologies Used
- **HTML5:** Semantic markup structure.
- **CSS3:** Custom styling, Flexbox layout, smooth transitions, and responsive design.
- **JavaScript (ES6):** Regular expressions (Regex) for pattern matching and dynamic DOM manipulation.

## 📂 Project Structure
```text
├── index.html      # Main HTML layout
├── style.css       # Custom styling and animations
├── script.js       # Validation logic and DOM event listeners
└── README.md       # Project documentation
```

## ⚙️ Setup and Installation
Since this is a purely frontend project, you do not need to install any external dependencies or packages.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nikhileswar21/Password-Validator.git 
   ```
2. **Navigate to the project directory:**
   ```bash
   cd passsword-validator
   ```
3. **Open the project:**
   - Simply double-click the `index.html` file to run it in your default browser.
   - Alternatively, use the **Live Server** extension in VS Code for live-reloading.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

---
*Created by [nikhil](https://github.com/Nikhhileswar21) - feel free to reach out or contribute!*
