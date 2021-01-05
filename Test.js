/******************************************************************************/
function result_first() {
   let inputIn = document.getElementById('input1').value;
   if(inputIn > 7)
    {
      document.getElementById('output1').innerHTML = "Привет";
    }
}
            
   document.getElementById('submit1').addEventListener('click', result_first);
/******************************************************************************/
           
function result_second() {
   let inputIn = document.getElementById('input2').value;
   if(inputIn == "Вячеслав")
    {
      document.getElementById('output2').innerHTML = "Привет, Вячеслав";
    }
    else
    {
      document.getElementById('output2').innerHTML = "Нет такого имени"; 
    }
}
         
document.getElementById('submit2').addEventListener('click', result_second);

/******************************************************************************/   
function result_third() {
   let inputIn = document.getElementById('input3').value.split(',');
   let answer = [];
     
   inputIn.forEach(function (item, index, arr)
   { 
      if(item % 3 == 0)
      {
         answer.push(item);
      }   
   })

   document.getElementById('output3').innerHTML = answer;
}
      
document.getElementById('submit3').addEventListener('click', result_third);
/******************************************************************************/

    function isValid() {
    
    let str = document.getElementById('input4').value.split('');
     
    let openSquare = [];
    let openRound = [];
    let closeBrakets = [];
    let map = {
        '(': ')',
        '[': ']',
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
              openRound[i]=str[i];
        }
        else if(str[i] === ')'){
            let last = openRound[openRound.length-1];

            if (str[i] !== map[last]) {closeBrakets[i]=str[i]}
            else{openRound.pop()}
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '[') {
            openSquare[i]=str[i];
        }
        else if(str[i] === ']'){
            let last = openSquare[openSquare.length-1];

            if (str[i] !== map[last]) {closeBrakets[i]=str[i];}
            else{openSquare.pop()}
        }
    }
        
       function clean(obj){
       let newArr = [];
        obj.forEach(function(item, index) {
             if(item !== undefined)
             {
               index++;
               document.getElementById('output4').innerHTML += 'индекс ' + index + ' ' + 'скобка ' + item + '<br>';
             }
          });
       }   
       document.getElementById('output4').innerHTML += 'Лишние:<br>'
       clean(openSquare);  
       clean(openRound);  
       clean(closeBrakets);
       
       document.getElementById('output4').innerHTML += 'Совет:<br>' + 'удалить лишние скобки для баланса или изменить одну скобку на другую при равных количестве.'
}

document.getElementById('submit4').addEventListener('click', isValid);
/******************************************************************************/
