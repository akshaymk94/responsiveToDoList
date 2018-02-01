$(document).ready(function() {
    
    var pending = 0;
    var completed = 0;
    var rejected = 0;
    var forLater = 0;
    
    var num = 1;
    
    function displayAll() {
        $('#countPending').html(pending);
        $('#countCompleted').html(completed);
        $('#countRejected').html(rejected);
        $('#countForLater').html(forLater);
    }
    
    displayAll();
    
    $('body').on('click','#btnSubmit', function() {
        var newTask = $('#txtInput').val();
        
        var listItem = '<section class="container" id="newListItem'+ num +'"><div class="row cardOne" id="firstCard'+ num +'"><div  class="col-sm-9 li taskName" id="newTaskName'+ num +'">' + newTask + '</div><div class="col-sm-2"><select class="taskStatus li" parentCardNew="firstCard'+ num +'"><option name="taskStatus" value="pending">Pending</option><option name="taskStatus" value="completed">Completed</option><option name="taskStatus" value="rejected">Rejected</option><option name="taskStatus" value="forLater">For Later</option></select></div><span removeTask="newListItem' + num + '" class="btnDelete glyphicon glyphicon-remove"></span></div></section>';
        
        $('#list').append(listItem);
        num++;
        
        $('#txtInput').val('');
        
        iterateAll();
    });
    
    function iterateAll() {
        $('#list section').each(function() {
            if($(this).find(".taskStatus").val() == "pending") {
                pending++;                
            }
            else if($(this).find(".taskStatus").val() == "completed") {
                completed++;                
            }
            else if($(this).find(".taskStatus").val() == "rejected") {
                rejected++;                
            }
            else if($(this).find(".taskStatus").val() == "forLater") {
                forLater++;                
            }
            
        });
        displayAll();
        
        pending = 0;
        completed = 0;
        rejected = 0;
        forLater = 0;
    }
    
    $('body').on('click','.taskName', function() {
        var oldTask = $(this).text();
        var returnToInput = $(this).attr('id');
        var parentCard = $(this).parent().attr('id');
        var dynamicTaskContainer = $(this).parent().parent().attr('id');
        
        $(this).parent().hide();
        
        var dynamicForm = '<div class="row cardTwo"><div class="col-sm-9  inputUpdate"><input type="text" class="form-control textUpdateTask" value="' + oldTask + '"></div><button type="button" class="col-sm-1 btn btn-primary btnSave" sendBackToCard="' + parentCard + '" sendBackToInput="'+returnToInput+'">Save</button><button type="button" class="col-sm-1 btn btn-warning btnCancel" sendBackToCard="' + parentCard + '">Cancel</button></div>';
        
        $(this).parent().parent().append(dynamicForm);
    });
    
    
    $('body').on('change','.taskStatus', function() {
        var parentCardNew = $(this).attr('parentCardNew');
        
        if($(this).val() == "pending") {
            $('#' + parentCardNew + '').find(".taskName").css('background', '#fc3');
        }
        else if($(this).val() == "completed") {
            $('#' + parentCardNew + '').find(".taskName").css('background', '#10D300');
        }
        else if($(this).val() == "rejected") {
            $('#' + parentCardNew + '').find(".taskName").css('background', '#A7A7A7');
        }
        else if($(this).val() == "forLater") {
            $('#' + parentCardNew + '').find(".taskName").css('background', '#00E3CB');
        }
        iterateAll();
    });
    
    
    
    $('body').on('click','.btnSave', function() {
        var updatedTask = $(this).parent().find(".textUpdateTask").val();
        var extractedReturnCard = $(this).attr('sendBackToCard');
        var extractedReturnId= $(this).attr('sendBackToInput');
        $('#'+ extractedReturnId +'').text(updatedTask);
        $(this).parent().remove();
        $('#' + extractedReturnCard + '').show();
        
    });
    
    $('body').on('click', '.btnCancel', function() {
        var extractedReturnCard = $(this).attr('sendBackToCard');
        $(this).parent().remove();
        $('#' + extractedReturnCard + '').show();
    });
    
    
    
    $('body').on('click','.btnDelete', function() {        
        var deleteTaskId = $(this).attr('removeTask');
        $('#' + deleteTaskId + '').remove();
        iterateAll();
        });
    
        
});




















