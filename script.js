'use strict';
// const xyx = 20;
// if (x == 23) console.log(23);
// let run = document.write;
// let y = 'nothing';
// console.log(x);
// alert('welcome the AgrIndia ');
// const new=age=>{"24"}
// console.log(xyz)
//  let age=18;
//  if(age>=20){
//     console.log("you can");
//  }else{
//     console.log('you cant');
//  }
//  function tellname(){
//     console.log("welcome to jio");
//  }
//  tellname();
// let askname=()=>{
//     console.log("welcome to india");
// }
// askname();
/* let array1=[1,2,3,4,5,6,7,8,90,9,7,7,6,5,4,44,3,3,2,,2,3,4,5,5];
let array2=array1.map(x => x*9);
console.log(array2);
function btnClick(){
    alert('registration successful');
}
window.addEventListener('keydown', checkkey);
function checkkey(event){
 console.log(event.key);
}
window.addEventListener('wheel', function(event){ 
    if(event.deltaY<0){
        console.log("scrolling up");
    }else{
        console.log("scrolling down");
    }
})
*/
const main = document.querySelector('.main');
main.style.opacity = 1;
const main2 = document.querySelector('.main2');
main2.style.opacity = 1;
const body = document.querySelector('#body');
const flexcontainer1 = document.querySelector('.flex-container1');
const flexcontainer2 = document.querySelector('.flex-container2');
// body.addEventListener('click', function () {
//   flexcontainer2.style.background = '#28AD7B';
//   flexcontainer1.style.background = '#28AD7B';
// });

const row = document.querySelector('.row');

//
window.addEventListener('scroll', function (e) {
  if (window.pageYOffset > 550) {
    flexcontainer.classList.add('sticky');
  } else if (this.window.pageYOffset < 550) {
    flexcontainer.classList.remove('sticky');
    // window.body.style.background = '#d1d1d1';
  }
});
setTimeout(function (e) {
  const main = document.querySelector('.main');
  main.style.backgroundColor = '#908380';
}, 10000);

// function myFocusFunction() {
//   x.style.background = 'yellow';
// }
// function myBlurFunction() {
//   x.style.background = 'white';
// }
// let dheeraj = {
//   firstName: 'dheeraj',
//   lastName: 'kumar',
//   age: 22,
// };
// console.log(dheeraj.age);

// set Timeout(fun,5000); //setInterval
// function fun(){
//     alert('Welcome to AgriIndia');
// }
// let hover = document.getElementsByClassName('new');
// hover.addEventListener('mouseover', function () {
// alert('welcome to agrindia');
// });
function on() {
  alert('invalid user and password');
}
function btnClick() {
  alert('registration was not successful');
}
function pump() {
  alert('Great take a look...');
}
// let btn=document.getElementsById("pt-5");
// btn.addEventListener('click',function(){
//     alert("welcome to the inadia");
// } )
// let evt=document.getElementById("img");
// evt.addEventListener("click",function(){
//         alert("welcome to the agrindia");
// })
/*
setTimeout(function () {
  alert('Welcome to AgrIndia');
}, 100000);
const temp = function () {
  const temperature = {
    type: 'temp',
    unit: 'kelvin',
    value: Number(prompt('temperature')),
  };
  console.table(temperature);
  const receiver = temperature.value + 273;
  return receiver;
};
console.log(temp());
*/
/*
const temp = function () {
  const data = {
    day1: -1,
    day2: 4,
    day3: 8,
  };
  const saved = `day1 temperature is ${data.dat1} day2 is ${data.day2} day3 is ${data.day3}`;
  return saved;
};
console.log(temp());
*/
const flexcontainer = document.querySelector('.flex-container');
console.log(flexcontainer);
window.addEventListener('wheel', function (event) {
  if (event.deltaY < 0) {
    console.log('scrolling up..');
  } else if (event.deltaY > 0) {
    console.log('scrolling down..');
  } else if (event.deltaY > 10) {
    flexcontainer.classList.add('sticky');
    // containt.style.cssText = 'background-color:red';
  }
});
// const shadow = document.querySelector('.shadow');
// shadow.addEventListener('click', function () {
//   console.log(shadow);
// });
const flexChild1 = document.querySelector('.flex-child1');
const login = document.querySelector('.login');
const overLay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');
const btnlog = document.querySelector('.btnlog');
const pass = document.querySelector('.pass');
const id = document.querySelector('.id');

const add = function () {
  overLay.classList.add('hidden');
  login.classList.add('hidden');
};
const remove = function () {
  overLay.classList.remove('hidden');
  login.classList.remove('hidden');
};
flexChild1.addEventListener('click', remove);
close.addEventListener('click', add);
overLay.addEventListener('click', add);
btnlog.addEventListener('click', function () {
  if (pass > 0) {
    alert('You are logged in successfully');
  } else {
    alert('logged in');
  }
  location.reload(login);
});
setTimeout(function () {
  overLay.classList.remove('hidden');
  login.classList.remove('hidden');
}, 10000);

//function for the statioc query logo
// const ask=document.querySelector('.ask')
//           const question=document.querySelector('.question')
//           ask.addEventListener('click',function(){
//             alert('clicked')
//             question.classList.add('hid')
//           })
const ask = document.querySelector('.ask');
const closebutton = document.querySelector('.closebutton');
const query = document.querySelector('.query');
const morebtn = document.querySelector('.morebtn');
const question = document.querySelector('.question');
const submit = document.querySelector('.submit');
const textarea = document.querySelector('.textarea').value;
const datalist = document.querySelector('#search');

ask.addEventListener('click', function (e) {
  // const cord1 = morebtn.getBoundingClientRect();
  question.classList.remove('hid');

  // window.scrollTo(
  //   cord1.left + window.pageXOffset,
  //   cord1.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: cord1.left + window.pageXOffset,
  //   top: cord1.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  morebtn.scrollIntoView({ behavior: 'smooth' });
  flexcontainer.classList.remove('sticky');
});
submit.addEventListener('click', function () {
  alert('Your query has been submited we will back within 24 hours');
  location.reload(question);
});

const unhide = function () {
  question.classList.add('hid');
};

const hide = function () {
  question.classList.remove('hid');
};
closebutton.addEventListener('click', unhide);
// query.addEventListener('click', hide);
const searchbtn = document.querySelector('.searchbtn');
searchbtn.addEventListener('click', function () {
  const input = document.querySelector('.textbox').value;
  location.reload();
});

// const plus = document.querySelector('.plus');
// const minus = document.querySelector('.minus');
// const qty = document.querySelector('.qty');
// const addcart = document.querySelector('.addcart');
// let counter = 1;
// plus.addEventListener('click', function () {
//   qty.innerHTML = counter.toString();
//   counter++;
//   return counter;
// });
// minus.addEventListener('click', function () {
//   qty.innerHTML = counter.toString();
//   counter--;
//   return counter;
// });
const show = document.querySelector('.show');
morebtn.addEventListener('click', function () {
  show.classList.remove('show');
  morebtn.classList.add('show');
});

/// for sticky

// const Flexcontainerheight = flexcontainer1.getBoundingClientRect();

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   // console.log(entry);

//   if (!entry.isIntersecting) flexcontainer.classList.add('sticky');
//   else flexcontainer.classList.remove('sticky');
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   // rootMargin: `-${Flexcontainerheight}px`,
// });

// headerObserver.observe(flexcontainer1);
