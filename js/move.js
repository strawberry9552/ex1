$(function () {
  $(".right li").on("mouseenter", function () {
    $(".right li").removeClass("on");
    $(this).addClass("on");
  });
  $(".right li").on("mouseleave", function () {
    $(".right li").removeClass("on");
  });
});
