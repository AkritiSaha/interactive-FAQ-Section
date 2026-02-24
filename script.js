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
  const input = document.getElementById("questionInput");
  const question = input.value.trim();
  if (!question) return;

  const container = document.getElementById("faq-container");

  let answer = "Thank you for your question. Our team will update this FAQ soon.";

  if (question.toLowerCase().includes("ai")) {
    answer = "Artificial Intelligence enables machines to think and learn.";
  } 
  else if (question.toLowerCase().includes("data")) {
    answer = "Data is raw information used for analysis and decision-making.";
  }
  else if (question.toLowerCase().includes("machine")) {
    answer = "Machine learning helps systems learn from experience.";
  }

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
  input.value = "";
}