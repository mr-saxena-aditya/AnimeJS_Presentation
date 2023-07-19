// Replace 'YOUR_API_KEY' with your actual OpenAI API key
const apiKey = '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';

const generateOpinionBtn = document.getElementById('generateOpinionBtn');
const slideTitleDiv = document.querySelector('.slide-title');
const aiOpinionDiv = document.querySelector('.AI-Opinion');

generateOpinionBtn.addEventListener('click', () => {
  const slideTitleText = slideTitleDiv.textContent.trim();

  // Call the function to send text to the AI and receive the generated sentences
  getAIOpinion(slideTitleText).then((opinion) => {
    aiOpinionDiv.textContent = opinion;
  }).catch((error) => {
    console.error(error);
    aiOpinionDiv.textContent = "Error generating AI opinion.";
  });
});

async function getAIOpinion(inputText) {
  try {
    const response = await fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: inputText,
        max_tokens: 50,
        temperature: 0.7,
        stop: '\n'
      })
    });

    const data = await response.json();
    const opinion = data.choices[0].text.trim();
    return opinion;
  } catch (error) {
    throw new Error('Failed to generate AI opinion.');
  }
}
