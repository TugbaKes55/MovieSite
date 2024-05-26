const arrows= document.querySelectorAll(".arrow");
const movielists=document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i)=>
    {   
        const widthratio=Math.floor(window.innerWidth / 300);
        let clickCounter =0;
        const imageitem =movielists[i].querySelectorAll("img").length;
        
       arrow.addEventListener("click", function(){   
       clickCounter++;
       if(imageitem - (4 + clickCounter) + (4 - widthratio)>=0){
          
            movielists[i].style.transform = `translateX(${movielists[i].computedStyleMap().get("transform")[0].x.value - 300}px)` ;
        }
    
        else{
            movielists[i].style.transform="translateX(0)";
        }
        
    });
});

const ball=document.querySelector(".toggle-ball");
const items =document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-title")
ball.addEventListener("click", function(){
    items.forEach((item)=> item.classList.toggle("active"))
});

