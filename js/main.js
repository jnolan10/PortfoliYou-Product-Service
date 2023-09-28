function changeToJon(){
    //window.alert("Switching To Jon!");
    window.location = "../html/jonathan.html";
}

function changeToBadar(){
    //window.alert("Switching To Jon!");
    window.location = "../html/home.html";
}

function moveToHome(){
    window.location = "../homepage.html";
}

function moveToContact(){
    window.location = "../html/Contact_Us.html";
}

function moveToAbout(){
    window.location = "../html/About_Us.html";
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbw07kdLWXcbvPPbpvGXquymsjWCxGnSZroVmGLJJg9L7tzaytdPQQGLKeykGXki4EwY/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  });
  


