const form = document.getElementById('login-form')

const handleLogin = (event) => {
  event.preventDefault()
  // Get all the form data
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData)
  fetch('/api/auth/login',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(formProps)

  })
  .then(res => res.json()).then(data => {
    // redirect to /home if we get a token back
    // lets just store the token in local storage and set it in the url
    if(data.token){
      localStorage.setItem('token', data.token)
      window.location.href = `/home?token=${data.token}`;
    }
    else {
      console.log('Not  able to login')
    }

    
  }).catch(error => {
    console.log(error)
  })
}

form.addEventListener('submit', handleLogin)