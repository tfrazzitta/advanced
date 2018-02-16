
var scoreArray=[];
$(document).ready(function(){	
// $("#myModal").modal("toggle")
// $("#mod-bod").html("Rotate your phone to landscape");
$.ajax({
    method: "GET",
    url: '/get-test'
  }).done(function(data) {
  		QuestionArray=[data[0].q1, data[0].q2,data[0].q3,data[0].q4,data[0].q5,
                       data[0].q6,data[0].q7,data[0].q8,data[0].q9,data[0].q10]
        
        $("#th-append").append('<th>First Name</th><th>Last Name</th>');

        for(i=0;i<QuestionArray.length;i++){
        x= i+1               
  	 	$("#th-append").append('<th><br>'+x+'.<br>'+ QuestionArray[i]+'</th>')
  	 	}
  	 	$("#th-append").append('<th>score</th>');


	$.ajax({
        method: "GET",
        url: '/show-answer'
      }).done(function(answer) {
      	console.log(answer)

      	console.log(answer.length)
		$.ajax({
	        method: "GET",
	        url: '/show-all-in-table'
	      }).done(function(data) {
	      	for(i=0;i<data.length;i++){
	      		if(answer.length===0){
		      		$("#t-body").append(
			       	"<tr><td>"+data[i].firstName+
			       	"</td><td>"+data[i].lastName+
			       	"</td><td>"+data[i].q1+
			       	"</td><td>"+data[i].q2+
			       	"</td><td>"+data[i].q3+
			       	"</td><td>"+data[i].q4+
			       	"</td><td>"+data[i].q5+
			       	"</td><td>"+data[i].q6+
			       	"</td><td>"+data[i].q7+
			       	"</td><td>"+data[i].q8+
			       	"</td><td>"+data[i].q9+
			       	"</td><td>"+data[i].q10+
			       	"</td><td id='"+i+"'>"+data[i].score+
			       	"</td></tr>");
	      		}  //if 

	      		else{
	      			console.log(data)
		      		if(data[i].q1===answer[0].q1 && data[i].q1 !=undefined){
		      			data[i].score++;
		      			console.log("bbb")
		      		}

		      		if(data[i].q2.toLowerCase() ===answer[0].q2.toLowerCase() && data[i].q2 !=""){
		      			data[i].score++;
		      			console.log("bbb")
		      		}

		      		if(data[i].q3===answer[0].q3 && data[i].q3 !=undefined){
		      			data[i].score++;
		      			console.log("bbb")
		      		}

		      		if(data[i].q4===answer[0].q4 && data[i].q4 !=undefined){
		      			data[i].score++;
		      			console.log("bbb")
		      		}

		      		if(data[i].q5===answer[0].q5 && data[i].q5 !=undefined){
		      			data[i].score++;
		      			console.log("bbb")
		      		}

		      		if(data[i].q6===answer[0].q6 && data[i].q6 !=undefined){
		      			data[i].score++;
		      			console.log("bbb")
		      		}

		      		if(data[i].q7===answer[0].q7 && data[i].q7 !=undefined){
		      			data[i].score++;
		      			console.log("bbb")
		      		}


		      		if(data[i].q8===answer[0].q8 && data[i].q8 !=undefined){
		      			data[i].score++;
		      			console.log("bbb")
		      		}

		      		if(data[i].q9===answer[0].q9 && data[i].q9 !=undefined){
		      			data[i].score++;
		      			console.log("bbb")
		      		}

		      		if(data[i].q10===answer[0].q10 && data[i].q10 !=undefined){
		      			data[i].score++;
		      			console.log("bbb")
		      		}
		      		scoreArray.push(data[i])
	      		}  //else
	    	}     //for loop end
	    	ArrangeScore(scoreArray,answer);
	    });    // .done end
	});
  });	 
})			

	    	

