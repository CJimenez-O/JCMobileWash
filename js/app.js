//slider

document.querySelector(".slider input").addEventListener("input", function(){
    document.querySelector(".og-image").style.width = this.value + "%";
    
console.log(document.querySelector(".og-image").style.width );
});



// fixes nav bar

nav = document.querySelector(".nav-links");
document.querySelector(".nav-links").addEventListener("click", function(e){
    let nav = document.querySelector("nav");
    let burger = nav.childNodes[3];
    burger.removeAttribute("id");
    //location.reload();
    //console.log(e.target);
    console.log(burger);

});

const menu = document.querySelector(".menu-btn");

menu.addEventListener("click", function(e){
    let nav2 = document.querySelector("nav");  

    let burger = nav2.childNodes[3];
    burger.setAttribute('id', "click");
})



// Homepage button

const btn = document.querySelector(".button")
btn.addEventListener("click", function(e){
    location.href='#contact';
})