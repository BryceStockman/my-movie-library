const form = document.getElementById('register-form')

const handleLogin = (event) => {
  event.preventDefault()
  // Get all the form data
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData)
  fetch('/api/auth/register',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(formProps)

  })
  .then(res => res.json()).then(data => {
    // redirect to /home if we get a token back
    // lets just store the token in local storage and set it in the url
    localStorage.setItem('token', data.token)
    window.location.href = `/home?token=${data.token}`;

    
  })
}

form.addEventListener('submit', handleLogin)