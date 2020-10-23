$("#select-all").on('click.', function () {
$("li").css("font-weight", "bold");
});
let count = 0;
$("#remove-reveal").on('click', function () {
    if(count == 0){ 
    $("li").remove();
    count = 1;
} else if(count == 1) {
    location.reload();
    count = 0;
}
});
$("#disappear-test").on('click', function () {
    $(".test").remove();
})
let color = 0;
$("#blue-black").on('click', function() {
    if(color === 0) {
        $("li").css("color", "blue");
        color = 1;
    } else if (color === 1){
        $("li").css("color", "black");
        color = 0;
    }

});

