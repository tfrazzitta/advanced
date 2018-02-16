
var scoreArray=[];
$(document).ready(function(){	
		$("#t-body").empty();
  	$("#th-append").empty();
 // $("#myModal").modal("toggle")
 // $("#mod-bod").html("Rotate your phone to landscape");

 	$.ajax({
    method: "GET",
    url: '/get-one-test'
  }).done(function(test) {
  		console.log("test")
  		console.log(test)

  		QuestionArray=[test[0].q1, test[0].q2,test[0].q3,test[0].q4,test[0].q5,
                       test[0].q6, test[0].q7,test[0].q8,test[0].q9,test[0].q10]
        
        // $("#th-append").append('<th>First Name</th><th>Last Name</th>');
        $("#th-append").append('<th>Full Name</th>');

        for(i=0;i<QuestionArray.length;i++){
        x= i+1               
  	 	$("#th-append").append('<th><br>'+x+'.<br>'+ QuestionArray[i]+'</th>')
  	 	}
  	 	$("#th-append").append('<th>score</th>');


	$.ajax({
        method: "GET",
        url: '/show-one-in-table'
      }).done(function(data) {

      	if(data.length==0){
      		return false;
      	}
      	console.log(data)
	      	for(i=0;i<data.length;i++){

			      			console.log(data)
				      		if(data[i].q1===test[0].Choice1 && data[i].q1 !=undefined){
				      			data[i].score++;
				      			console.log("bbb")
				      		}

				      		if(data[i].q2===test[0].Choice2 && data[i].q2 !=""){
				      			data[i].score++;
				      			console.log("bbb")
				      		}

				      		if(data[i].q3===test[0].Choice3 && data[i].q3 !=undefined){
				      			data[i].score++;
				      			console.log("bbb")
				      		}

				      		if(data[i].q4===test[0].Choice4 && data[i].q4 !=undefined){
				      			data[i].score++;
				      			console.log("bbb")
				      		}

				      		if(data[i].q5===test[0].Choice5 && data[i].q5 !=undefined){
				      			data[i].score++;
				      			console.log("bbb")
				      		}

				      		if(data[i].q6===test[0].Choice6 && data[i].q6 !=undefined){
				      			data[i].score++;
				      			console.log("bbb")
				      		}

				      		if(data[i].q7===test[0].Choice7 && data[i].q7 !=undefined){
				      			data[i].score++;
				      			console.log("bbb")
				      		}


				      		if(data[i].q8===test[0].Choice8 && data[i].q8 !=undefined){
				      			data[i].score++;
				      			console.log("bbb")
				      		}

				      		if(data[i].q9===test[0].Choice9 && data[i].q9 !=undefined){
				      			data[i].score++;
				      			console.log("bbb")
				      		}

				      		if(data[i].q10===test[0].Choice10 && data[i].q10 !=undefined){
				      			data[i].score++;
				      			console.log("bbb")
				      		}
		      			scoreArray.push(data[i])
	      			//}	  //else
	    	}     //for loop end
	    	ArrangeScore(scoreArray,test);
      })// .done end

  })
})


var avgArray=[];
function ArrangeScore(scoreArray,test){
	$("#t-body").empty();
	console.log(scoreArray)
	var total = 0;
	var sum=0;
		for(var i = 0; i < scoreArray.length; i++) {
			console.log(scoreArray)
    		total += scoreArray[i].score;
    		var scoreP= scoreArray[i].score *10;
    		avgArray.push(scoreP)
		}

		console.log(avgArray)

		for(var i = 0; i < avgArray.length; i++) {
    		sum += avgArray[i];
    		//var scoreP= scoreArray[i].count *100;
    		//scoreP.push(avgArray)
		}
		
		var avg = sum / scoreArray.length;
		console.log(typeof avg)
			if(avg !== avg){
				$("#percentage").html("");
			}
			else{
				$("#percentage").html(avg +" % average")
			}
		

   
		console.log(scoreArray)
		console.log(test)
		var count= 10;
	    $("#t-body").append(
	   	"<tr style='background-color:lightgreen;color:black;'><td>Answer</td><td>"
	   	+test[0].Choice1+
	   	"</td><td>"+test[0].Choice2+
	   	"</td><td>"+test[0].Choice3+
	   	"</td><td>"+test[0].Choice4+
	   	"</td><td>"+test[0].Choice5+
	   	"</td><td>"+test[0].Choice6+
	   	"</td><td>"+test[0].Choice7+
	   	"</td><td>"+test[0].Choice8+
	   	"</td><td>"+test[0].Choice9+
	   	"</td><td>"+test[0].Choice10+
	   	"</td><td>"+count+
	   	"</td></tr>");	
	
 	scoreArray.sort(function(a, b){
		return b.score-a.score;
	});

	for(i=0;i<scoreArray.length;i++){
		if(scoreArray.length===0){
			return false;
		}
		else{
			$("#t-body").append(
	       	"<tr id='winner'><td>"+scoreArray[i].name+
	       	// "</td><td>"+scoreArray[i].lastName+
	       	"</td><td>"+scoreArray[i].q1+
	       	"</td><td>"+scoreArray[i].q2+
	       	"</td><td>"+scoreArray[i].q3+
	       	"</td><td>"+scoreArray[i].q4+
	       	"</td><td>"+scoreArray[i].q5+
	       	"</td><td>"+scoreArray[i].q6+
	       	"</td><td>"+scoreArray[i].q7+
	       	"</td><td>"+scoreArray[i].q8+
	       	"</td><td>"+scoreArray[i].q9+
	       	"</td><td>"+scoreArray[i].q10+
	       	"</td><td id='"+i+"'>"+scoreArray[i].score+
	       	"</td></tr>");

	       	if(i===0 && count>0 ){
	       		$("#winner").css("background-color","gold");
	       		$("#winner").css("color","black");
	       	}
		}

	}

}






