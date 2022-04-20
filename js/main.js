//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const token = config.MY_API_TOKEN

document.querySelector('button').addEventListener('click', getPic)

function getPic() {

  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  const dateToFormat = randomDate(new Date(1995, 06, 20), new Date());
  const searchDate = dateToFormat.toISOString().substring(0, 10);
  console.log(searchDate);

  const url = `https://api.nasa.gov/planetary/apod?api_key=${token}=${searchDate}`



  fetch(url)
    .then(res => res.json()) // parse response as JSON
      .then(data => {
        
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