//nseted array
let arr = [[["Xyz"]], "abc"];
let b = [...arr[0]];
let c = [...b[0]];
console.log(c);
let nestedArr = document.getElementById("nestedArr")
nestedArr.innerHTML += `<i><b> ${c}</i></b>`




//nested object
let obj = {
  a: {
    ax: {
      name: "rehan",
    },
  },
};

let nestedObj = document.getElementById("nestedObj")
let x = {...obj.a}
let y = {...x.ax}
// let objVal = {...obj.a.ax.name};
console.log(y);
nestedObj.innerHTML += `<i><b> ${Object.values(y)}</i></b>`


