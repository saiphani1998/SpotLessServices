(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
  });

  //#to-top button appears after scrolling
  var fixed = false;
  $(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
      if (!fixed) {
        fixed = true;
        $('#to-top').show("slow", function() {
          $('#to-top').css({
            position: 'fixed',
            display: 'block'
          });
        });
      }
    } else {
      if (fixed) {
        fixed = false;
        $('#to-top').hide("slow", function() {
          $('#to-top').css({
            display: 'none'
          });
        });
      }
    }
  });

})(jQuery); // End of use strict

function price(x)
{
	if(x == 1)
	{
		document.getElementById("pricing").style.backgroundColor="#ffaa00";
		document.getElementById("description").style.color="#ffffff";
		document.getElementById("description").innerHTML ="<h3 style=\"text-align: left;\">Washing Prices</h3><table style=\"font-size: 70%\"><tr><th> Item </th><th> Price </th></tr><tr><td> Shirt</td><td> &#x20B9; 10</td></tr><tr><td> Trouser</td><td> &#x20B9; 10</td></tr><tr><td> T-shirt</td><td> &#x20B9; 8</td></tr><tr><td> Boxers(Shorts)</td><td> &#x20B9; 8</td></tr><tr><td> Towels,Napkins</td><td> &#x20B9; 10</td></tr><tr><td> Bedsheets</td><td> &#x20B9; 15</td></tr><table>";
	}
	

	else if(x == 2)
	{
		document.getElementById("pricing").style.backgroundColor="#ffaa00";
		document.getElementById("description").style.color="#ffffff";
		document.getElementById("description").innerHTML ="<h3 style=\"text-align: left;\">Pressing Prices</h3><table style=\"font-size: 70%\"><tr><th> Item </th><th> Price </th></tr><tr><td> Shirt</td><td> &#x20B9; 7</td></tr><tr><td> Trouser</td><td> &#x20B9; 7</td></tr><tr><td> T-shirt</td><td> &#x20B9; 6</td></tr><tr><td> Boxers(Shorts)</td><td> &#x20B9; 5</td></tr><table><br><br>";
	}
	else if(x == 3)
	{
		document.getElementById("pricing").style.backgroundColor="#ffaa00";
		document.getElementById("description").style.color="#ffffff";
		document.getElementById("description").innerHTML ="<h3 style=\"text-align: left;\">StainRemoval Prices</h3><table style=\"font-size: 70%\"><tr><th> Type of Stain </th><th> Price </th></tr><tr><td> Tea,Coffee,Juice,Soy Sauce</td><td> &#x20B9; 20</td></tr><tr><td> Blood,Ink,wine</td><td> &#x20B9; 25</td></tr><tr><td> Oil,Grease,Ring Around the Collar </td><td> &#x20B9; 35</td></tr><tr><td> Lipstick,Ball-Point pen,Chocolate</td><td> &#x20B9; 15</td></tr><tr><td> Curry,Gravy,Salad dressing,Chewing Gum</td><td> &#x20B9; 20</td></tr><tr><td> Mud,Rust</td><td> &#x20B9; 25</td></tr><tr><td> Non-Water Soluble Ink</td><td> &#x20B9; 35</td></tr><table>";
	}
	else if(x == 4)
	{
		document.getElementById("pricing").style.backgroundColor="#ffaa00";
		document.getElementById("description").style.color="#ffffff";
		document.getElementById("description").innerHTML ="<h3 style=\"text-align: left;\">DryCleaning Prices</h3><table style=\"font-size: 70%\"><tr><th> Item </th><th> Price </th></tr><tr><td> Shirt</td><td> &#x20B9; 10</td></tr><tr><td> Trouser</td><td> &#x20B9; 10</td></tr><tr><td> T-shirt</td><td> &#x20B9; 8</td></tr><tr><td> Boxers(Shorts)</td><td> &#x20B9; 8</td></tr><tr><td> Towels,Napkins</td><td> &#x20B9; 10</td></tr><tr><td> Bedsheets</td><td> &#x20B9; 15</td></tr><table>";
	}
}
