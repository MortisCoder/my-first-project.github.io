document.getElementById('quizButton').addEventListener('click', function () {
	document.getElementById('quiz').style.display = 'block';
	this.style.display = 'none'; // Скрыть кнопку после нажатия
});

document.getElementById('submitQuiz').addEventListener('click', function () {
	const questions = document.querySelectorAll('.question');
	let resultText = '';
	let allCorrect = true; // Флаг для проверки всех правильных ответов

	questions.forEach((question, index) => {
		const answerInput = question.querySelector('.answer');
		const correctAnswer = question.querySelector('.correct-answer').textContent.trim().toLowerCase();

		if (answerInput.value.trim().toLowerCase() === correctAnswer) {
			resultText += `Вопрос ${index + 1}: Правильно!\n`;
			question.querySelector('.answer').classList.add('correct');
			question.querySelector('.answer').classList.remove('incorrect');
		} else {
			resultText += `Вопрос ${index + 1}: Неправильно! Правильный ответ: ${correctAnswer}\n`;
			question.querySelector('.answer').classList.add('incorrect');
			allCorrect = false; // Если хоть один ответ неправильный, устанавливаем флаг в false
		}

		// Обработчик ввода для изменения классов
		answerInput.addEventListener('input', function () {
			if (this.value.trim().toLowerCase() === correctAnswer) {
				this.classList.add('correct');
				this.classList.remove('incorrect');
			} else {
				this.classList.remove('correct');
				this.classList.add('incorrect');
			}
		});
	});

	document.getElementById('result').textContent = resultText;

	// Если все ответы правильные, запускаем конфетти
	if (allCorrect) {
		confetti();
	}
});

document.getElementById('theme-toggle').addEventListener('click', function () {
	document.body.classList.toggle('light-theme');
	if (document.body.classList.contains('light-theme')) {
		this.textContent = 'Сменить на темную тему';
	} else {
		this.textContent = 'Сменить на светлую тему';
	}
});
