// Function to show/hide answer when question is clicked
function toggleAnswer(element) {
  const answer = element.nextElementSibling;

  if (answer.classList.contains("show")) {
    answer.classList.remove("show");
    setTimeout(() => {
      answer.style.display = "none";
    }, 400); // Match the animation duration
  } else {
    answer.style.display = "block";
    setTimeout(() => {
      answer.classList.add("show");
    }, 10); // Small delay to trigger animation
  }
}

// Function to add new FAQ dynamically
function addFAQ() {
  const questionInput = document.getElementById("questionInput");
  const answerInput = document.getElementById("answerInput");

  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();

  if (!question || !answer) {
    alert("Please enter both question and answer.");
    return;
  }

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

  // Clear input fields
  questionInput.value = "";
  answerInput.value = "";
}