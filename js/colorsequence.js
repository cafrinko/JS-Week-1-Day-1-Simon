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
