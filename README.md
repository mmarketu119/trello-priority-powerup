# Trello Quick Priority Setter Power-Up

## 📌 Overview
This Trello Power-Up allows users to quickly set priority levels (High, Medium, Low) for their tasks directly from Trello cards.

## 🚀 Features
- Adds a **'Set Priority'** button to each Trello card.
- Allows users to set **priority levels** (High, Medium, Low).
- Changes **card color** based on priority.

## 📂 File Structure
```
/trello-priority-powerup
│── public/
│   ├── icon.png          # Power-Up icon
│   ├── popup.html        # UI for setting priority
│   ├── script.js         # Handles button interactions
│   ├── styles.css        # Basic styling
│── manifest.json         # Trello Power-Up configuration
│── server.js             # Express.js server
│── package.json          # Dependencies
│── README.md             # Documentation
```

## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/YOUR-GITHUB-USERNAME/trello-priority-powerup.git
cd trello-priority-powerup
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Server (Local Testing)
```sh
npm start
```

## 🌍 Deploying with GitHub Pages
1. Push your files to **GitHub**.
2. Go to **Settings → Pages**.
3. Select **'Deploy from a branch' → main branch**.
4. Use the generated URL to register the Power-Up in Trello.

## 🛠 Register the Power-Up in Trello
1. Go to [Trello Power-Up Admin](https://trello.com/power-ups/admin).
2. Click **'Create New Power-Up'**.
3. Enter your **GitHub Pages URL**.
4. Save and enable the Power-Up on your board.

## 💡 Future Enhancements
- Custom priority labels
- Auto-priority based on due date
- Team-wide priority settings

## 🔗 License
This project is licensed under the MIT License.

**Happy Coding!**
