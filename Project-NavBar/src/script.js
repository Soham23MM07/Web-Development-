document.addEventListener("DOMContentLoaded", () => {
  const About = document.getElementById("About");
  const AboutSection = document.getElementById("AboutSection");
  const Works = document.getElementById("Works");
  const WorkSection = document.getElementById("WorkSection");

  About.addEventListener("click", () => {
    AboutSection.classList.toggle("hidden");
  });
  Works.addEventListener("click", () => {
    WorkSection.classList.toggle("hidden");
  });
});
