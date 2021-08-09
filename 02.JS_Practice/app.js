let boxEl = document.querySelector(".box");

console.log(boxEl);

boxEl.addEventListener("click", (handler) => {
  console.log("clicked!");
});

boxEl.classList.add("active");
let isConatins = boxEl.classList.contains("active");
console.log(isConatins);

boxEl.classList.remove("active");
isConatins = boxEl.classList.contains("active");
console.log(isConatins);

const boxEls = document.querySelectorAll(".box");
console.log(boxEls);

// querySelectorAll로 찾아진 요소들은 유사배열 형태로 저장하게 됩니다.

boxEls.forEach((boxEl, index) => {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});

boxEl.innerText = "box~";

// Method chaining

const a = "123894567";
const b = a.split("").sort().reverse();

console.log(a, b);
