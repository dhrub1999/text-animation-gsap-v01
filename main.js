import gsap from "gsap";
import SplitTextJS from "split-text-js";

const titles = gsap.utils.toArray("p");
const tl = gsap.timeline();

titles.forEach((title) => {
  const splitText = new SplitTextJS(title);

  tl.from(
    splitText.chars,
    {
      opacity: 0,
      y: 80,
      rotateX: -90,
      stagger: 0.02,
    },
    "<"
  ).to(
    splitText.chars,
    {
      opacity: 0,
      y: -80,
      rotateX: 90,
      stagger: 0.02,
    },
    "<1"
  );
});
