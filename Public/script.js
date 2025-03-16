window.TrelloPowerUp.initialize({
    "card-buttons": function (t, options) {
        return [{
            text: "Set Priority",
            callback: setPriorityPopup
        }];
    }
});

function setPriorityPopup(t) {
    return t.popup({
        title: "Set Priority",
        url: "./public/popup.html",
        height: 184
    });
}

function getPriorityBadge(t) {
    return t.get('card', 'shared', 'priority')
        .then(function (priority) {
            if (priority) {
                return {
                    text: "Priority: " + priority,
                    color: priority === "High" ? "red" : priority === "Medium" ? "yellow" : "green"
                };
            }
            return null;
        });
}
