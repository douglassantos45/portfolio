/* TYPEDJS */
// Can also be included with a regular script tag
const typed = new Typed(".type", {
  strings: ["Developer FullStack", "Computer Student", "Linux Enthusiast"],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
});

document.querySelector("#birthdate").innerHTML = `${
  new Date().getFullYear() - 1998
}`;

/* filters skills */
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      tc.classList.remove("filters-active");
    });

    target.classList.add("filters-active");

    tabs.forEach((t) => {
      t.classList.remove("filter-tab-active");
    });

    tab.classList.add("filter-tab-active");
  });
});

/* toggle theme */
(function () {
  const toggleTheme = document.querySelector("#toggle-theme");

  const lightTheme = "light-theme";
  const iconTheme = "bi-moon";

  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  const getCurrentTheme = () =>
    document.body.classList.contains(lightTheme) ? "light" : "dark";

  const getCurrentIcon = () =>
    toggleTheme.classList.contains(iconTheme)
      ? "bi bi-moon"
      : "bi bi-brightness-high";

  if (selectedTheme) {
    document.body.classList[selectedTheme === "light" ? "add" : "remove"](
      lightTheme
    );
    toggleTheme.classList[selectedIcon === "bi bi-moon" ? "add" : "remove"](
      iconTheme
    );
  }

  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle(lightTheme);
    toggleTheme.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
})();

/* end toggle theme */

/* read more */
const buttonContinue = document.querySelector(".continue-reading a");
buttonContinue.addEventListener("click", () => {
  const postContent = document.querySelector(".about-me");
  postContent.innerHTML = text;
  postContent.classList.remove("preview-content");
  buttonContinue.style.display = "none";
});

/* read more */

/* scrollReveal */

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".image");
sr.reveal(".user-name", { delay: 500 });
sr.reveal(".social", { delay: 600 });
sr.reveal(".post", { delay: 700 });
sr.reveal(".info-profile", { interval: 100, delay: 700 });
sr.reveal(".contact", { delay: 800 });
sr.reveal(".filters-content", { delay: 200 });
sr.reveal(".projects-content", { delay: 200 });
/* END */

feather.replace();

const text = `Olá, meu nome é Douglas e sou estudante de Computação no Instituto Federal da Bahia, em Senhor do Bonfim. Desde os 14 anos, quando comecei a explorar o desenvolvimento web com HTML e CSS estático, minha paixão por tecnologia só tem crescido. Hoje, aos ${
  new Date().getFullYear() - 1998
} anos, continuo imerso no desenvolvimento web, utilizando frameworks modernos e aspirando a me tornar um desenvolvedor full-stack.
<br /><br />
Minha trajetória inclui a criação de projetos pessoais, como portfólios e blogs, utilizando tecnologias como ReactJS, Styled Components, CMS, e APIs desenvolvidas com NodeJS e Typescript. Além disso, tive a oportunidade de ministrar, junto com meus colegas, um minicurso de Introdução a Algoritmos em JavaScript, no qual também desenvolvemos um jogo chamado Memory Game, disponível no <a href="https://www.youtube.com/watch?v=h5i7P6rqAhU&t=5s" aria-label="link para o vídeo no youtube" target="_blank">YouTube</a>.
<br /><br />
Paralelamente, trabalhei em diversos projetos reais como freelancer para vários clientes, o que me proporcionou uma experiência prática valiosa e a oportunidade de aplicar meus conhecimentos em cenários diversos e desafiadores.
<br /><br />
Estou focado em alcançar meus objetivos acadêmicos e profissionais e, junto com meus colegas, busco constantemente oportunidades para formar grupos de estudo e desenvolver projetos pessoais como freelancer.`;
