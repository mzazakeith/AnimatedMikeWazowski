var timeID;

function stopAnimate(){
    clearInterval(timeID);
}

function animateScript(){
    var position =90;
    const interval =100;
    const diff = 90;

    timeID = setInterval( () => {
        document.getElementById("image").style.backgroundPosition = 
        `-${position}px 0px`;

        if( position< 630){
            position = position + diff;
        }else{
            position =100;
        }

    }, interval)

}