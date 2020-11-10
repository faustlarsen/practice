import { Entry } from './journal.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';



$(document).ready(function () {
  $('#title).submit(function(event) {
    event.preventDefault();
  let inputtedTitle = $("#title").val();
  let inputtedBody = $("#body").val();
  let entry = new Entry(inputtedTitle, inputtedBody);
  let str = entry.body;
  let x = entry.calculateWords(str);
  console.log(x);
  $("#numberWords").append("<p>" + x + "</p>");
  //$('#response').append("<p>" + response + "</p>");
});






