const logoutButton = document.getElementById('logout-button')

const init = () => {

  const token = localStorage.getItem('token')
  if(!token){
    return window.location.href ='/'
  }

  else { 
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const queryToken = urlParams.get('token')
    if(!queryToken){
      window.location.href = `/home?token=${token}`
    }

  }


}


const handleLogout = (event) => {
  event.preventDefault()
  localStorage.removeItem('token')
  window.location.href = '/'
}
logoutButton.addEventListener('click', handleLogout)



init()