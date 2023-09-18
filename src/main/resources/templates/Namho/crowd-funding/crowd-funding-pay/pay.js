$(function (){
    // 결제 수단 선택
    $(".custom-control-label").click(function () {
        $(".custom-control-label").removeClass("active");
        $(this).toggleClass("active");
    });
})