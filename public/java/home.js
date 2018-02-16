
 var name;
var message;

 $(document).on("click","#test-button",function(){
    var testId= $(this).attr("data-id");
    console.log(testId)
    $.ajax({
        method: "POST",
        url: '/retrieve-test/'+testId,
      }).done(function(data) {
        location.replace("/exam");
      })
 })



$(document).ready(function(){

  $.ajax({
        method: "GET",
        url: '/hello'
      }).done(function(data) {
        name= data;
        $("#greeting").html("Hello " +data);
          if(data != "Thomas Frazzitta"){
           message ="You are not authorized to delete";
          }
          GetTests();
      })

  
})




function GetTests(){
  $("#t-body").empty();
    var checkbox='<input type="checkbox" value="true">Delete</label>';
      $.ajax({
        method: "GET",
        url: '/get-test'
      }).done(function(data) {
          $.ajax({
          method: "GET",
          url: '/completed-tests'
        }).done(function(doc) {
          console.log(doc);
          console.log(data)
          console.log(data[0]._id)

          for(i=0;i<data.length;i++){
            var button ='<li><button class="btn-primary" id="test-button" data-id="'+data[i]._id+'">'+data[i].testName+'</button>';
            var Teacherbutton ='<li><button class="btn-primary" id="test-button" data-id="'+data[i]._id+'">'+data[i].testName+'</button>';
            var checkbox='<input type="checkbox" data-id="'+data[i]._id+'" value="true">Delete</label></div></div>';
            var StudentResults= '<li><button class="btn-primary" id="student-result-button" data-id="'+data[i]._id+'">Student Scores</button>';
         

            if(data[i].testMaker==="Thomas Frazzitta"){
                  $("#t-body").prepend(
                    "<tr><td>"+Teacherbutton+"</td><td>"
                    +StudentResults+"</td><td class='text-center'><input type='checkbox' class='boom' value='true' id='check' data-id='"
                    +data[i]._id+"'/></td></tr>"); 
 
                  
            }
            else{
                  $("#t-body").append(
                    "<tr><td>"+button+"</td><td>"
                    +StudentResults+"</td><td class='text-center'><input type='checkbox' class='boom' value='true' id='check' data-id='"
                    +data[i]._id+"'/></td></tr>"); 
            }


              for(j=0;j<doc.length;j++){
                  console.log(j)
                  if(doc[j].testId===data[i]._id){
                    console.log(doc[j].testId)
                    $("#test-button").css("background-color","black");
                    $("#test-button").css("border-color","white");
                    $("#test-button").html("Complete");
                  }           
          }//for looop

              // for(j=0;j<doc.length;j++){
              //   (function(j){
              //     console.log(j)
              //     if(doc[j].completed==="completed"){
              //       console.log(doc[j].testId)
              //       $("#test-button").css("background-color","black");
              //       $("#test-button").css("border-color","white");
              //       $("#test-button").html("Complete");
              //     }           
              //   //}
              //     })(j)
              }

        //}
      })  //doc
    })   
}



var DeleteArray=[];

  $(document).on("click","input",function(){
    var deletetId= $(this).attr("data-id");
    $("#del-message").html("")
  
  if(DeleteArray.length===0){
    console.log($(".boom").prop('checked'))
    DeleteArray.push(deletetId)
    console.log(DeleteArray)
  }

  else{

        if($.inArray(deletetId,DeleteArray) != -1){
              var index = DeleteArray.indexOf(deletetId);
                  if (index > -1) {
                      DeleteArray.splice(index, 1);
                      console.log(DeleteArray)
                  }
          } else {
              DeleteArray.push(deletetId)
              console.log(DeleteArray)
          }
    }
})

  

$(document).on("click","#delete-test",function(){
  console.log(name)

    if(name != "Thomas Frazzitta"){
      $("#del-message").html(message)
      return false;
    }
    if(DeleteArray.length===0){
      $("#del-message").html("Please select from the boxes below")
    }
    else{
      console.log(DeleteArray)
      $.ajax({
          method: "POST",
          url: '/delete-test/',
          data: {DeleteArray},
        }).done(function(data) {
            GetTests();
        })
    }
 })




  $(document).on("click","#student-result-button",function(){
      var testId= $(this).attr("data-id");
    console.log(testId)
    $.ajax({
        method: "POST",
        url: '/retrieve-test/'+testId,
      }).done(function(data) {
          location.replace("/admin-table");
      })

  })