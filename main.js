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


$("#newStudent").click(function(){

    var newRow = "<tr><td>122376</td><td>Kamil Szmajdziński</td><td>21.11.1995</td><td class='buttonCell'><input class='button' type='button' value='Edit'/><input class='button' type='button' value='Delete'/><input class='button' type='button' value='Details'/></td></tr>"

    $(".student-table").append(newRow)
})