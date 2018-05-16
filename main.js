// $("#indexSearch").click(function() {
//     var input = $("<input type='text'> </input> <button id = 'searchIndex'>Search</button>").click(function() {
//         $("#indexHeader").html("<th id='indexHeader'>Index <i class='fas fa-search' id='indexSearch'></i></th>")
//     })
//     $("#indexHeader").append(input);

   
// })

$("#tableHeader").on('click', '#indexSearch', function(){
    
    $(".indexInput").css("display", "inline-block")
    $('#indexSearchButt').css("display", "inline-block")
    $(".index").css("display", "none")
    
})

$('#indexSearchButt').click(function() {
    $(".index").css("display", "inline-block")
    $(".indexInput").css("display", "none")
    $('#indexSearchButt').css("display", "none")

    var index = $('.indexInput').val();

    console.log(index);
    
})


$("#student-list").on('click' ,'#newStudent' , function(){

    var formRow = "<tr><td>Index</td><td><input type='text' class='newStudentInput' name='newStudentName' id='newStudentName' placeholder ='Student name' required></td><td><input type='date' name='newStudentBirthday' class='newStudentInput' id='newStudentBirthday' required></td><td><input type='submit' value='Add' class='button' id='newStudentConfirm'></td></tr>"

    $(".student-table").append(formRow)
    $("#newStudent").css("display", "none");
})

$("#student-list").on('click' ,'#newStudentConfirm' , function(event){
    event.preventDefault();
    $.each($('.newStudentInput'), function(){
        var value = $(this).val();
        console.log(value);
    })
    
    
})