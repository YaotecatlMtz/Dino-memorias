const card = $(".card");
let finishedCounter = 0;
let clickedCards = [];
let imagesToInsert = ["src/Espinosaurio.jpeg","src/Anotitan.jpeg", "src/Anquilosaurio.jpeg",  "src/Erectopus.jpeg", 
                    "src/braquiosaurio.jpeg", "src/Mosasaurio.jpeg", "src/pterodactilo.jpeg","src/T-rex.jpeg", 
                    "src/triceratops.jpeg", "src/velociraptor.jpeg","src/Espinosaurio.jpeg","src/Anotitan.jpeg", 
                    "src/Anquilosaurio.jpeg",  "src/Erectopus.jpeg", "src/braquiosaurio.jpeg", "src/Mosasaurio.jpeg", 
                    "src/pterodactilo.jpeg","src/T-rex.jpeg", "src/triceratops.jpeg", "src/velociraptor.jpeg"];
let idArray = ['#0','#1','#2','#3','#4','#5','#6','#7','#8','#9','#10','#11','#12','#13','#14','#15','#16','#17','#18','#19'];

function classRemover(){
    $(clickedCards[0].children()).removeClass('flipped');
    $(clickedCards[1].children()).removeClass('flipped');
    clickedCards=[];
}

function cleanStr(str){
    str = str.split('/')[1];
    str = str.split('.')[0];
    return str;
}

function randNumber(maxValue) {  
    let minValue = 0;
    return Math.floor(Math.random() * (maxValue - minValue) + minValue);
}


$(document).ready(function () {
    for(let i = 0; i < 20; i++){
        let indexArray = randNumber(imagesToInsert.length);
        let idHtml = idArray[indexArray] 
        let cleanedstr = cleanStr(imagesToInsert[indexArray]);
        $(idHtml).attr({
            'src': imagesToInsert[indexArray],
            'class': cleanedstr,
            'alt':cleanedstr 
        });
        imagesToInsert.splice(imagesToInsert.indexOf(imagesToInsert[indexArray]), 1);
        idArray.splice(idArray.indexOf(idArray[indexArray]), 1);
    }
});

card.on('click', function(e){
    e.preventDefault();
    if(clickedCards.length < 2){
        if(clickedCards.length == 1 && clickedCards[0].children().attr('id') === $(this).children().attr('id')){
            alert('presiona una carta diferente');
        }else if(!$(this).children().hasClass('disable-div')){
            clickedCards.push($(this));
            $(this).children().addClass('flipped'); 
        }
    }
    if(clickedCards.length == 2){
        $('.container').css('pointer-events', 'none');
        setTimeout(()=>{
            if($(clickedCards[0]).children().attr('class') == $(clickedCards[1]).children().attr('class') && $(clickedCards[0]).children().attr('id') != $(clickedCards[1]).children().attr('id')){
                clickedCards.forEach((element)=>{
                    $(element).children().addClass('disable-div');
                });
                console.log('par');
                finishedCounter += 2;
            }else{
                classRemover();
            }
            clickedCards = [];
            $('.container').css('pointer-events', '');
            
            if(finishedCounter == 20){
                alert('Haz ganao, todo un crack');
                location.reload();
            }
        }, 1500);
        
    }
    
    
});