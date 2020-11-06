$(document).ready(function () {
    var savedInput = JSON.parse(localStorage.getItem('workday-schedule')) || {}

    var revisedHours = [{
        label: "9am",
        value: 9
    },
    {   label: "10am",
        value: 10
        },
    {   label: "11am",
        value: 11
        },
    {   label: "12pm",
        value: 12
        },
    {   label: "1pm",
        value: 13
        },
    {   label: "2pm",
        value: 14
        },
    {   label: "3pm",
        value: 15
        },
    {   label: "4pm",
        value: 16
        },
    {
        label: "5pm",
        value: 17
    }
];
    //Current hour in real time from moment.js
    var currentHour = moment().hours();
    
    //Prints current date at the top
    $("#currentDay").text(moment().format("dddd, MMM Do"));

    //For loop for hours to print all at once 
    //divHour not defined currently
    for(i = 0; i < revisedHours.length; i++) {
        var currentHourData = revisedHours[i]

        var container = $(".container");
        var timeBlock = $("<div>").addClass("time-block");
        var divRow = $("<div>").addClass("row");
        var divHour = $("<div>").addClass("hour col-lg-2");
        var textInput = $("<textarea>").addClass("col-lg-8");
        textInput.css("color", "black");
        textInput.val(savedInput[currentHourData.value])

         //if hour = currentHour then hour class is present
         if (currentHourData.value < currentHour) {
             textInput.addClass("past");
         }
         //else if hour < currentHour then hour class is past
         else if (currentHourData.value === currentHour) {
             textInput.addClass("present");
         }
         //else if hour > currentHour then hour class is future
         else if (currentHourData.value > currentHour) {
             textInput.addClass("future");
         }

         textInput.attr('data-time', currentHourData.value)

            var saveButton = $('<button>').addClass("saveBtn col-lg-2");

            saveButton.attr('data-time', currentHourData.value)
            saveButton.html("<i class='far fa-arrow-alt-circle-down'></i>");

            var descrip = $("<div>").addClass("description");

        $(container).append(timeBlock);
        $(timeBlock).append(divRow);
        $(divRow).append(divHour);
        $(divHour).text(currentHourData.label);
        $(divRow).append(textInput);
        $(divRow).append(saveButton);
        $(timeBlock).append(descrip);
    }

    //Set local.storage
    $(".saveBtn").on("click", function (e){
        var clickedHour = $(e.target).attr('data-time')
        var input = $('textarea[data-time="' + clickedHour + '"]').val()

        savedInput[clickedHour] = input

        localStorage.setItem('workday-schedule', JSON.stringify(savedInput))
    });
});