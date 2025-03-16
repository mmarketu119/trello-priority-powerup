// server.js - Trello Power-Up Backend
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Trello Power-Up capabilities
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

app.listen(PORT, () => {
    console.log(`Power-Up server running on port ${PORT}`);
});
