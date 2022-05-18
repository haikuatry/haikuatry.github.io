    var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
	  document.getElementById("nav2").style.display="none";
  } else {
    document.getElementById("navbar").style.top = "-100px";
	  document.getElementById("nav2").style.display="block";
  }
      prevScrollpos = currentScrollPos;
    document.getElementById("myBar").style.top = document.getElementById("navbar").style.top - "70px";
}
