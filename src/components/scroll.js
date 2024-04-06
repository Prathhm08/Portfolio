export default function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const yOffset = -60;
    const y =
      targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
