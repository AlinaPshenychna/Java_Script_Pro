//  "Modal window" when clicked on button.
//     +Open modal when user click on button
//     +button has content "click me"
//     +Use jquery for this popup.
//     +node_modules should not be in Github
//     add npm script "npm start" -
// this should start your page with http-server
// https://www.npmjs.com/package/http-server

$(".btn").on("click", function () {
  $(".pop-up").trigger("click");
  $(".pop-up").css({ display: "block" });
});

$(".img").on("click", function () {
  $(".pop-up").trigger("click");
  $(".pop-up").css({ display: "none" });
});
