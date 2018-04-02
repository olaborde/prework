// Rover Object Goes Here
// ======================

// ======================

var myRover = {
  x: 0,
  y: 0,
  direction: 'N',
  travelLog: []
};

turnRight(myRover);
turnRight(myRover);
turnRight(myRover);
turnLeft(myRover);
goForward(myRover);

takeCommands('ffrlfrrflfffrlf', myRover);

 function goForward(rover) {
   rover.travelLog.push([rover.x, rover.y]);
   switch(rover.direction) {
     case 'N':
      rover.y++;
      break;
    case 'E':
      rover.x++;
      break;
    case 'S':
      rover.y--;
      break;
    case 'W':
      rover.x--;
      break;
   }
  
    console.log("New Rover Position: [" + rover.x + ", " + rover.y + "]");

  }





function turnRight(rover){
  console.log("turnRight was called!");
  if (rover.direction === 'N') {
    rover.direction = 'E';
  } else if (rover.direction === 'E') {
    rover.direction = 'S';
  } else if (rover.direction === 'S') {
    rover.direction = 'W';
  } else if (rover.direction === 'W') {
    rover.direction = 'N';
  }
  console.log('rover is facing ' + rover.direction);
}

function turnLeft(rover) {
  console.log('turnLeft() was called');
  if (rover.direction === 'N') {
    rover.direction = 'W';
  } else if (rover.direction === 'E') {
    rover.direction = 'N';
  } else if (rover.direction === 'S') {
    rover.direction = 'E';
  } else if (rover.direction === 'W') {
    rover.direction = 'S';
  }
  console.log('rover is facing ' + rover.direction);
}

// commandString is in the form: "fffrrlfrl" commandString[0] is 'f' commandString[1] 'f'
function takeCommands (commandString, rover) {
  var i;
  for (i = 0; i < commandString.length; i++) {
    switch (commandString[i]) {
      case 'f':
        goForward(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
    }
  }
  console.log('Here is the travel log: ');
  console.log(rover.travelLog);
}