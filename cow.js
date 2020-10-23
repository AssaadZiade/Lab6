$("#button_change").on('click', function () {
    console.log($(".cow_color").text());
    $(".cow_color").text($("#input_color").val());
});
