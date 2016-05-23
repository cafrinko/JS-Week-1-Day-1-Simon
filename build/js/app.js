(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Simon = require('./../js/colorsequence.js').Simon;
$(document).ready(function(){
  $('.grid').click(function(){
    event.preventDefault();

    var blue = $('#blue').val();
    var red = $('#red').val();
    var green = $('#green').val();
    var yellow = $('#yellow').val();

    var newSimon = new Simon(blue, red, green, yellow);
    var orderList = newSimon.orderSequence();


    newSimon.lightUp(orderList);
    console.log(orderList);


  });
});

},{"./../js/colorsequence.js":2}],2:[function(require,module,exports){
exports.Simon = function(blue, red, green, yellow){
  this.blue = blue;
  this.red = red;
  this.green = green;
  this.yellow = yellow;
};

exports.Simon.prototype.orderSequence = function(){
  var min = 1;
  var max = 4;
  var orderList = [];

  for(var i = 0; i < 5; i++){
    orderList.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return orderList;
};

exports.Simon.prototype.lightUp = function(orderList){
  for(var i = 0; i < orderList.length; i++){
    if(orderList[i] === 1){
      $('#blue').addClass("lightup");
      // document.getElementById('#blue').classList.add("lightup");
    } else if(orderList[i] === 2){
      $('#red').addClass("lightup");
      // document.getElementById('#red').classList.add("lightup");
    } else if(orderList[i] === 3){
      $('#green').addClass("lightup");
      // document.getElementById('#green').classList.add("lightup");
    } else if(orderList[i] === 4){
      $('#yellow').addClass("lightup");
      // document.getElementById('#yellow').classList.add("lightup");
    }
  }
};

},{}]},{},[1]);
