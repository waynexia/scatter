const remote = require('electron').remote;

document.getElementById("closeWindow").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    window.close();
}); 