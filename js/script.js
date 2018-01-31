$(document).ready(function() {
    
    var num = 1;
    $('body').on('click','#btnSubmit', function() {
        var newTask = $('#txtInput').val();
        alert(newTask);
        /*var listItem = '<div class="row taskHolder" id="newListItem'+ num +'"><li class="newLi"><strong class="col-sm-9 taskName">' + newTask + '</strong><select class="taskStatus"><option name="taskStatus" value="pending">Pending</option><option name="taskStatus" value="completed">Completed</option><option name="taskStatus" value="rejected">Rejected</option><option name="taskStatus" value="yetToComplete">Yet to complete</option></select><span class="glyphicon glyphicon-remove"></span></li></div>';*/
        
        /*var listItem = '<div class="row newLi"><div class="col-sm-12"><div ' + newTask + '</div></div></div>';
        $('#list').append(listItem);*/
        
        var listItem = '<div class="container" id="newTaskContainer"><div class="row" id="cardOne"><div class="col-sm-9  taskName">' + newTask + '</div><div class="col-sm-2"><select class="taskStatus"><option name="taskStatus" value="pending">Pending</option><option name="taskStatus" value="completed">Completed</option><option name="taskStatus" value="rejected">Rejected</option><option name="taskStatus" value="yetToComplete">Yet to complete</option></select></div><div class="btnDelete"><span class="btnDelete glyphicon glyphicon-remove"></span></div></div></div>';
        
        $('#list').append(listItem);
        num++;
    });
});



















