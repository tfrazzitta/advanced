var QuestionArray=[];
var AnswerArray=[];
$(document).ready(function(){
  $.ajax({
        method: "GET",
        url: '/continue-to-answer'
      }).done(function(data) {
        console.log(data)

        QuestionArray=[data[0].q1, data[0].q2,data[0].q3,data[0].q4,data[0].q5,
                       data[0].q6,data[0].q7,data[0].q8,data[0].q9,data[0].q10]
       
        AnswerArray=[data[0].Answer1, data[0].Answer2,data[0].Answer3,data[0].Answer4,data[0].Answer5,
                     data[0].Answer6, data[0].Answer7,data[0].Answer8,data[0].Answer9,data[0].Answer10]
        
        for(i=0;i<QuestionArray.length;i++){
          for(i=0;i<AnswerArray.length;i++){
            var x= i+1;
            $("#form-append").append('<div class="form-group"><label for="q'+x+'">'+x+'. '+ QuestionArray[i]+'</label><select class="form-control" id="q'+x+'" name="q'+x+'"><option selected="true" disabled="disabled"></option> <option>'+AnswerArray[i][0]+'</option><option>'+AnswerArray[i][1]+'</option><option>'+AnswerArray[i][2]+'</option><option>'+AnswerArray[i][3]+'</option></select></div>')
          }
        }

    })
})