// $(function() {
//     $("form input").keypress(function (e) {
//         if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
//             $('button[type=submit] .default').click();
//             var x = $("#pass").val();
//             //return false;
//         } else {
//             return true;
//         }
//     });
// });

    


// 	var pel =0;
// $("#flip").click(function(){
// 	console.log("IM IN")
// 	var x = $("#pass").val();

// console.log(pel)
// 	if(pel==1 && x ==="pass"){
// 	    $("#panel").slideUp("slow");
// 	    pel--;
// 	    console.log("SSSSSSSSS")
//  	}

//     else if(pel==0 && x ==="pass"){
// 	 	$("#panel").slideDown("slow");
// 	 	console.log("FAIL")
// 	    pel++;
// 	    return false;
//     }

//     else{
// 	 	console.log("herre")
// 	 	return false;
//     }

// });


// window.onbeforeunload = function() {
//         return "Dude, are you sure you want to leave? Think of the kittens!";

//     }

// window.onbeforeunload = function(e) {
// 	console.log(e)
// var message = 'Are you sure you want to leave?';
//   return message;
// }

//   $(document).on("click","button",function(){
//   	console.log("JJJJJ")
//   })




 //  $(document).on("click","#all-student-results",function(){
 //  	scoreArray=[];
 //  	$("#t-body").empty();
 //  	$("#th-append").empty();
 // 	$.ajax({
 //    method: "GET",
 //    url: '/get-one-test'
 //  	}).done(function(test) {
 //  		console.log("test")
 //  		console.log(test)

 //  		QuestionArray=[test[0].q1, test[0].q2,test[0].q3,test[0].q4,test[0].q5,
 //                       test[0].q6, test[0].q7,test[0].q8,test[0].q9,test[0].q10]
        
 //        $("#th-append").append('<th>First Name</th><th>Last Name</th>');

 //        for(i=0;i<QuestionArray.length;i++){
 //        x= i+1               
 //  	 	$("#th-append").append('<th><br>'+x+'.<br>'+ QuestionArray[i]+'</th>')
 //  	 	}
 //  	 	$("#th-append").append('<th>score</th>');


	// $.ajax({
 //        method: "GET",
 //        url: '/show-all-in-table'
 //      }).done(function(data){
 //      	console.log(data)
	//       	for(i=0;i<data.length;i++){

	// 		      			console.log(data)
	// 			      		if(data[i].q1===test[0].Choice1 && data[i].q1 !=undefined){
	// 			      			data[i].score++;
	// 			      			console.log("bbb")
	// 			      		}

	// 			      		if(data[i].q2===test[0].Choice2 && data[i].q2 !=""){
	// 			      			data[i].score++;
	// 			      			console.log("bbb")
	// 			      		}

	// 			      		if(data[i].q3===test[0].Choice3 && data[i].q3 !=undefined){
	// 			      			data[i].score++;
	// 			      			console.log("bbb")
	// 			      		}

	// 			      		if(data[i].q4===test[0].Choice4 && data[i].q4 !=undefined){
	// 			      			data[i].score++;
	// 			      			console.log("bbb")
	// 			      		}

	// 			      		if(data[i].q5===test[0].Choice5 && data[i].q5 !=undefined){
	// 			      			data[i].score++;
	// 			      			console.log("bbb")
	// 			      		}

	// 			      		if(data[i].q6===test[0].Choice6 && data[i].q6 !=undefined){
	// 			      			data[i].score++;
	// 			      			console.log("bbb")
	// 			      		}

	// 			      		if(data[i].q7===test[0].Choice7 && data[i].q7 !=undefined){
	// 			      			data[i].score++;
	// 			      			console.log("bbb")
	// 			      		}


	// 			      		if(data[i].q8===test[0].Choice8 && data[i].q8 !=undefined){
	// 			      			data[i].score++;
	// 			      			console.log("bbb")
	// 			      		}

	// 			      		if(data[i].q9===test[0].Choice9 && data[i].q9 !=undefined){
	// 			      			data[i].score++;
	// 			      			console.log("bbb")
	// 			      		}

	// 			      		if(data[i].q10===test[0].Choice10 && data[i].q10 !=undefined){
	// 			      			data[i].score++;
	// 			      			console.log("bbb")
	// 			      		}
	// 	      			scoreArray.push(data[i])
	//       			//}	  //else
	//     	}     //for loop end
	//     	ArrangeScore(scoreArray,test);
 //      })// .done end

 //  })	

 //  })