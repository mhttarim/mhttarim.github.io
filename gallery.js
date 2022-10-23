let images = document.querySelector(".middle-images");
let backButton = document.querySelector(".buttonBack");
let nextButton = document.querySelector(".buttonNext");


const imageDoc = [
    {
        src: 'foto1 (2).jpg'
    },
    {
        src: 'foto2.jpg'
    },
    {
        src: 'foto3.jpg'
    },
    {
        src: 'foto4.jpeg'
    },
    {
        src: 'foto5.jpeg'
    }
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
