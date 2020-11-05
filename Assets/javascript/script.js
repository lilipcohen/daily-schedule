$(document).ready(function () {
        //Prints current date at the top
        $("#currentDay").text(moment().format("dddd, MMM Do"));

        var userInput = "";
        var hours = ["9","10","11","12","1","2","3","4","5"];
        var currentHour = moment().hours(9,10,11,12,13,14,15,16,17);
      
        //For loop for hours to print all at once 
        //divHour not defined currently
        for(i = 0; i < hours.length; i++){
            $(".hour").text(hours[i]);
        }

        //If need to create timeblocks through script then:
        //ask if this is correct?
        //Do columns work here??
    for (var i = 0; i < 9; i++){
        function blockSetUp(){
            var container = $(".container");
            var timeBlock = $("<div>").addClass("time-block");
            var divRow = $("<div>").addClass("row");
            var divHour = $("<div>").addClass("hour col-lg-2");
            var divInput = $("<div>").addClass("past col-lg-8");
            var text = $("<textarea>").attr("id", "user-input");
            var saveButton = $("<div>").addClass("saveBtn col-lg-2");
            var descrip = $("<div>").addClass("description");
            $(container).append(timeBlock);
            $(timeBlock).append(divRow);
            $(divRow).append(divHour);
            $(divRow).append(divInput);
            $(divRow).append(saveButton);
            $(divInput).append(text);
            $(timeBlock).append(descrip);
        }
        blockSetUp();
    }

        //console.log(blockSetUp());
      
        //create a for each maybe?
        $.each(""  , function (i, ) {
          div.append();
        });

        //Set times to whatever current time is
        function compareTime(){
          //use moment.js to set time equal to value of class hour 9AM-5PM
            currentHour === hours;
          //if hour = currentHour then hour class is present
            if (hours < currentHour) {
                
            }
          //else if hour < currentHour then hour class is past

          //else if hour > currentHour then hour class is future

          //Make sure to set currentHour to 9-5?
        }

        //Create an onclick function for the timeblocks that?
        //Is that necessary if there's a textarea?
        //redefine the userInput for each timeblock
        $(".time-block").on("click", function userText(){

        });

        //Create save on click save button to take the userInput
        //and save it to local storage for that specific timeblock
        $(".saveBtn").on("click", function saveNew(){

        //Set local save
        localStorage.setItem("", );

        //Get local save
        localStorage.setItem("", );
        });
      });