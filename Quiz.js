function checkAnswers() {
    const form = document.forms.quizForm;
    let score = 0;
    let output = '';
  
    const answers = {
      q1: 'b',
      q2: 'c',
      q3: 'b',
      q4: 'stateless',
      q5: ['a', 'd']
    };
  // Above is the correct answers for the quiz
    // Question 1–3 (single choice)
    for (let i = 1; i <= 3; i++) {
      const selected = form[`q${i}`].value;
      if (selected === answers[`q${i}`]) {
        score++;
        output += `<p>Q${i}: Correct ✅</p>`;
      } else {
        output += `<p>Q${i}: Incorrect ❌ (Correct: ${answers[`q${i}`].toUpperCase()})</p>`;
      }
    }
  
    // Question 4 (text)
    const q4 = form.q4.value.trim().toLowerCase();
    if (q4 === answers.q4) {
      score++;
      output += `<p>Q4: Correct ✅</p>`;
    } else {
      output += `<p>Q4: Incorrect ❌ (Correct: Stateless)</p>`;
    }
  
    // Question 5 (multi-choice)
    const selectedCheckboxes = Array.from(form.q5).filter(box => box.checked).map(box => box.value);
    const correctSet = new Set(answers.q5);
    const selectedSet = new Set(selectedCheckboxes);
  
    const isCorrect =
      selectedCheckboxes.length === answers.q5.length &&
      selectedCheckboxes.every(val => correctSet.has(val));
  
    if (isCorrect) {
      score++;
      output += `<p>Q5: Correct ✅</p>`;
    } else {
      output += `<p>Q5: Incorrect ❌ (Correct: A and D)</p>`;
    }
  
    const resultText = `<h3>Your Score: ${score}/5</h3><p>${score >= 3 ? '✅ Pass!' : '❌ Fail. Try again!'}</p>`;
  
    const resultBox = document.getElementById('results');
    resultBox.innerHTML = resultText + output;
    resultBox.classList.remove('hidden');
  }
  
  function resetQuiz() {
    document.getElementById('quizForm').reset();
    const resultBox = document.getElementById('results');
    resultBox.innerHTML = '';
    resultBox.classList.add('hidden');
  }
