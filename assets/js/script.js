/* TYPEDJS */
// Can also be included with a regular script tag
const typed = new Typed(".type", {
  strings: ["Developer FullStack", "Computer Student", "Linux Enthusiast"],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
});

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

const text = `Olá, meu nome é Douglas. Sou estudante de Computação no Instituto Federal baiano de Senhor do Bonfim e apaixonado por tecnologia. Comecei minha jornada como programador no desenvolvimento pessoal de serviços WEB com HTML e CSS estático quando tinha 14 anos. Hoje tenho 24 anos e continuo no desenvolvimento WEB, porém, como muitos dizem, utilizando os super “poderes” dos frameworks e tentando ser full-stack. Já trabalhei com projetos pessoais como portfólios e blogs usando ReactJS, Styled Components, CMS, API com NodeJS e Typescript. Como acadêmico, ministrei junto com meus colegas um minicurso de INTRODUÇÃO A ALGORITMO EM JAVASCRIPT e criamos um “game” chamado Memory Game, que está disponível na plataforma do Youtube <a href="https://youtu.be/HBbky2hqbOg" class="bi bi-youtube">(link)</a>. Como estudante tenho objetivos tanto acadêmicos como profissionais e junto com colegas, busco sempre criar grupos de estudos para desenvolvermos projetos pessoais como freelancer.`;
