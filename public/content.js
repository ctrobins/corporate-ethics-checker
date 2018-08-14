document.body.innerHTML +=`<dialog style="height:50px; width:300px; text-align: center">
    This is a b corp!
    <div style="position:absolute; top:0px; left:5px;"><button>x</button></div></dialog>`;

let dialog = document.querySelector("dialog");
dialog.querySelector("button").addEventListener("click", function() {
    dialog.close();
});
dialog.showModal();