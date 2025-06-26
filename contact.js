document.getElementById("contactForm").addEventListener("submit", function(event) { /*On intercepte l'événement submit (lorsqu'on clique sur "Envoyer").

event.preventDefault() empêche le comportement par défaut du navigateur (envoi vers le serveur ou rechargement de la page).*/
    event.preventDefault(); //pour empecher le formulaire detre envoyer automatiquement
  
    // On récupère les champs saisis par l’utilisateur.
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
  
    // afficher un message d’erreur.
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
  
    // Avant chaque nouvelle validation, on vide les anciens messages d'erreur.
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
  
    let valid = true;/*Elle permet de savoir à la fin si toutes les vérifications sont passées.*/
  
   /*Si le champ est vide, on affiche une erreur*/
    if (name.value.trim() === "") {/*.trim() enlève les espaces vides au début et à la fin.*/
      nameError.textContent = "Le nom est requis.";
      valid = false;
    }
  
    // Vérification de l'email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;/*On teste d’abord s’il est vide, puis si le format est incorrect.*/
    if (email.value.trim() === "") {
      emailError.textContent = "L'email est requis.";
      valid = false;
    } else if (!emailPattern.test(email.value)) {
      emailError.textContent = "Email invalide.";
      valid = false;
    }
  
    // Vérification du message
    if (message.value.trim() === "") {
      messageError.textContent = "Le message est requis.";
      valid = false;
    }
  
    if (valid) {
      alert("Message envoyé !");
      document.getElementById("contactForm").reset();
    }
  });/*Une alerte s’affiche.

Le formulaire est vidé avec .reset().*/