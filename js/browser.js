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
