// 스크롤 이벤트 감지해서 버튼 보이기/숨기기
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// 클릭 시 부드럽게 맨 위로 스크롤
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
