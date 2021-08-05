import $ from 'jquery';
import './style.scss';

let num = 0;
function printSecond() {
  $('#main').html(`You have been on this page for ${num} seconds.`);
  // eslint-disable-next-line linebreak-style
  num += 1;
}

setInterval(() => { printSecond(); }, 1000);
