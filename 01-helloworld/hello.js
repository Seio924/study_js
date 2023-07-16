const btn = document.querySelector("button");

btn.addEventListener("click", helloMbti);

function helloMbti() {
  const heading = document.querySelector("h1");
  const mbti = prompt("당신의 mbti는?");
  heading.append("헬로" + mbti);
}
