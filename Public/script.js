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

function setPriorityPopup(t) {
    return t.popup({
        title: "Set Priority",
        url: "./popup.html",
        height: 184
    }).catch(err => {
        console.error("Popup error:", err);
    });
}

function getPriorityBadge(t) {
    return t.get('card', 'shared', 'priority')
        .then(function (priority) {
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

// Function to set priority
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
