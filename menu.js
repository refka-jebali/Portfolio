/*On crée une chaîne de caractères contenant du HTML.

Les backticks (`) permettent d’écrire sur plusieurs lignes (template literals).*/
const menuHTML = `
<nav id="navigation">
  <ul class="menu">
    <li class="menuitem"><a href="index.html">Accueil</a></li>
    <li class="menuitem"><a href="apropos.html">Services</a></li>
    <li class="menuitem"><a href="portfolio.html">Portfolio</a></li>
    <li class="menuitem cta"><a href="contact.html">Contact</a></li>
  </ul>
</nav>
`;

document.getElementById("menu").innerHTML = menuHTML;/*document.querySelectorAll("nav a") sélectionne tous les liens dans la balise <nav>.*/
/*À chaque clic (addEventListener("click", ...)) */

document.querySelectorAll("nav a").forEach(link => {/*.forEach(link => {...}) : on boucle sur chaque lien.*/
  link.addEventListener("click", (event) => {
    document.querySelectorAll("nav a").forEach(el => el.classList.remove("active"));
    event.target.classList.add("active");/*On enlève la classe active sur tous les liens (.classList.remove("active")).

Puis on ajoute active sur le lien cliqué (event.target.classList.add("active")).*/
    
  });
});