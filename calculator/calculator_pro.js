 
 var restart = false;
//  var start = true;

 
  // for pie
document.querySelector('#pie').addEventListener('click', function () {
        answer.value += Math.PI;
    })

    // for degree
    document.querySelector('#deg').addEventListener('select', function(radians){
        answer.value = radians * 180 / Math.PI;
    })
    // Math.degrees = function(radians) {
    //     return radians * 180 / Math.PI;
    //   };

// for sin
document.querySelector('#sin').addEventListener('click', function () {
        answer.value = Math.sin(screenn.value);
    })

// for cos
document.querySelector('#cos').addEventListener('click', function () {
        answer.value = Math.cos(screenn.value);
    })

// for tan
document.querySelector('#tan').addEventListener('click', function () {
        answer.value = Math.tan(screenn.value);
    })

// for squareroot
        //  document.querySelector('#equal').addEventListener('click', function () {
        //     var root = document.getElementById('screenn').value;

        //     if (sign.value = '√'){
        //     screenn.value += sign.value;
        //     var getValueInsideRoot = root.slice(1,6);
        //     answer.value = Math.sqrt(getValueInsideRoot);
        //     }
        // })
      

// for exponential
             document.querySelector('#power').addEventListener('click', function (){
                    screenn.value += '**';
             })

// for square
    document.querySelector('#square').addEventListener('click', function () {
     answer.value = eval(screenn.value) * eval(screenn.value);
    })

// for numbers
    var figure = document.querySelectorAll('#num')
    figure.forEach(element => {
        element.addEventListener('click', function () {
            if(restart) {
                answer.value = '';
                screenn.value += element.value;
                restart = false;
            } else
            screenn.value += element.value
        })
    });

    // for bracket
    document.getElementById('equal').addEventListener('click', function(){
    var bracket = document.getElementById("screenn").value;
    var openBrack = bracket.indexOf('(');
    var closeBrack = bracket.indexOf(')');
    var extract = (bracket.slice(openBrack + 1, closeBrack));
    var figB4Brack = (bracket.slice(0, openBrack));
    var product = eval(figB4Brack) * eval(extract);
       answer.value = product;
    })

    
  
    // for start
    // document.querySelector('#screenn').addEventListener('click', function(){
    //     if (start){
    //         screenn.value = '';
    //         screenn.value = '0';
    //         start = true;
    //     } else
    //     screenn.value = '0'
    // });
    
   //for operators
    document.querySelectorAll('#sign').forEach(operator => {
        operator.addEventListener('click', function () {
        screenn.value += operator.value;
        })
    });

    // for changeSign
    document.querySelector('#changeSign').addEventListener('click', function () {
            if(screenn.value.substring(0, 1) == "-"){
            screenn.value = screenn.value.substring(1, screenn.value.length)
            }else
            screenn.value = "-" + screenn.value
        })

    // for eqaul (=)
    document.getElementById('equal').addEventListener('click',function() {
    var result = document.getElementById('screenn').value
    var equals = eval(result)
    restart = true;
    document.getElementById("answer").value = equals;
    
});

//   for delete in one step
  document.querySelector('#back').addEventListener('click',function() {
      var del = document.getElementById('screenn').value;
  var deletee = del.substring(0, del.length-1);
  document.getElementById("screenn").value = deletee;
  });


//   for clear answer or screen
  document.querySelector('#clear').addEventListener('click',function() {
      var clear = document.getElementById('answer').value;
  var clearScreen = clear.substring(0,0);
  document.getElementById("answer").value = clearScreen;
  }) || document.querySelector('#clear').addEventListener('click',function() {
    var clear = document.getElementById('screenn').value; 
  var clearScreen = clear.substring(0,0);
  document.getElementById("screenn").value= clearScreen;
  });

//   for clear screen or answer
  document.querySelector('#clear1').addEventListener('click',function() {
    var clear = document.getElementById('screenn').value; 
  var clearScreen = clear.substring(0,0);
  document.getElementById("screenn").value= clearScreen;
  }) || document.querySelector('#clear1').addEventListener('click',function() {
    var clear = document.getElementById('answer').value;
var clearScreen = clear.substring(0,0);
document.getElementById("answer").value = clearScreen;
});
 
  document.write(Date());