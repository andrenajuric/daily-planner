var saveBtn = $("saveBtn");
// gets current date and time with no parameters
var now = moment();
var currentHour = now.format("H");

// Get the current day displayed in jumbotron header
$("#currentDay").text(now.format("dddd, MMMM Do"));

var hours = [9,10,11,12,13,14,15,16,17];

console.log(now.format("H"));

// loops through 'hours' array, applies 'past', 'present', or 'future' class depending on currentHour
for (var i = 0; i < hours.length; i++) {
    
    if (i > currentHour) {

        $("textarea").addClass("past").removeClass("present", "future");

    } else if (i == currentHour) {

        $("textarea").addClass("present").removeClass("past", "future");

    } else if (i < currentHour) {

        $("textarea").addClass("future").removeClass("present", "past");
        
    }

}



/* function handleFormSubmit(event) {
    event.preventDefault();

    var toDoItem = $('textarea [name="description"]').val();

    if (!toDoItem) {
        console.log('No to do item filled out in form!');
        return;
    }




}


})


// GIVEN I am using a daily planner to create a schedule
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist */