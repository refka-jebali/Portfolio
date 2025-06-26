 /* Insertion dans le DOM*/
 const footerHTML = `
  <footer>
    <div class="footer-content">
      <p>&copy; 2025 MonSite. Tous droits réservés.</p>
    </div>
  </footer>
`;

document.getElementById("footer").innerHTML = footerHTML;
/*document.getElementById("footer") cible un élément HTML avec l’attribut id="footer".*/
/*.innerHTML = footerHTML insère le contenu HTML défini dans footerHTML à l’intérieur de cet élément.*/