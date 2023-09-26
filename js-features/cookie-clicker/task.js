resizeImg = function (obj, width, height) {
  obj.width = width;
  obj.height = height;
};


const cookieImg = document.getElementById("cookie");
const clickerStatus = document.getElementById("clicker__counter");
const clickerAverage = document.getElementById("clicker__average");
let clickTimeBase;

cookieImg.onclick = () => {
  let clickTime = new Date().getTime(); 
  clickerNumber = Number(clickerStatus.textContent);
  isOdd = Boolean(clickerNumber % 2);
  if (isOdd) {
    resizeImg(cookieImg, 200, 127.933);
  } else {
    resizeImg(cookieImg, 250, 177.933);
  }
  clickerStatus.textContent = clickerNumber + 1;
  if (clickerNumber > 0) {
    averageNumber = 1 / ((clickTime - clickTimeBase) / 1000);
    clickerAverage.textContent = averageNumber.toFixed(2);
  }
  clickTimeBase = clickTime;

};
