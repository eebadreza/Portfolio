$(document).ready(function () {
  $(".down").on("click", function () {
    $(".head").addClass("head-hide");
  });

  $(".home").on("click", function () {
    $(".side").removeClass("showing");
  });

  $(".begin").on("click", function () {
    $(".sec-A").addClass("showing");
    // $(".head").hide();
  });

  // $(".code-btn").on("click", function () {
  //     $(".sec-B").addClass("showing");
  // });
  $(".b1").on("click", function () {
    $(".sec-A").removeClass("showing");
  });

  $(".n1").on("click", function () {
    $(".sec-B").addClass("showing");
    setTimeout(function () {
      $(".sec-A").removeClass("showing");
    }, 500);
  });

  // $(".back-btn").on("click", function () {
  //     $(".sec-B").removeClass("showing");
  // });

  // $(".code-btn").on("click", function () {
  //     $(".sec-C").addClass("showing");
  // });

  // $(".back-btn").on("click", function () {
  //     $(".sec-C").removeClass("showing");
  // });

  $(".b2").on("click", function () {
    // $(".sec-A").addClass("notransition");
    $(".sec-A").addClass("showing");
    setTimeout(function () {
      $(".sec-B").removeClass("showing");
    }, 500);
    // $(".sec-A").removeClass("notransition");
  });

  $(".n2").on("click", function () {
    $(".sec-C").addClass("showing");
    setTimeout(function () {
      $(".sec-B").removeClass("showing");
    }, 500);
  });

  $(".b3").on("click", function () {
    $(".sec-B").addClass("showing");
    setTimeout(function () {
      $(".sec-C").removeClass("showing");
    }, 500);
  });

  $(".n3").on("click", function () {
    // $(".sec-B").addClass("showing");
    $(".sec-C").removeClass("showing");
  });
});

// const
