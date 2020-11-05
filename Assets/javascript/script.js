$(document).ready(function () {
    var userInput = [
        { time: 7, input: "" },
        { time: 8, input: "" },
        { time: 9, input: "Wake up" },
        { time: 10, input: "" },
        { time: 11, input: "Go to work" },
        { time: 12, input: "" },
        { time: 13, input: "" },
        { time: 14, input: "" },
        { time: 15, input: "" },
        { time: 16, input: "" },
        { time: 17, input: "" }
    ]

    //var hours = ["9","10","11","12","1","2","3","4","5"];
    var currentHour = moment().hours();
    console.log(currentHour);
    
    //Prints current date at the top
    $("#currentDay").text(moment().format("dddd, MMM Do"));

    //For loop for hours to print all at once 
    //divHour not defined currently
    /*for(i = 0; i < hours.length; i++){
        $(".hour").text(hours[i]);
    }
    */
    //Timeblocks will repeat 9 times for 9am-5pm
    for (var i = 0; i < 9; i++){
        var container = $(".container");
        var timeBlock = $("<div>").addClass("time-block");
        var divRow = $("<div>").addClass("row");
        var divHour = $("<div>").addClass("hour col-lg-2");
        var textInput = $("<textarea>").addClass("col-lg-8");
        var saveButton = $("<button>").addClass("saveBtn col-lg-2");
        var descrip = $("<div>").addClass("description");
        $(container).append(timeBlock);
        $(timeBlock).append(divRow);
        $(divRow).append(divHour);
        //$(divHour).text(hours[i]);
        $(divRow).append(textInput);
        $(divRow).append(saveButton);
        $(timeBlock).append(descrip);
    }


    //Set times to whatever current time is
    function compareTime(){
        //use moment.js to set time equal to value of class hour 9AM-5PM
        parseInt(hours)
        currentHour === hours;
        //if hour = currentHour then hour class is present
        if (hours < currentHour) {
            textInput.addClass("past");
        }
        //else if hour < currentHour then hour class is past
        else if (hours === currentHour) {
            textInput.addClass("present");
        }
        //else if hour > currentHour then hour class is future
        else if (hours > currentHour) {
            textInput.addClass("future");
        }
        //Make sure to set currentHour to 9-5?
    }
    compareTime();

    //Create save on click save button to take the textarea
    //and save it to local storage for that specific timeblock
     //Get local save
    localStorage.getItem(userInput, '');

    $(".saveBtn").on("click", function saveNew(){

    //Set local save
    localStorage.setItem(userInput, '');
    });
});