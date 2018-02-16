

$('form').submit(function(event) {
  $("#error-message").html("");
  event.preventDefault();
  var firstName=$("#first-name").val();
  var lastName=$("#last-name").val();
    //Questions//
  var q1=$("#q1").val();
  var q2=$("#q2").val();
  var q3=$("#q3").val();
  var q4=$("#q4").val();
  var q5=$("#q5").val();
  var q6=$("#q6").val();
  var q7=$("#q7").val();
  var q8=$("#q8").val();
  var q9=$("#q9").val();
  var q10=$("#q10").val();

  var testName=$("#testName").val();

  //MULTIPLE CHOICE ANSWERS//
   var a1=$("#a1").val();
   var b1=$("#b1").val();
   var c1=$("#c1").val();
   var d1=$("#d1").val();

   var a2=$("#a2").val();
   var b2=$("#b2").val();
   var c2=$("#c2").val();
   var d2=$("#d2").val();

   var a3=$("#a3").val();
   var b3=$("#b3").val();
   var c3=$("#c3").val();
   var d3=$("#d3").val();


   var a4=$("#a4").val();
   var b4=$("#b4").val();
   var c4=$("#c4").val();
   var d4=$("#d4").val();

   var a5=$("#a5").val();
   var b5=$("#b5").val();
   var c5=$("#c5").val();
   var d5=$("#d5").val();

   var a6=$("#a6").val();
   var b6=$("#b6").val();
   var c6=$("#c6").val();
   var d6=$("#d6").val();


   var a7=$("#a7").val();
   var b7=$("#b7").val();
   var c7=$("#c7").val();
   var d7=$("#d7").val();


   var a8=$("#a8").val();
   var b8=$("#b8").val();
   var c8=$("#c8").val();
   var d8=$("#d8").val();

   var a9=$("#a9").val();
   var b9=$("#b9").val();
   var c9=$("#c9").val();
   var d9=$("#d9").val();

   var a10=$("#a10").val();
   var b10=$("#b10").val();
   var c10=$("#c10").val();
   var d10=$("#d10").val();


console.log(q1)


console.log(q4)
// console.log($('#q1').prop('checked'))

  var questionArray=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10]
  var answerArray=[a1,b1,c1,d1,a2,b2,c2,d2,a3,b3,c3,d3,a4,b4,c4,d4,a5,b5,c5,d5,a6,b6,c6,d6,a7,b7,c7,d7,a8,b8,c8,d8,a9,b9,c9,d9,a10,b10,c10,d10];

  for(i=0;i<questionArray.length;i++){
    var x =i+1;
      if(questionArray[i]===""){
        $("#error-message").html("Please create a question for number "+ x);
        return false;
      }
  }



  for(i=0;i<questionArray.length;i++){
      var x =i+1;
      if(questionArray[i]==undefined){
         $("#error-message").html("An answer is missing for number "+ x);
        return false;
      }
  }


  for(i=0;i<answerArray.length;i++){
      if(answerArray[i]===""){
        $("#error-message").html("An answer is missing for one of the questions!");
        console.log("bbbb")
        return false;
      }
  }

  if(testName===""){
        $("#error-message").html("Give your test a Name");
        console.log("test")
        return false;
      }


    // if(firstName===""||lastName===""||q1===""||q2===""||q3===""||q4===""||q5===""||q6===""||q7===""||q8===""||q9===""||q10===""){
    //   $("#error-message").html("Please create more questions!");
   	//   return false;
    // }

    //  if(a1===""||a2===""||a3===""||a4===""||a5===""||a6===""||a7===""||a8===""||a9===""||a10===""||
    //     b1===""||b2===""||b3===""||b4===""||b5===""||b6===""||b7===""||b8===""||b9===""||b10===""||
    //     c1===""||c2===""||c3===""||c4===""||c5===""||c6===""||c7===""||c8===""||c9===""||c10===""||
    //     d1===""||d2===""||d3===""||d4===""||d5===""||d6===""||d7===""||d8===""||d9===""||d10===""){
    //     $("#error-message").html("An answer is missing for one of the questions!");
    //     return false;
    // }



    
   // else{
      $("#error-message").html("Good Luck!");
	    var form = this;
      console.log(this)
	    setTimeout( function () { 
	        form.submit();
	    }, 1000);

	 // }

}); 


$(document).on("click","body",function(){
  $("#error-message").html("");
})