const url = "https://icanhazdadjoke.com/slack";
const h1 = document.querySelector("h1");
h1.addEventListener("mouseover", fetho);

function fetho() {
  fetch(url).then((response) => {
    response.json().then((data) => {
      let received = data.attachments[0].fallback;
      upload(received);
      setBg();
    });
  });
}

function upload(data) {
  document.querySelector("div").innerHTML = data;
}

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
};

const timer = setInterval(fetho, 7000);
