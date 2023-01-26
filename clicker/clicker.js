var getNum = 0;
var add = document.getElementById("add");
add.addEventListener("click", function() {
    getNum++;
    document.getElementById("show").innerHTML = getNum;
});

var sub = document.getElementById("sub");
sub.addEventListener("click", function() {
    if (getNum > 0) {
        getNum--;
        document.getElementById("show").innerHTML = getNum;
    }
});

var reset = document.getElementById("reset");
reset.addEventListener("click", function() {
    getNum = 0;
    document.getElementById("show").innerHTML = "0";
});
