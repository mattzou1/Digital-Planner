let classes = require("../public/js/classes.js");

//tests the User class

describe("Checks the schedule", () => {
    beforeEach(() => {
        //creates a user
        user1 = new classes.User("Ross",1,"8:30", "9:30");
    });
    it("prints out the schedule", () => {
        expect(user1.schedule.get("8:30")).toBe("empty");
    })
    it("prints out the schedule", () => {
        expect(user1.schedule.get("9:30")).toBe(undefined);
    })
});

 describe("Clear schedule", () => {
    beforeEach(() => {
        //create a user
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
        //create a user
        user3 = new classes.User("Phoebe",1,"8:30", "13:30");
        //add an element to the schedule
        user3.addElement("9:30", "10:30", "Drinking tea")
    });
    it("check the event", () => {
        expect(user3.schedule.get("8:30")).toBe("empty");
    });
    it("check the event", () => {
        expect(user3.schedule.get("9:30")).toBe("Drinking tea");
    });
    it("check the event", () => {
        expect(user3.schedule.get("10:00")).toBe("Drinking tea");
    });
    it("check the event", () => {
        expect(user3.schedule.get("10:30")).toBe("empty");
    });
 });

 describe("Get current date", () => {
    beforeEach(() => {
        //creates a user
        user4 = new classes.User("Joey",1,"8:30", "9:30");
    });
    it("has correct date", () => {
        //get today's date
        expect(user1.getCurrentDate()).toBe("Thursday 11/10");
    });
});

//Info about Jasmine tests:
    //can temporarily disable suite using xdescribe() and specs using xit()
    //declare spec inside suite with it()
    //specs can contain 1+ expectations, which can be T or F
    //for a spec to pass, all expectations within a spec must be T
    //expectations created using expect()