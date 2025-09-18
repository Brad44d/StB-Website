document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(button => {
    button.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const isActive = faqItem.classList.contains('active');

      // Schließe alle anderen Items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      // Toggle aktuelles Item
      if (!isActive) {
        faqItem.classList.add('active');

        // Optional: Scroll zu langen Antworten (für mobile Nutzer)
        const answer = this.nextElementSibling;
        if (answer.scrollHeight > 200) {
          answer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  });
});
