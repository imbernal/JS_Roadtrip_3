// Video 5.6 accompanies this exercise

// Now that we’ve got a Fencepost constructor function, let’s creates some
// posts! The cowboy-devs need three new posts for the Pastures:

x: -3,
y: 4,
postNum: 18

x: 5,
y: -1,
postNum: 19

x: -2,
y: 10,
postNum: 20

// Use your Fencepost constructor function to create these new posts. Name
// each of your posts post<number> with the correct number from the postNum property.
//
// Then, connect them with the sendRopeTo function using the following
// criteria, and remember that one connection requires ropes to be sent from
// both posts:
//
//  1. If two posts both have even-numbered y coordinates, they should be connected.
//  2. If two posts both have odd-numbered x coordinates, they should be connected.


function Fencepost(x,y,postNum){

  this.x = x;
  this.y = y;
  this.postNum;
  this.connectionsTo = [];
  this.sendRopeTo = function(connectedPost){
    this.connectionsTo.push(connectedPost);
  };

}

var fancePost18 = new Fancepost(-3,4,18);
var fancePost19 = new Fancepost(5,-1,19);
var fancePost20= new Fancepost(-2,10,20);

fancePost18.sendRopeTo(fancePost20);
fancePost20.sendRopeTo(fancePost18);
fancePost18.sendRopeTo(fancePost19);
fancePost19.sendRopeTo(fancePost18);
