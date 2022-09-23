const btn = document.getElementById('load-btn');
const edit = document.getElementById('clear-btn');
const con = document.getElementById('btn-search');
edit.style.display = 'none';
btn.addEventListener('click', function handleClick() {
  btn.style.display = 'none';
  edit.style.display = 'block';
});
edit.addEventListener('click', function handleClick() {
  edit.style.display = 'none';
  btn.style.display = 'block';
});
