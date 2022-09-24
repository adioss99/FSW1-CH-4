const btn = document.getElementById('load-btn');
const edit = document.getElementById('clear-btn');
const con = document.getElementById('btn-search');
// edit.style.display = 'none';
const bg = document.getElementById('dark-bg');
btn.addEventListener('click', function handleClick() {
  btn.innerHTML = 'Edit';
  btn.style = null;
  btn.className = 'btn btn-outline-primary';
  bg.style.width = '0';
  con.style.marginRight = '-200px';

  window.onload = inactiveDarkBackground;
  // btn.style.display = 'none';
  // edit.style.display = 'block';
});
// edit.addEventListener('click', function handleClick() {
//   edit.style.display = 'none';
//   btn.style.display = 'block';
// });

function activeDarkBackground() {
  console.log('activeDarkBackground');
  console.log(bg);
  bg.style.width = '100%';
}

function inactiveDarkBackground() {
  console.log('inactiveDarkBackground');
  console.log(bg);
  bg.style.width = '0';
}
