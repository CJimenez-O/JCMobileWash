 document.querySelector(".slider input").addEventListener("input", function(){
    document.querySelector(".og-image").style.width = this.value + "%";
    
console.log(document.querySelector(".og-image").style.width );
});


// quick fix for nav bar to go away after clicking link
document.querySelector(".nav-links").addEventListener("click", function(e){
    let nav = document.querySelector("nav");
    nav.remove();
    location.reload();
    console.log(e.target);
});