function ArrangeScore(scoreArray,answer){
	console.log(answer)
   
	console.log(scoreArray)
	
	if(answer.length>0){
		var count=0;
		for(var x in answer[0]) {
 	 		count++;
		}

		// if(answer[0].q2 !=""){
		// 	count++
		// }

		// if(answer[0].q20 !=""){
		// 	count++
		// }

		count = count - 5;
		console.log(count)

		console.log(answer)
		if(answer[0].q1===undefined){
	      	answer[0].q1="";
		 }
		 
		 if(answer[0].q2===undefined){
	      	answer[0].q2="";
		 }


		if(answer[0].q3===undefined){
	      	answer[0].q3="";
		 }

		 if(answer[0].q4===undefined){
	      	answer[0].q4="";
		 }

		 if(answer[0].q5===undefined){
	      	answer[0].q5="";
		 }

		 if(answer[0].q6===undefined){
	      	answer[0].q6="";
		 }

		 if(answer[0].q7===undefined){
	      	answer[0].q7="";
		 }

		 if(answer[0].q8===undefined){
	      	answer[0].q8="";
		 }

		 if(answer[0].q9===undefined){
	      	answer[0].q9="";
		 }

		 if(answer[0].q10===undefined){
	      	answer[0].q10="";
		 }

		 // if(answer[0].q11===undefined){
	  //     	answer[0].q11="";
		 // }

		 // if(answer[0].q12===undefined){
	  //     	answer[0].q12="";
		 // }

		 // if(answer[0].q13===undefined){
	  //     	answer[0].q13="";
		 // }

		 // if(answer[0].q14===undefined){
	  //     	answer[0].q14="";
		 // }

		 // if(answer[0].q15===undefined){
	  //     	answer[0].q15="";
		 // }

		 // if(answer[0].q16===undefined){
	  //     	answer[0].q16="";
		 // }

		 // if(answer[0].q17===undefined){
	  //     	answer[0].q17="";
		 // }

		 // if(answer[0].q18===undefined){
	  //     	answer[0].q18="";
		 // }

		 //  if(answer[0].q19===undefined){
	  //     	answer[0].q19="";
		 // }

		 // if(answer[0].q20===undefined){
	  //     	answer[0].q20="";
		 // }
		console.log(answer)
	    $("#t-body").append(
	   	"<tr style='background-color:lightgreen;color:black;'><td>"+answer[0].firstName+
	   	"</td><td>"+answer[0].lastName+
	   	"</td><td>"+answer[0].q1+
	   	"</td><td>"+answer[0].q2.toLowerCase()+
	   	"</td><td>"+answer[0].q3+
	   	"</td><td>"+answer[0].q4+
	   	"</td><td>"+answer[0].q5+
	   	"</td><td>"+answer[0].q6+
	   	"</td><td>"+answer[0].q7+
	   	"</td><td>"+answer[0].q8+
	   	"</td><td>"+answer[0].q9+
	   	"</td><td>"+answer[0].q10+
	   	// "</td><td>"+answer[0].q11+
	   	// "</td><td>"+answer[0].q12+
	   	// "</td><td>"+answer[0].q13+
	   	// "</td><td>"+answer[0].q14+
	   	// "</td><td>"+answer[0].q15+
	   	// "</td><td>"+answer[0].q16+
	   	// "</td><td>"+answer[0].q17+
	   	// "</td><td>"+answer[0].q18+
	   	// "</td><td>"+answer[0].q19+
	   	// // "</td><td>"+answer[0].q20.toLowerCase()+
	   	"</td><td>"+count+
	   	"</td></tr>");	
	} 

 	scoreArray.sort(function(a, b){
		return b.score-a.score;
	});

	for(i=0;i<scoreArray.length;i++){
		if(scoreArray.length===0){
			return false;
		}
		else{
			$("#t-body").append(
	       	"<tr id='winner'><td>"+scoreArray[i].firstName+
	       	"</td><td>"+scoreArray[i].lastName+
	       	"</td><td>"+scoreArray[i].q1+
	       	"</td><td>"+scoreArray[i].q2.toLowerCase()+
	       	"</td><td>"+scoreArray[i].q3+
	       	"</td><td>"+scoreArray[i].q4+
	       	"</td><td>"+scoreArray[i].q5+
	       	"</td><td>"+scoreArray[i].q6+
	       	"</td><td>"+scoreArray[i].q7+
	       	"</td><td>"+scoreArray[i].q8+
	       	"</td><td>"+scoreArray[i].q9+
	       	"</td><td>"+scoreArray[i].q10+
	       	// "</td><td>"+scoreArray[i].q11+
	       	// "</td><td>"+scoreArray[i].q12+
	       	// "</td><td>"+scoreArray[i].q13+
	       	// "</td><td>"+scoreArray[i].q14+
	       	// "</td><td>"+scoreArray[i].q15+
	       	// "</td><td>"+scoreArray[i].q16+
	       	// "</td><td>"+scoreArray[i].q17+
	       	// "</td><td>"+scoreArray[i].q18+
	       	// "</td><td>"+scoreArray[i].q19+
	       	// "</td><td>"+scoreArray[i].q20.toLowerCase()+
	       	"</td><td id='"+i+"'>"+scoreArray[i].score+
	       	"</td></tr>");

	       	if(i===0 && count>0 ){
	       		$("#winner").css("background-color","gold");
	       		$("#winner").css("color","black");
	       	}
		}

	}

}