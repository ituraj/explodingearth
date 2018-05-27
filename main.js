
 function loadSVG(path, element, func){
     fetch(path)
        .then(function(response){
            return response.text();
        })
        .then(function(data){
            console.log(document.querySelector(element))
            document.querySelector(element).innerHTML = data;
            //
            func();
        })
 }

 loadSVG("assets/sarah.svg", "div", function(){
     console.log("sarah loaded");
     document.querySelector("#booms").style.display="none";
     let stuff = document.querySelectorAll(".land path, .water path");
     console.log(stuff);
     document.querySelector("svg").addEventListener("click", () => {
        stuff.forEach((el, i) => {
            setTimeout(()=>{
                console.log(i);
                el.style.transform = `translate(${Math.random()*400-200}px, ${Math.random()*400-200}px)`;
            }, i*10)
        })
    })
});