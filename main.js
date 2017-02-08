//function to slide boxes up and down
var heightChange = function (event) {
  var target = event.target;

//using jQuery to target the id in the HTML
  var content1 = $("#content1");
  var content2 = $("#content2");
  var content3 = $("#content3");
  //console.log(target);

//what happens when the first header is clicked
  if (target.id === "head1") {
    content1.addClass("big-box");
    content2.removeClass("big-box");
    content3.removeClass("big-box");
  }
//what happens when the second header is clicked
  else if (target.id === "head2") {
    content2.addClass("big-box");
    content1.removeClass("big-box");
    content3.removeClass("big-box");
  }
//what happens when the third block is clicked.
  else if (target.id === "head3") {
    content3.addClass("big-box");
    content1.removeClass("big-box");
    content2.removeClass("big-box");
  }
};


//targetting the elements in a header tag
var viewContent = $("header");
//console.log(viewContent)

//pass .on the event, trigger
viewContent.on("click", heightChange);
