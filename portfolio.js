/*Génération dynamique des cartes de projets*/
const projets = [
    {
      image: "imagetpfinal/mode.png",
      titre: "Mode",
      description: "(HTML CSS.)",
      github: "https://github.com/refka-jebali/tppoubelle"
    },
    {
      image: "imagetpfinal/blog.png",
      titre: "Blogpersonnel",
      description: "(HTML CSS.)",
      github: "https://github.com/refka-jebali/tppoubelle"
    },
    {
      image: "imagetpfinal/agenceweb.png",
      titre: "Agence Web",
      description: "(HTML CSS.)",
      github: "https://github.com/refka-jebali/tppoubelle"
    },
    {
      image: "imagetpfinal/portfoliophotographe.png",
      titre: "Portfolio Photographe",
      description: "(HTML CSS.)",
     github: "https://github.com/refka-jebali/tppoubelle"
    },
    {
      image: "imagetpfinal/portfolio.png",
      titre: "Mon portfolio ",
      description: "(HTML CSS JS.)",
     github:"https://github.com/refka-jebali/tppoubelle"
    },
    {
      image: "imagetpfinal/figmaebook.png",
      titre: "Ebook",
      description: "(FIGMA)",
      github:"https://github.com/refka-jebali/tppoubelle"
    },
    {
      image: "imagetpfinal/figmaportfolio.png",
      titre: "Portfolio",
      description: "(FIGMA)",
      github:"https://github.com/refka-jebali/tppoubelle"
        },
      {
      image: "imagetpfinal/comingsoon.png",
      titre: "A venir",
      description: "(A venir)",
      github:"https://github.com/refka-jebali/tppoubelle"
  
    },
  ];
  
  const galerie = document.getElementById("projetgalerie");/*Récupère l’élément avec l’id projetgalerie.*/
  
  projets.forEach(projet => {
    const carte = document.createElement("div");/*Crée un <div class="carte">.*/
    carte.className = "carte"; /*Ajoute le contenu HTML (image, titre, description, bouton).*/
    carte.innerHTML = `
      <img src="${projet.image}" alt="${projet.titre}"> 

<h3>${projet.titre}</h3> <p>${projet.description}</p> 
<a href="${projet.github}" target="_blank" class="btn-projet">Voir le code</a> `;
    galerie.appendChild(carte);/*L’insère dans le DOM à l’intérieur de .projetgalerie.*/
  });

document.querySelectorAll('.carte').forEach(carte => {
    carte.style.opacity = 0.5; /*Chaque carte commence avec une opacité réduite (0.5) et une position décalée vers le bas (50px).*/
    carte.style.transform = 'translateY(50px)'; //translateY(30px) : la décale vers le bas de 30 pixels
  });
 //L'événement scroll est déclenché chaque fois que l'utilisateur défile la page
  window.addEventListener('scroll', () => { //Écoute du scroll L'événement scroll est déclenché chaque fois que l'utilisateur défile la page
   
    document.querySelectorAll('.carte').forEach(carte => { //Vérifier la position de chaque carte
      const rect = carte.getBoundingClientRect(); /* À chaque défilement (scroll), on vérifie la position de chaque .carte par rapport à la fenêtre (avec getBoundingClientRect()).*/
      if (rect.top < window.innerHeight - 50) { //rect.top : distance entre le haut de la carte et le haut de l'écran 
        //Si le haut de la carte est à moins de 50px du bas de la fenêtre, elle est considérée "en train d'entrer dans l’écran" C’est à ce moment qu’on déclenche l’animation
        carte.style.transition = 'all 0.6s ease-out';// rend le tout fluide.
        carte.style.opacity = 1;//opacity: 1 :  elle devient complètement opaque. visible
        carte.style.transform = 'translateY(0)'; //transform: translateY(0) : elle revient à sa position normale
      }
    });
});