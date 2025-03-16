// server.js - Trello Power-Up Backend
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('Public'));

// Serve Trello Power-Up manifest
app.get('/manifest.json', (req, res) => {
    res.json({
        "title": "Trello Quick Priority Setter",
        "description": "A simple Power-Up to set priority levels on Trello cards.",
        "icon": "https://mmarketu119.github.io/trello-priority-powerup/icon.png",
        "author": "Agile Mediaz LLC",
        "capabilities": {
            "card-buttons": [
                {
                    "text": "Set Priority",
                    "callback": "setPriorityPopup"
                }
            ],
            "card-detail-badges": [
                {
                    "text": "Priority",
                    "callback": "getPriorityBadge"
                }
            ]
        },
        "connectors": {
            "iframe": {
                "url": "https://mmarketu119.github.io/trello-priority-powerup/"
            }
        },
        "authentication": "none"
    });
});

// API to handle priority setting
app.post('/set-priority', (req, res) => {
    const { priority } = req.body;
    if (!priority) {
        return res.status(400).json({ success: false, message: "Priority is required" });
    }
    console.log("Priority set to:", priority);
    res.json({ success: true, message: "Priority updated successfully" });
});

app.listen(PORT, () => {
    console.log(`Power-Up server running on port ${PORT}`);
});
