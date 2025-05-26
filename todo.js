btn = document.querySelector("button");
inp = document.querySelector("input");
ul = document.querySelector("ul");
para = document.querySelector("p");
deletebtns = document.querySelectorAll(".deletebtn");

btn.addEventListener("click", function(){
    para.innerText = "Tasks to be completed are : ";
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.append(item);
    
    let del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("deletebtn");
    item.appendChild(del);

    inp.value = "";
});

// for(deletebtn of deletebtns){
//     deletebtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// }

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let lstItem = event.target.parentElement;
        lstItem.remove();
    }
})
