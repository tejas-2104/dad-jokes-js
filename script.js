const jokeContainer = document.getElementById('joke');
const getJokeBtn = document.getElementById('getJokeBtn');

getJokeBtn.addEventListener('click', fetchJoke);

async function fetchJoke() {
  try {
    const response = await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1', {
      headers: {
        'X-Api-Key': 'oH1AlHb6ECr1zTqf/vTtZw==lj6XTDpf0dm8nynW'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch joke');
    }

    const data = await response.json();

    if (!data || data.length === 0 || !data[0].joke) {
      throw new Error('No joke found');
    }

    const joke = data[0].joke;
    jokeContainer.textContent = joke;
  } catch (error) {
    console.error('Error fetching joke:', error);
    jokeContainer.textContent = 'Oops! Something went wrong. Please try again later.';
  }
}
