const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
  finialResult(getData);
});

function finialResult(cb) {
  const url = "https://randomuser.me/api/";
  const ajax = new XMLHttpRequest();
  ajax.open('GET', url, true);

  ajax.onload = function () {
    if (this.status === 200) {
      cb(this.responseText, showData);
    } else {
      this.onerror();
    }
  }

  ajax.onerror = function () {
    console.log('There are an error.');
  }

  ajax.send();

}

function getData(response, cb) {
  const data = JSON.parse(response);
  console.log(data)
  const {
    name: {
      first
    },
    name: {
      last
    },
    picture: {
      large
    },
    location: {
      country
    },
    location: {
      city
    },
    phone: phone,
    email: email
  } = data.results[0]
  cb(data, first, last, large, country, city, phone, email)
}

function showData(data, first, last, large, country, city, phone, email) {
  console.log(data)
  document.getElementById('first').textContent = first;
  document.getElementById('last').textContent = last;
  document.getElementById('photo').src = large;
  document.getElementById('country').textContent = country;
  document.getElementById('city').textContent = city;
  document.getElementById('phone').textContent = phone;
  document.getElementById('email').textContent = email;
}