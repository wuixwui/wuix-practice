const aside = document.querySelector('aside');
const noticeOpenBtn = aside.querySelector('.open');
const noticeContents = aside.querySelector('.content-default');
const noticeContent = aside.querySelectorAll('.side');

function noticeToggleHandler() {
  if (!noticeContents.classList.contains('closed')) {
    noticeContents.classList.add('closed');
    noticeContent[0].style.opacity = '0';
    noticeContent.forEach((side) => side.classList.add('closed'));
  } else {
    noticeContents.classList.remove('closed');
    noticeContent[0].style.opacity = '1';
    noticeContent.forEach((side) => side.classList.remove('closed'));
  }
}

noticeOpenBtn.addEventListener('click', noticeToggleHandler);
