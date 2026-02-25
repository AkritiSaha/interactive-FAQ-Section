// Function to show/hide answer when question is clicked
function toggleAnswer(element) {
  const answer = element.nextElementSibling;

  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}

// Function to add new FAQ dynamically
function addFAQ() {
  const question = document.getElementById("questionInput").value.trim();
  const answer = document.getElementById("answerInput").value.trim();

  if (!question || !answer) return;

  const container = document.getElementById("faq-container");

  const card = document.createElement("div");
  card.className = "faq-card";

  card.innerHTML = `
    <div class="faq-question" onclick="toggleAnswer(this)">
      ${question}
    </div>
    <div class="faq-answer">
      ${answer}
    </div>
  `;

  container.appendChild(card);

  document.getElementById("questionInput").value = "";
  document.getElementById("answerInput").value = "";
}
