$(".tab").on("click", () => {
    $(".is_active").removeClass("is_active");
    $(this).addClass("is_active");
    $(".is_show").removeClass("is_show");
    const className = $(this).attr("class");
    $(".content").eq(idx).addClass("is_show");
});