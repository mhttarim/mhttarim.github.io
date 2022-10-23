let images = document.querySelector(".middle-images");
let backButton = document.querySelector(".buttonBack");
let nextButton = document.querySelector(".buttonNext");


const imageDoc = [
    {
        src: 'foto3.jpg'
    },
    {
        src: 'logo1.png'
    },
  ];


let count = 0;

function counts() {
  if (count < 0) {
    count = imageDoc.length - 1;
  } else if (count == imageDoc.length) {
    count = 0;
  }
  images.src = imageDoc[count].src;
}

backButton.onclick = () => {
  count--;
  counts();
};
nextButton.onclick = () => {
  count++;
  counts();
};
