/* Formulaires (contact et newsletter) : envoi sans recharger la page.
   Chaque formulaire concerné porte data-success="…" (message de réussite)
   et contient un <p class="form-status"></p> où s'affichent les messages. */
document.querySelectorAll('form[data-success]').forEach(function (form) {
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');

  // Affiche un message ; state vaut "loading", "success" ou "error" (couleurs dans le CSS)
  function show(message, state) {
    status.textContent = message;
    status.className = 'form-status is-' + state;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    show('Envoi en cours...', 'loading');
    button.disabled = true;

    fetch(form.action, { method: 'POST', body: new FormData(form) })
      .then(function (response) {
        if (!response.ok) throw new Error('Erreur lors de l\'envoi');
        show(form.dataset.success, 'success');
        form.reset();
      })
      .catch(function () {
        show('Oops ! Une erreur est survenue. Veuillez réessayer plus tard.', 'error');
      })
      .finally(function () {
        button.disabled = false;
      });
  });
});
