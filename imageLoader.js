window.onload = function () {
  fetch("/image/list")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("imageContainer");
      data.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        container.appendChild(img);
      });
    })
    .catch((err) => console.error("이미지 로딩 실패:", err));
};
