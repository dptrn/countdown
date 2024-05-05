
let sec = 10;
let container = document.getElementById("count");


function updatecountdown(){
    
    container.innerHTML=sec < 10 ? "0" + sec : sec;
    
    if(sec < 1){
        let container1=document.createElement("div")
        container1.setAttribute("id","container1")
        document.querySelector("#count").appendChild(container1);
        container.innerHTML = "<h1> Happy Developers Day </h1>";
        container.style.display="flex";
        container.style.justifyContent="center";
        container.style.flexDirection="column";
        container.style.transition="0.5s";
        container.style.textTransform="uppercase";
        container.style.fontSize="30px";
        container.style.marginTop="80px";
        container.style.marginLeft="400px";
        let img=document.createElement("img")
        img.setAttribute("src","https://pbs.twimg.com/media/Dm8rXcDXsAAFG5U.jpg")
        document.querySelector("#count").appendChild(img);
        img.setAttribute("id",img)
        img.style.display="flex";
        img.style.justifyContent="center";
        img.style.width="750px";
        img.style.height="550px";
        img.style.marginRight="400px";
        img.style.marginTop="30px";
        img.style.backgroundColor="yellow";
    
    }   
    sec-- ;
    

    let counter = setTimeout(updatecountdown,1000);
    
    
}
updatecountdown();


