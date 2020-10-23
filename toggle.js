const main = document.getElementById("main");
main.style.display = "flex";
main.style.marginBottom = "20px";
$("#add-a-new-box").on('click', function () {
const box = document.createElement("div");
box.className = "element"
box.style.width = "30px";
box.style.height = "30px";
box.style.border = "2px solid black";
main.appendChild(box);
});

$("#toggle-colors").on('click', function () {
    $(".element").each(function () {
if ($(this).css("background-color") === "rgba(0, 0, 0, 0)") {
    $(this).css("background-color", "rgb(0, 238, 255)");
} else {
    $(this).css("background-color", "rgba(0, 0, 0, 0)");
}
    })
}
);

$("#toggle-rounded-borders").on('click', function () {
    $(".element").each(function () {
        if ($(this).css("border-radius") === "0px") {
            $(this).css("border-radius", "10px");
        } else {
            $(this).css("border-radius", "0px");
        }
    })
})

