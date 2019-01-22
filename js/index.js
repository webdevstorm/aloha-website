// carousel //

$(document).ready(function() {
  $(".product-wheel").flickity({
    // options
    cellAlign: "center",
    contain: true
  });
});

// smooth scrolling //

$(document).ready(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});

// email validity //

$(document).ready(".simple-subscription-form").on("click", ".button", function() {
    const text = $("input[name='email_address']").val();
    if( checkEmailValidity(text)===true){
        alert("Thank you for subscrıbıng!");
    }else{
        alert("Not a valid email address!");
    }
    $("input[name='email_address']").val()="";
  });


