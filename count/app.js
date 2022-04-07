let count = document.querySelector(".count__number");
const sum = document.querySelector("#sum");
const sub = document.querySelector("#sub");

function event() {
	sum.addEventListener("click", () => Number(count.textContent++));

	sub.addEventListener("click", () => Number(count.textContent--));
}

event();