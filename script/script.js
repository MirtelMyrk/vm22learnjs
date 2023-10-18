let num = 10;
if(num > 10){
    console.log('suurem');
} else if(num === 10) {
    console.log('võrdne');
} else {
    console.log('väiksem');
}

let day = new Date().getDay();
console.log(day);


switch(day){
    case 0:
        console.log('Pühapäev');
        break;
    case 1:
        console.log('Esmaspäev');
        break;
    case 2:
         console.log('Teisipäev');
         break;
    case 3:
         console.log('Kolmapäev');
         break;
    case 4:
         console.log('Neljapäev');
         break;
    case 5:
         console.log('Reede');
         break;
    case 6:
         console.log('Laupäev');
         break;
    default:
        console.log('weirdday');
}
// kui break; pole ss ta jätkab lugemist kuni tuleb break