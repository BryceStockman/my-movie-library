const imageHover = document.querySelector('.img');
const deleteBtn = document.querySelector('.delete-btn');
const confirmBtn = document.querySelector('.confirm-btn');

deleteBtn.addEventListener('click', (e) => {
  let targetEl = e.target;
  console.log(targetEl.id);
  if (targetEl.id == 'confirm-btn') {
    console.log('confirm button created');
  }

  deleteBtn.setAttribute('id', 'confirm-btn');
  deleteBtn.innerText = 'Confirm';
});

imageHover.addEventListener('mouseout', () => {
  deleteBtn.removeAttribute('id');
  deleteBtn.innerText = 'Delete';
});

// confirmBtn.addEventListener('click', 'confirm-btn', () => {
//   console.log('confirm button was clicked');
// });
