$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    $('#randomNumber').text(Random);
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    var userTotal= 0;
    var wins= 0;
    var losses= 0;
    $('numberWins').text(wins);
    $('numberLosses').text(losses);

    function success() {
    alert("You did it!");
    wins++;
    $('numberWins').text(wins);
    reset()
    }
    function failure() {
        alert("You have failed.");
        losses++;
        $('numberLosses').text(losses);
        reset()
        }
    function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
    
$('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
    console.log(userTotal);
        if (userTotal == Random){
          success();
        }
        else if ( userTotal > Random){
          failure();
        } 
  })  
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          success();
        }
        else if ( userTotal > Random){
          failure();
        } 
  })  
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          success();
        }
        else if ( userTotal > Random){
          failure();
        } 
  })  
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          success();
        }
        else if ( userTotal > Random){
          failure();
        } 
  })  

})