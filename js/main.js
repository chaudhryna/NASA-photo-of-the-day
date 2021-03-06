import TOKEN from 'js/config.js';
//The user will click the button. The program will generate a random date to get the NASA picture of the day for that date! https://api.nasa.gov/
// const TOKEN = config.TOKEN;

document.querySelector('button').addEventListener('click', getPic)

function getPic() {

  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  const dateToFormat = randomDate(new Date(1995, 06, 20), new Date());
  const searchDate = dateToFormat.toISOString().substring(0, 10);

  const url = `https://api.nasa.gov/planetary/apod?api_key=${TOKEN}=${searchDate}`



  fetch(url)
    .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('.container').classList.remove('hidden')
        if (data.media_type === 'image') {
          document.querySelector('iframe').src = ""
          document.querySelector('img').src = data.url 
        } else if (data.media_type === 'video') {
          document.querySelector('img').src = ""
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('h2').innerText = data.title
        document.querySelector('p').innerText = data.explanation
      })
      .catch(err => {
        console.log(`error ${err}`)
      })
}