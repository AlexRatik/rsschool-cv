const toTop = document.body.querySelector(".toTop");
function showToTop() {
    if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
}
function toTopFunc() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}
window.addEventListener("scroll", showToTop);
toTop.addEventListener("click", toTopFunc);

const check = document.getElementById("burger__check");
const myself = document.getElementById("myself");
function addMargin() {
    if (check.checked) {
        myself.style.marginTop = "230px";
    } else {
        myself.style.marginTop = "0px";
    }
}
check.addEventListener("input", addMargin);
