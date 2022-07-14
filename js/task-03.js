const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const ulList = document.querySelector(".gallery");

const listMaker = images.map(image => `<li><img src="${image.url}" alt="${image.alt}" class="imgStyle" height="120px"></li>`).join("")

ulList.style.padding = "20px";
ulList.style.display = "flex";
ulList.style.justifyContent = "space-around";
ulList.style.borderRadius = "4px";
ulList.style.backgroundColor = "#2196f3";

ulList.insertAdjacentHTML("afterbegin", listMaker);
