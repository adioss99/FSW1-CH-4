/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)
console.log(params);

/*
 * Contoh penggunaan DOM di dalam class
 * */

let clear = document.getElementById('clear-btn');
let load = document.getElementById('load-btn');
load.addEventListener('click', function () {
  let driver = document.getElementById('inputDriver').value;
  let date = document.getElementById('startDate').value;
  let time = document.getElementById('select-time').value;
  let seat = document.getElementById('seat').value;
  const get = new Filter(driver, date, time, seat);
  const menu = driver != 'null' && date != '' && time != 'null';
  // console.log(driver, date, time, seat);
  let optional = seat == '' || seat == '0' ? false : true  
  console.log(optional)
    if (menu && optional === false) {
      console.log('Filter');
      get.filter().then(get.run);
    } else if (menu && optional === true) {
      console.log('optionalFilter');
      get.optionalFilter().then(get.run);
    } else {
      console.log('all');
      get.init().then(get.run);
    }
});

clear.addEventListener('click', function () {
  let get = new Filter();
  get.clear();
});
