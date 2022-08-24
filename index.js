let travellingDistance;
let distanceCovered;
let farePrice;

function distanceFromHqInBlocks(pickupLocation){
    if(pickupLocation >= 42) {
        travellingDistance = pickupLocation - 42;
    }
    else {
        travellingDistance = 42 - pickupLocation;
    }
    return travellingDistance
}

function distanceFromHqInFeet(pickupLocation){
    distanceFromHqInBlocks(pickupLocation);
    distanceFromHqInFeet = travellingDistance * 264;
    return distanceFromHqInFeet;
}

function distanceTravelledInFeet(start, destination){
    if(destination > start){
        distanceCovered = (destination - start) * 264;
        return distanceCovered;
    }
    if(start > destination) {
        distanceCovered = (start - destination) * 264;
        return distanceCovered;
    }
}

function calculatesFarePrice(start, destination){
    distanceTravelledInFeet(start, destination);

    if(distanceCovered >= 0 && distanceCovered <= 400){
        return farePrice = 0;
    }
    else if(distanceCovered > 400 && distanceCovered <= 2000){
        return farePrice = ((distanceCovered - 400) * 0.02);
    }
    else if (distanceCovered > 2000 && distanceCovered < 2500){
        return farePrice = 2500 / 100;
    }
    else {
        return "cannot travel that far";
    }
}
