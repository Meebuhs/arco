window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("sidebar").classList.add('sidebar-minimised');
    document.getElementById("sidebar").classList.remove('sidebar');
  } else {
    document.getElementById("sidebar").classList.add('sidebar');
    document.getElementById("sidebar").classList.remove('sidebar-minimised');
  }
}