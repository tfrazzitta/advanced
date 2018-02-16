
var scoreArray=[];
$(document).ready(function(){	
 $("#myModal").modal("toggle")
 $("#mod-bod").html("Rotate your phone to landscape");
 	$.ajax({
    method: "GET",
    url: '/get-one-test'
  }).done(function(test) {
  		console.log("test")
  		console.log(test)

  		QuestionArray=[test[0].q1, test[0].q2,test[0].q3,test[0].q4,test[0].q5,
                       test[0].q6, test[0].q7,test[0].q8,test[0].q9,test[0].q10]
        
        $("#th-append").append('<th>First Name</th><th>Last Name</th>');

        for(i=0;i<QuestionArray.length;i++){
        x= i+1               
  	 	$("#th-append").append('<th><br>'+x+'.<br>'+ QuestionArray[i]+'</th>')
  	 	}
  	 	$("#th-append").append('<th>score</th>');


	$.ajax({
        method: "GET",
        url: '/show-all-in-table'
      }).done(function(data) {

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


function ArrangeScore(scoreArray,test){
	
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
	       	"</td><td id='"+i+"'>"+scoreArray[i].score+
	       	"</td></tr>");

	       	if(i===0 && scoreArray[0].score>0){
	       		$("#winner").css("background-color","gold");
	       	}
		}

	} 
 
}