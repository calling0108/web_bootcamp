var x = 'global';

ex();
console.log(x);
function ex() {
  x = 'change';
  console.log(x);
}

alert(x); // 'change'