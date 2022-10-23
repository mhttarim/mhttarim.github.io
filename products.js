let images = document.querySelector(".middle-images");
let backButton = document.querySelector(".buttonBack");
let nextButton = document.querySelector(".buttonNext");


const imageDoc = [
    {
        src: '1.png'
    },
    {
        src: '2.png'
    },
    {
        src: '3.png'
    },
    {
        src: '4.png'
    },
    {
        src: '5.png'
    },
    {
        src: '6.png'
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
