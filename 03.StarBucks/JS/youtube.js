// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// 함수 이름 수정하면 X
function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", // 최소 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: ["An6LvWQuj_8"], // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute(); // 음소거
      },
    },
  });
}
