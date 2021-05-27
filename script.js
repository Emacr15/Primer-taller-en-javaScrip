const list = document.createElement("ul");
const info = document.createElement("p");
const html = document.querySelector("html"); 

info.textContent  = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptates, ipsam totam omnis debitis repellat tempora esse incidunt fugit commodi voluptatibus eum natus deserunt hic ad voluptatum quia rerum fuga?"

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = () => {
    const listItem = document.createElement("li");
    const listcontent = prompt( "favorite color");
    listItem.textContent = listcontent;
    list.appendChild(listItem);

    listItem.onclick = function(event){
        event.stopPropagation();
        const listcontent = prompt("Change your color");
        this.textContent = listcontent;

    };
}