//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const token = config.MY_API_TOKEN

document.querySelector('button').addEventListener('click', getPic)

function getPic() {
  // const searchDate = document.querySelector('input').value

  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  const searchDate = randomDate(new Date(1995, 06, 16), new Date());
  console.log(d);

  const url = `https://api.nasa.gov/planetary/apod?api_key=${token
}=${searchDate}`

  // if (searchDate < '1995-06-16') {
  //   document.querySelector('h2').innerText = 'No picture found for that date. Photo requests must be after 06/16/1995'
  // } else {

  fetch(url)
    .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.title
        if (data.media_type === 'image') {
          document.querySelector('iframe').src = ""
          document.querySelector('img').src = data.url 
        } else if (data.media_type === 'video') {
          document.querySelector('img').src = ""
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('p').innerText = data.explanation
      })
      .catch(err => {
        console.log(`error ${err}`)
      })
}