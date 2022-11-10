function addPartecipant(partecipantName){

}
const genera = document.getElementById('add-hero');
let partecipantName = document.getElementById("partecipant");
let partecipantsList = document.querySelector(".partecipants-list");

genera.addEventListener('click' , function(){
   
   if (partecipants.length < 2) {
       partecipants.push(partecipantName.value);
       let listItem = document.getElementById("template-list-item").content.cloneNode(true);
       listItem.querySelector('.partecipants-list-item').innerHTML= partecipantName.value
       partecipantsList.append(listItem)
    }else{
        alert('TESTA A CERBOTTANA SIAMO GIA ARRIVATI A 16')
    }
    partecipantName .value = "";
})

let partecipants = [];

let partecipant = {
    name :'titolo',
    chatName : 'PowerMuffin',
    icon: 'url'
}
   
        
       
   
    
    
    