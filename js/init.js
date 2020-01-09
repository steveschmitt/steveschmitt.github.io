document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, { responsiveThreshold: 0 });

  elems = document.querySelectorAll('.sidenav');
  instances = M.Sidenav.init(elems, {});
});
