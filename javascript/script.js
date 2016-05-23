var w_w = $(window).width();

$(".menu-block").find("a").each(function () {
  var href = $(this).attr("href");
  if (location.pathname.indexOf(href) === 0 && href !== "/" || href === "/" && location.pathname === "/") {
    $(this).addClass("active");
  }
});

$(function () {
  $(".window-open").click(function (event) {
    event.preventDefault();
    window.open($(this).attr("href"), "Share", 'height=320, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
    return false;
  });
});

$(window).load(function() {

});