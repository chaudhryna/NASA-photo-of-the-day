//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// /apod?api_key=DEMO_KEY&date=2014-10-01&concept_tags=True

document.querySelector('button').addEventListener('click', getPic)

function getPic() {
  const searchDate = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=2K1qWo2Q2ZodxvWO25vuQyjJU07zFMFchTcSjvmU&date=${searchDate}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.title
        document.querySelector('img').src = data.url
        document.querySelector('p').innerText = data.explanation
      })
      .catch(err => {
        console.log(`error ${err}`)
      })
  }