const secondHand = document.querySelector(".secHand");
const hourHand = document.querySelector(".hourHand");
const minHand = document.querySelector(".minHand");

function setDate() {
    const timeNow = new Date();

    // creates a date object

    const seconds = timeNow.getSeconds(); 

    // retreiving the current seconds from the date object 
    const secForclock = ((seconds/60)* 360 ) + 90;
 

    // converting the seconds into degrees making it possible to align a second to a single degree
    
    secondHand.style.transform = "rotate(" + secForclock + "deg)";

    // //style.transform is a property that allows to apply transformations to an element such as rotation(through the rotate function)

    const minutes = timeNow.getMinutes();
    
    // retreiving the current mintues from the date object 

    const minForclock = ((minutes/60)*360) + ((seconds/60)*6) + 90;
   
    minHand.style.transform = "rotate(" + minForclock + "deg)";
    


    const hour = timeNow.getHours();

    // retreiving the current mintues from the date object 

    const hourForclock = ((hour/12)*360) + ((minutes/60)*30) + 90;
    
    hourHand.style.transform = "rotate(" + hourForclock + "deg)";

  
    
}

setInterval(setDate,1000);

setDate();




