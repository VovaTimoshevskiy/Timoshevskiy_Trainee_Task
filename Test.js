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
  let stack = [];
  let incorect = [];
  let map = {
      '(': ')',
      '[': ']',
  }
  for (var prop in map) 
  {
  for (let i = 0; i < str.length; i++) 
  {
    if (str[i] === prop) {
        stack.push(str[i]);
    }
    
    else if(str[i] === map[prop]){

        let last = stack[stack.length-1];

        if (str[i] !== map[last]) 
        {
          incorect.push(str[i]);
        }
        else
        {
          stack.pop();
        }
    }
}
};

  if (stack.length === 0 && incorect.length === 0) 
  {
    document.getElementById('output4').innerHTML += "Баланс соблюден<br>";
  }
  else
  {
    stack.forEach(function(element) {
      document.getElementById('output4').innerHTML += "Нет пары для "+ element + "<br>";
    });
    incorect.forEach(function(element) {
      document.getElementById('output4').innerHTML += "Нет пары для "+ element + "<br>";
    });

    document.getElementById('output4').innerHTML += "Совет: Удалить не имеющие пары скобок или добавить пару<br>";
  }
}

document.getElementById('submit4').addEventListener('click', isValid);
/******************************************************************************/


