$(function () {
  // 액션창 띄우기
  $(".post-dropdown").click(function () {
    var $container = $(this).closest(".post-action");
    var $dropdown = $container.find(".action-dropdown-container");

    $dropdown.toggle();
  });

  // 북마크
  $(".post-bookmark").click(function () {
    var $icons = $(this).find("svg");

    $icons.toggleClass("active");
  });

  //   모달 관리 쿼리
  let $modal = $(".modal");
  let $modalContainer = $(".modal-container");

  function closeModal() {
    $modal.removeClass("show");
  }

  $(".head-filter-btn").click(function (event) {
    event.stopPropagation();
    $modal.addClass("show");
  });

  $modalContainer.click(function (event) {
    event.stopPropagation();
  });

  $(".modal-close-btn").click(function () {
    closeModal();
  });

  $(document).click(function () {
    closeModal();
  });

//   헤더 드랍다운 필터 관리 쿼리
  $(".mobo-checkbox-container").click(function () {
    $(this).toggleClass("active");
  });

  $(".head-dropdown").click(function () {
    $(".head-dropdown-menu").toggleClass("active");
  });

  $(".dropdown-menu-a").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    let selectedMenuItem = $(this);
    let selectedText = selectedMenuItem.text();

    $(".orderby-status").text(selectedText);
    $(".dropdown-menu-a").removeClass("active");
    selectedMenuItem.addClass("active");
    $(".head-dropdown-menu").removeClass("active");
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".head-dropdown").length) {
      $(".head-dropdown-menu").removeClass("active");
    }
  });
});
