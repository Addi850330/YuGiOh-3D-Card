const tiltEffectSettings = {
  max: 25,
  perspective: 1000,
  scale: 1.05,
  speed: 500,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const card = document.querySelector(".card");
const shiny = document.querySelector(".shiny");

card.addEventListener("mouseenter", cardMouseEnter);
card.addEventListener("mousemove", cardMouseMove);
card.addEventListener("mouseleave", cardMouseLeave);
// ---mobile---
card.addEventListener("touchstart", cardMouseEnter);
card.addEventListener("touchmove", cardtouchMove);
card.addEventListener("touchend", cardMouseLeave, f);

function cardMouseEnter(event) {
  setTransition();
  setshinyTransition();
}

function cardMouseMove(event) {
  const cardWidth = card.offsetWidth;
  const cardHeight = card.offsetHeight;
  const centerX = card.offsetLeft + cardWidth / 2;
  const centerY = card.offsetTop + cardHeight / 2;
  const mouseX = event.clientX - centerX;
  const mouseY = event.clientY - centerY;
  const rotateXUncapped =
    +1 * ((tiltEffectSettings.max * mouseY) / (cardHeight / 2));
  const rotateYUncapped =
    -1 * ((tiltEffectSettings.max * mouseX) / (cardWidth / 2));
  const rotateX =
    rotateXUncapped < -tiltEffectSettings.max
      ? -tiltEffectSettings.max
      : rotateXUncapped > tiltEffectSettings.max
      ? tiltEffectSettings.max
      : rotateXUncapped;
  const rotateY =
    rotateYUncapped < -tiltEffectSettings.max
      ? -tiltEffectSettings.max
      : rotateYUncapped > tiltEffectSettings.max
      ? tiltEffectSettings.max
      : rotateYUncapped;

  let arad = Math.atan2(mouseY, mouseX);
  let angle = (arad * 180) / Math.PI - 90;

  if (angle < 0) {
    angle = angle + 360;
  }
  shiny.style.opacity = `1`;
  shiny.style.background = `linear-gradient(
    ${angle}deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 173, 6, 0.22461484593837533) 32%,
    rgba(255, 0, 0, 0.22461484593837533) 39%,
    rgba(0, 65, 255, 0.28904061624649857) 46%,
    rgba(104, 255, 0, 0.3114495798319328) 51%,
    rgba(255, 252, 0, 0.25262605042016806) 56%,
    rgba(0, 229, 251, 0.272233893557423) 61%,
    rgba(145, 0, 255, 0.25262605042016806) 70%,
    rgba(255, 255, 255, 0.4) 100%
  )`;

  card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                            scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
}

function cardtouchMove(event) {
  event.preventDefault();
  try {
    // let x = e.touches[0].clientX;
    // console.log(x);
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth / 2;
    const centerY = card.offsetTop + cardHeight / 2;
    const mouseX = event.touches[0].clientX - centerX;
    const mouseY = event.touches[0].clientY - centerY;
    const rotateXUncapped =
      +1 * ((tiltEffectSettings.max * mouseY) / (cardHeight / 2));
    const rotateYUncapped =
      -1 * ((tiltEffectSettings.max * mouseX) / (cardWidth / 2));
    const rotateX =
      rotateXUncapped < -tiltEffectSettings.max
        ? -tiltEffectSettings.max
        : rotateXUncapped > tiltEffectSettings.max
        ? tiltEffectSettings.max
        : rotateXUncapped;
    const rotateY =
      rotateYUncapped < -tiltEffectSettings.max
        ? -tiltEffectSettings.max
        : rotateYUncapped > tiltEffectSettings.max
        ? tiltEffectSettings.max
        : rotateYUncapped;

    let arad = Math.atan2(mouseY, mouseX);
    let angle = (arad * 180) / Math.PI - 90;

    if (angle < 0) {
      angle = angle + 360;
    }
    shiny.style.opacity = `1`;
    shiny.style.background = `linear-gradient(
    ${angle}deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 173, 6, 0.22461484593837533) 32%,
    rgba(255, 0, 0, 0.22461484593837533) 39%,
    rgba(0, 65, 255, 0.28904061624649857) 46%,
    rgba(104, 255, 0, 0.3114495798319328) 51%,
    rgba(255, 252, 0, 0.25262605042016806) 56%,
    rgba(0, 229, 251, 0.272233893557423) 61%,
    rgba(145, 0, 255, 0.25262605042016806) 70%,
    rgba(255, 255, 255, 0.4) 100%
  )`;

    card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                            scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
  } catch (err) {
    return;
  }
}

function cardMouseLeave(event) {
  shiny.style.opacity = `0`;
  setshinyTransition();
  card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  setTransition();
  card.classList.toggle("cardhide");
  thecard.classList.toggle("thecardhide");
}

function setTransition() {
  clearTimeout(card.transitionTimeoutId);
  card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
  card.transitionTimeoutId = setTimeout(() => {
    card.style.transition = "";
  }, tiltEffectSettings.speed);
}

function setshinyTransition() {
  shiny.style.transition = `.4s`;
  shiny.transitionTimeoutId = setTimeout(() => {
    shiny.style.transition = "";
  }, tiltEffectSettings.speed);
}

// --cardbackstyle---
const bccard = document.querySelector(".bccard");
const bcshiny = document.querySelector(".bcshiny");

bccard.addEventListener("mouseenter", bccardMouseEnter);
bccard.addEventListener("mousemove", bccardMouseMove);
bccard.addEventListener("mouseleave", bccardMouseLeave);
// ---mobile---
bccard.addEventListener("touchstart", bccardMouseEnter);
bccard.addEventListener("touchmove", bccardtouchMove);
bccard.addEventListener("touchend", bccardMouseLeave, hidebccard);

function bccardMouseEnter(event) {
  bcsetTransition();
  bcsetshinyTransition();
}
// function showbccard() {
//   card.classList.toggle("bccardhide");
//   thecard.classList.toggle("thecardhide");
// }
// function hidebccard() {
//   card.classList.toggle("bccardhide");
//   thecard.classList.toggle("thecardhide");
// }
function bccardMouseMove(event) {
  const cardWidth = bccard.offsetWidth;
  const cardHeight = bccard.offsetHeight;
  const centerX = bccard.offsetLeft + cardWidth / 2;
  const centerY = bccard.offsetTop + cardHeight / 2;
  const mouseX = event.clientX - centerX;
  const mouseY = event.clientY - centerY;
  const rotateXUncapped =
    +1 * ((tiltEffectSettings.max * mouseY) / (cardHeight / 2));
  const rotateYUncapped =
    -1 * ((tiltEffectSettings.max * mouseX) / (cardWidth / 2));
  const rotateX =
    rotateXUncapped < -tiltEffectSettings.max
      ? -tiltEffectSettings.max
      : rotateXUncapped > tiltEffectSettings.max
      ? tiltEffectSettings.max
      : rotateXUncapped;
  const rotateY =
    rotateYUncapped < -tiltEffectSettings.max
      ? -tiltEffectSettings.max
      : rotateYUncapped > tiltEffectSettings.max
      ? tiltEffectSettings.max
      : rotateYUncapped;

  let arad = Math.atan2(mouseY, mouseX);
  let angle = (arad * 180) / Math.PI - 90;

  if (angle < 0) {
    angle = angle + 360;
  }
  bcshiny.style.opacity = `1`;
  bcshiny.style.background = `linear-gradient(
    ${angle}deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 173, 6, 0.22461484593837533) 32%,
    rgba(255, 0, 0, 0.22461484593837533) 39%,
    rgba(0, 65, 255, 0.28904061624649857) 46%,
    rgba(104, 255, 0, 0.3114495798319328) 51%,
    rgba(255, 252, 0, 0.25262605042016806) 56%,
    rgba(0, 229, 251, 0.272233893557423) 61%,
    rgba(145, 0, 255, 0.25262605042016806) 70%,
    rgba(255, 255, 255, 0.4) 100%
  )`;

  bccard.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                            scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
}

function bccardtouchMove(event) {
  event.preventDefault();
  try {
    // let x = e.touches[0].clientX;
    // console.log(x);
    const cardWidth = bccard.offsetWidth;
    const cardHeight = bccard.offsetHeight;
    const centerX = bccard.offsetLeft + cardWidth / 2;
    const centerY = bccard.offsetTop + cardHeight / 2;
    const mouseX = event.touches[0].clientX - centerX;
    const mouseY = event.touches[0].clientY - centerY;
    const rotateXUncapped =
      +1 * ((tiltEffectSettings.max * mouseY) / (cardHeight / 2));
    const rotateYUncapped =
      -1 * ((tiltEffectSettings.max * mouseX) / (cardWidth / 2));
    const rotateX =
      rotateXUncapped < -tiltEffectSettings.max
        ? -tiltEffectSettings.max
        : rotateXUncapped > tiltEffectSettings.max
        ? tiltEffectSettings.max
        : rotateXUncapped;
    const rotateY =
      rotateYUncapped < -tiltEffectSettings.max
        ? -tiltEffectSettings.max
        : rotateYUncapped > tiltEffectSettings.max
        ? tiltEffectSettings.max
        : rotateYUncapped;

    let arad = Math.atan2(mouseY, mouseX);
    let angle = (arad * 180) / Math.PI - 90;

    if (angle < 0) {
      angle = angle + 360;
    }
    bcshiny.style.opacity = `1`;
    bcshiny.style.background = `linear-gradient(
    ${angle}deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 173, 6, 0.22461484593837533) 32%,
    rgba(255, 0, 0, 0.22461484593837533) 39%,
    rgba(0, 65, 255, 0.28904061624649857) 46%,
    rgba(104, 255, 0, 0.3114495798319328) 51%,
    rgba(255, 252, 0, 0.25262605042016806) 56%,
    rgba(0, 229, 251, 0.272233893557423) 61%,
    rgba(145, 0, 255, 0.25262605042016806) 70%,
    rgba(255, 255, 255, 0.4) 100%
  )`;

    bccard.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                            scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
  } catch (err) {
    return;
  }
}

function bccardMouseLeave(event) {
  bcshiny.style.opacity = `0`;
  setshinyTransition();
  bccard.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  setTransition();
  bccard.classList.toggle("bccardhide");
  thecard.classList.toggle("thecardhide");
}

function bcsetTransition() {
  clearTimeout(card.transitionTimeoutId);
  bccard.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
  bccard.transitionTimeoutId = setTimeout(() => {
    card.style.transition = "";
  }, tiltEffectSettings.speed);
}

function bcsetshinyTransition() {
  bcshiny.style.transition = `.4s`;
  bcshiny.transitionTimeoutId = setTimeout(() => {
    shiny.style.transition = "";
  }, tiltEffectSettings.speed);
}

// -----return-------

const rebtn = document.querySelector(".returnbtn");
const thecard = document.querySelector(".thecard");

const thefront = document.querySelector(".thefront");
const theback = document.querySelector(".theback");

rebtn.addEventListener("click", cardreturn);

function cardreturn() {
  card.classList.add("cardhide");
  bccard.classList.add("bccardhide");
  thecard.classList.remove("thecardhide");
  thecard.classList.toggle("thecardturnback");
}

thefront.addEventListener("mouseenter", f);
theback.addEventListener("mouseenter", b);

function f() {
  card.classList.toggle("cardhide");
  thecard.classList.toggle("thecardhide");
}

function b() {
  bccard.classList.toggle("bccardhide");
  thecard.classList.toggle("thecardhide");
}
//----mobileset----
thefront.addEventListener("touchstart", showcard);
theback.addEventListener("touchstart", showbccard);

function showcard() {
  card.classList.remove("cardhide");
  thecard.classList.add("thecardhide");
}
function showbccard() {
  bccard.classList.remove("bccardhide");
  thecard.classList.add("thecardhide");
}
function hidecard() {
  card.classList.add("cardhide");
  thecard.classList.remove("thecardhide");
}
function hidebccard() {
  bccard.classList.add("bccardhide");
  thecard.classList.remove("bcthecardhide");
}
