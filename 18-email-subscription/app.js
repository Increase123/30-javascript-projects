const scriptURL = 'https://script.google.com/macros/s/AKfycbzki5lH4DvoIB8fN4uHh0YQ6CKKJkSmU1K2AtFiFIf5lZAFbx7_v-rGzfL51ZOHTyBpCw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Thank You For Subscribing!"
            setTimeout(function(){
               msg.innerHTML = "" 
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})