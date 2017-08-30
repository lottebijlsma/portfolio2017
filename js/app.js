const $box = document.querySelector(`.box`);
function moveBox (e) {
  TweenMax.to($box, 1.8, {
    css: {left: e.pageX, top: e.pageY},
    ease: Elastic.easeOut
  });
}

window.addEventListener(`mousemove`, moveBox);
//
// $(window).on(`mousemove`, moveBox);
