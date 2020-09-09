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


// sending email
$(document).ready(function(){
    $('.submit').click(function(e){


        let email = $('.email').val();
        let name = $('.name').val();
        let phone = $('.phone').val();
        let day = $('.day').val();
        let time = $('.time').val();
        let statusElm = $('.status');
        statusElm.empty();

        if(email.length > 5 && email.includes("@") && email.includes(".")){
            e.preventDefault();
            statusElm.append('<div>Email is Valid</div>');
        } else{
            e.preventDefault();
            statusElm.append('<div>Email is not Valid</div>');
        }
    })
})