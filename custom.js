// tab click change content
$(".tab").on("click", () => {
    $(".is_active").removeClass("is_active");
    $(this).addClass("is_active");
    $(".is_show").removeClass("is_show");
    const className = $(this).attr("class");
    $(".content_wrapper").eq(idx).addClass("is_show");
});