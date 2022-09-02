let mobiles = {
  iphone: {
    v14: {
      price: 100000,
      color: "black",
      storage: 64,
    },
    v14: {
      price: 150000,
      color: "blue",
      storage: 128,
    },
  },
  samsung: {
    s5: {
      price: 120000,
      color: "blue",
      storage: 64,
    },
    galaxy: {
      price: 200000,
      color: "black",
      storage: 32,
    },
  },
  oppo: {
    f7: {
      price: 1100000,
      color: "white",
      storage: 64,
    },
    f14: {
      price: 130000,
      color: "green",
      storage: 128,
    },
  },
  redmi: {
    r13: {
      price: 140000,
      color: "purple",
      storage: 32,
    },
    r14: {
      price: 150000,
      color: "black",
      storage: 64,
    },
  },
};

let mobileName = document.getElementById("mobileName");
let model = document.getElementById("model");
let key = Object.keys(mobiles);
let value = Object.values(mobiles);
// console.log(value)
mobileName.innerHTML == "";

for (let i = 0; i < key.length; i++) {
  mobileName.innerHTML += `<option>${key[i]}</option>`;
}

function check() {
  model.disabled = false;
  let nestedKeys = Object.keys(mobiles[mobileName.value]);
  for (let i = 0; i < nestedKeys.length; i++) {
    model.innerHTML == "";
    model.innerHTML += `<option>${nestedKeys[i]}</option>`;
  }
}

function search(){
  let res = mobiles[mobileName.value][model.value]
  console.log(res)
}
