// In the game of golf each hole has a par meaning the average number
// of strokes a golfer is expected to make in order to sink the ball
// in a hole to complete the play. Depending on how far above or below
// par your strokes are, there is a different nickname.

// Write a function that will be passed par and strokes arguments.
// Return the correct string according to this table which lists the
// strokes in order of priority; top (highest) to bottom (lowest):

// Strokes	Return
// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"
// par and strokes will always be numeric and positive.

const golfCode =  (par, strokes) => {
  let message;
  switch (true) {
    case (strokes === 1) :
      message = "Hole-in-one!"
      break;
    case (strokes <= par - 2) :
      message = "Eagle"
      break;
    case (strokes === par - 1) :
      message = "Birdie"
      break;
    case (strokes === par) :
      message = "Par"
      break;
    case (strokes === par + 1) :
      message = "Bogey"
      break;
    case (strokes === par + 2) :
      message = "Double Bogey"
      break;
    case (strokes >= par + 3) :
      message = "Go Home!"
      break;
    default:
      message = "Unexpected input";
      break;
  }
  return message;
}

console.log(golfCode(5,9))