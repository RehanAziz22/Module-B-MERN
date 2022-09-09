const mobiles = [
  {
    companyName: "Samsung",
    model: "A12",
    color: "Blue",
    ram: 128,
    price: 250000,
    src: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a12-sm-a125.jpg",
  },
  {
    companyName: "iPhone",
    model: "14",
    color: "Black",
    ram: 128,
    price: 250000,
    src: "https://static.toiimg.com/thumb/resizemode-4,msid-79058673,imgsize-200,width-1200/79058673.jpg",
  },
  {
    companyName: "Redmi",
    model: "9",
    color: "Green",
    ram: 64,
    price: 25000,
    src: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-9-pro-global-0.jpg",
  },
  {
    companyName: "Infinix",
    model: "Hot 10",
    color: "Black",
    ram: 64,
    price: 18000,
    src: "https://images.priceoye.pk/infinix-hot-10-pakistan-priceoye-lfly5.jpg",
  },
  {
    companyName: "OPPO",
    model: "F17",
    color: "Orange",
    ram: 64,
    price: 25000,
    src: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/f17-a73/navigation/F17-navigation-orange-v2.png",
  },
];
let button = document.getElementById("button");
let mobileName = document.getElementById("mobileName");
let model = document.getElementById("model");
let output = document.getElementById("output");

const newarr = mobiles.map(function (x) {
  mobileName.innerHTML += `<option value="${x.companyName}">${x.companyName}</option>`;
  return x;
});
// console.log(newarr)

function check() {
  model.disabled = false;
  model.innerHTML = " ";
  
  button.disabled = false;
  let a = mobiles.filter(function (x) {
    if (x.companyName == mobileName.value) {
      return x;
    }
  });
  a.map(function (mobiles) {
    model.innerHTML += `<option value="${mobiles.model}">${mobiles.model}</option>`;
  });
  // console.log(second_dd)
}
function search() {
  output.innerHTML = " ";
  let b = mobiles.filter(function(x){
    if(x.model == model.value){
     return x;
    } 
 })
  b.map(function (value) {
    output.innerHTML = `<div class="card">            
    <img src="${value.src}" alt="">
        <h1>${value.companyName}  ${value.model}</h1>
        <p>Rs : ${value.price}</p>
        <p>Color : ${value.color}</p>
        <p>Storage : ${value.ram}</p>
        <button>Buy Now</button>
</div>`;
  });
  //   output.innerHTML += JSON.stringify(a, null, 2);
  console.log(b);
}
function generateCards() {
  let allCards = document.getElementById("allCards")
  for (let index = 0; index < 1; index++) {
      mobiles.map(function (mobiles) {
        allCards.innerHTML += `<div class="card">            
        <img src="${mobiles.src}" alt="">
            <h1>${mobiles.companyName}  ${mobiles.model}</h1>
            <p>Rs : ${mobiles.price}</p>
            <p>Color : ${mobiles.color}</p>
            <p>Storage : ${mobiles.ram}</p>
            <button>Buy Now</button>
    </div>`;
  });
  }
};
generateCards()
