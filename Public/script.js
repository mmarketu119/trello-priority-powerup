// script.js - Trello Power-Up Frontend Logic
window.TrelloPowerUp.initialize({
    "card-buttons": function (t, options) {
        return [{
            text: "Set Priority",
            callback: setPriorityPopup
        }];
    },
    "card-detail-badges": function (t, options) {
        return getPriorityBadge(t);
    }
});

// Open the popup
function setPriorityPopup(t) {
    return t.popup({
        title: "Set Priority",
        url: "./popup.html",
        height: 184
    }).catch(err => {
        console.error("Popup error:", err);
    });
}

// Fetch priority badge
function getPriorityBadge(t) {
    return t.get('card', 'shared', 'priority')
        .then(priority => {
            if (priority) {
                return [{
                    text: "Priority: " + priority,
                    color: priority === "High" ? "red" : priority === "Medium" ? "yellow" : "green"
                }];
            }
            return [];
        })
        .catch(error => {
            console.error("Badge error:", error);
            return [];
        });
}

// Handles priority selection
function setPriority(priority) {
    window.TrelloPowerUp.getContext()
        .then(context => {
            return window.TrelloPowerUp.set('card', 'shared', 'priority', priority);
        })
        .then(() => {
            console.log("Priority set to:", priority);
            window.TrelloPowerUp.closePopup();
        })
        .catch(error => console.error("Error setting priority:", error));
}

// Ensure messages are properly handled
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "setPriority") {
        try {
            setTimeout(() => {
                console.log("Priority set to:", request.priority);
                sendResponse({ success: true, message: "Priority Updated!" });
            }, 500);
        } catch (error) {
            console.error("Error setting priority:", error);
            sendResponse({ success: false, error: error.message });
        }
        return true; // Keeps the message port open for async response
    }
    return false;
});
