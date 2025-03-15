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
        "capabilities": {
            "card-buttons": [
                {
                    "text": "Set Priority",
                    "callback": "setPriorityPopup"
                }
            ]
        },
        "icon": "https://your-github-pages-url/icon.png",
        "authentication": "none"
    });
});

app.listen(PORT, () => {
    console.log(`Power-Up server running on port ${PORT}`);
});
