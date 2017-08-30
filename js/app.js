// function onMouseMove(e) {
//   console.log(e);
//   Velocity(document.getElementById(`bg-anim`), {
//     translateX: e.screenX,
//     translateY: e.screenY
//   }, {
//     duration: 2000
//   }
//   );
// }
//
//
// function init() {
//   window.addEventListener(`mousemove`, onMouseMove);
// }
//
// init();

// function init() {
//   window.addEventListener(`mousemove`, onMouseMove);
// }
//
// function onMouseMove(e) {
//   const circle = document.createElement(`div`);
//   circle.classList.add(`bg-anim`);
//   document.querySelector(`.body`).appendChild(circle);
//
//   Velocity(document.getElementById(`bg-anim`), {
//     translateX: e.pageX,
//     translateY: e.pageY
//   }
//   );
// }

const $box = document.getElementById(`box`);
function moveBox (e) {
  TweenMax.to($box, 1.8, {
    css: {left: e.pageX, top: e.pageY},
    ease: Elastic.easeOut
  });
}

window.addEventListener(`mousemove`, moveBox);
//
// $(window).on(`mousemove`, moveBox);
