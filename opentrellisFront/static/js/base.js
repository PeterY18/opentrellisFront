let animateElement;
let prevRatio = 0.0;

window.addEventListener("load", (event) => {
  animateElement = document.querySelector("#tools");
}, false);

function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(animateElement);
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.IntersectionRatio > prevRatio) {
      entry.target.style.animationName = "fadein";
      document.getElementById("tools").style.animationName = "fadein";
    }
    else {
      entry.target.style.animationName = "fadein";
      document.getElementById("tools").style.animationName = "fadein";
    }
    prevRatio = entry.IntersectionRatio;
  });
}
      document.getElementById("tools").style.animationName = "fadein";