// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    //returns a distance in blocks 
    //calculates distance below 42nd street 
    if (distance > 42) {
        return distance - 42;
    } else {
        return 42 - distance;
    }
}

function distanceFromHqInFeet(distance){
    //returns a distance in feet 
    //calculates distance below 42nd street
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet (start, destination) {
    //returns the distance travelled in feet 
    // returns a distance in feet 
    //returns distance when destination is below distance
    if (start < destination) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination) {
     // gives customers a free sample 
    // charges 2 cents per foot when total feet travelled is 
    // between 400 and 20000
    // charges 25 dollars for a distance over 2000 feet 
    // does not allow rides over 2500 feet
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}



