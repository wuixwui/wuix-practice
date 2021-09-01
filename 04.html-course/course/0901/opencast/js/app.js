const target = document.querySelector('.caslist .btn');

console.dir(target.parentNode);
target.addEventListener('click', () => {
  target.parentNode.classList.toggle('on');
  console.log('click');
});

// target.addEventListener('blur', () => {
//   target.parentNode.classList.remove('on');
// });
// blur를 쓰면 밑에 list를 클릭했을 때 blur가 되어 버린다.
