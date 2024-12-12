let input = document.getElementById('inp');
let submit = document.getElementById('submit');
let table = document.getElementById('table')
let bb = [];
function decimalToBinary(decimalIP) {
    return decimalIP.split('.').map(dec => (parseInt(dec).toString(2)).padStart(8, '0')).join('.');
};

submit.addEventListener('click',function(){
    if(input.value != ""){
        let result = input.value;
        bb = decimalToBinary(result);

        
    }else{
        input.setAttribute('placeholder','no ip')
    }
    
    showData()
    


})

function showData(){
     table.innerHTML = bb;
}
