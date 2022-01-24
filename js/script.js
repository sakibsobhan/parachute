const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

$(".banner-slider").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fas fa-chevron-left prev"></i>',
  nextArrow: '<i class="fas fa-chevron-right next"></i>',
});

$(".service-slider").slick({
  slidesToShow: 3,
  prevArrow: '<i class="fas fa-chevron-left prev"></i>',
  nextArrow: '<i class="fas fa-chevron-right next"></i>',
  autoplay: true,
  autoplaySpeed: 2000,
});

$(".counter").counterUp({
  delay: 10,
  time: 2000,
});

// calender
jQuery(document).ready(function () {
  var current_yyyymm_ = moment().format("YYYYMM");

  $("#pb-calendar").pb_calendar({
    schedule_list: function (callback_, yyyymm_) {
      var temp_schedule_list_ = {};

      callback_(temp_schedule_list_);
    },
    schedule_dot_item_render: function (dot_item_el_, schedule_data_) {
      dot_item_el_.addClass(schedule_data_["style"], true);
      return dot_item_el_;
    },
  });
});
// calender

$(".testi-slider").slick({
  prevArrow: '<i class="fas fa-chevron-left prev"></i>',
  nextArrow: '<i class="fas fa-chevron-right next"></i>',
  autoplay: true,
  autoplaySpeed: 2000,
});
$(".team-slide").slick({
  slidesToShow: 4,
  arrows: false,
});
