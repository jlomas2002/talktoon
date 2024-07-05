
navigator.geolocation.getCurrentPosition(calcDist);


function calcDist(position){
    const a =  54.97554 * Math.PI/180; 
    const b = position.coords.latitude * Math.PI/180;
    const c = (position.coords.latitude-54.97554) * Math.PI/180;
    const d = (position.coords.longitude-(-1.62272)) * Math.PI/180;
    
    const e = Math.sin(c/2) * Math.sin(c/2) +
              Math.cos(a) * Math.cos(b) *
              Math.sin(d/2) * Math.sin(d/2);
    const f = 2 * Math.atan2(Math.sqrt(e), Math.sqrt(1-e));
    
    const distance = 6371000 * f;

    const distanceMiles = distance * 0.000621371;

    const distMilesFixed = distanceMiles.toFixed(2);

    document.getElementById("distance").innerHTML = "Distance away from St James' Park: " + distMilesFixed +" miles.";
}


