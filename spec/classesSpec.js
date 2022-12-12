let classes = require("../public/js/classes.js");

//tests functions in classes.js
xdescribe("Functions in classes.js", () => {
    beforeEach(() => {
        user2 = new classes.User("Rachel",1,"8:30", "13:30");
    });
    it("gets user", () => {
        expect(classes.getUser(user2)).toBe(user2);
    });
 });

//tests the User class
//will not run with export keyword, so we'll need to remove 'export' from classes.js to run these

describe("Checks the schedule", () => {
    beforeEach(() => {
        user1 = new classes.User("Ross",1,"8:30", "9:30");
    });
    it("prints out the schedule", () => {
        expect(user1.schedule.get("8:30")).toBe("empty");
    });
    it("prints out the schedule", () => {
        expect(user1.schedule.get("9:30")).toBe(undefined);
    });
    it("gets user's start time", () => {
        expect(user1.getStartTime()).toBe("8:30");
    });
    it("gets user's end time", () => {
        expect(user1.getEndTime()).toBe("9:30");
    });
});

describe("Clear schedule", () => {
    beforeEach(() => {
        user2 = new classes.User("Rachel",1,"8:30", "13:30");
        //add an element to the schedule
        user2.addElement("9:30", "10:30", "Drinking tea")
    });
    it("clears the schedule", () => {
        expect(user2.clearSchedule()).toBe(undefined);
    });
 });

describe("Add element", () => {
    beforeEach(() => {
        user3 = new classes.User("Phoebe",1,"8:30", "13:30");
        //add an element to the schedule
        user3.addElement("9:30", "10:30", "Drinking tea")
    });
    it("check the event", () => {
        expect(user3.schedule.get("8:30")).toBe("empty");
    });
    it("check the event is scheduled", () => {
        expect(user3.schedule.get("9:30")).toBe("Drinking tea");
    });
    it("check the event is scheduled", () => {
        expect(user3.schedule.get("10:00")).toBe("Drinking tea");
    });
    it("check the event", () => {
        expect(user3.schedule.get("10:30")).toBe("empty");
    });
    it("if empty", () => {
        expect(user3.ifEmpty("11:00", "12:30")).toBe(true);
    });
    it("if empty", () => {
        expect(user3.ifEmpty("9:30", "10:30")).toBe(false);
    });
 });

 //results of test change depending on what day it is
 //TODO: make tests pass regardless of day
 describe("Get current date", () => {
    it("has correct date", () => {
        expect(classes.getCurrentDate()).toBe("Monday 12/12");
    });
    it("has correct day of week", () => {
        expect(classes.getDayOfWeek()).toBe("Monday");
    });
    it("has correct long date format", () => {
        expect(classes.getFormattedDate()).toBe("December 12, 2022");
    });
});

//check on what these functions are supposed to return 
xdescribe("Get stop time", () => {
    it("has correct stop time", () => {
        expect(classes.getStopTime("8:00", "11:00")).toBe("11:00");
    });
    it("is in the proper time range", () => {
        expect(classes.inTimeRange("8:00","11:00","9:00")).toBe(true);
    });
    it("is out of time range", () => {
        expect(classes.inTimeRange("8:00","11:00","21:00")).toBe(false);
    });
});

//Info about Jasmine tests:
    //can temporarily disable suite using xdescribe() and specs using xit()
    //declare spec inside a suite with it()
    //specs can contain 1+ expectations, which can be T or F
    //for a spec to pass, all expectations within a spec must be T
    //expectations created using expect()
    //run tests with 'npm test'