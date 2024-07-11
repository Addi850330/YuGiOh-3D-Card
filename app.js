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

function cardMouseLeave(event) {
  shiny.style.opacity = `0`;
  setshinyTransition();
  card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  setTransition();
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
