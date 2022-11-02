//Event class for making events

class event{
    constructor(name, description, completionTime){
        this.name = name;
        this.description = description;
        //completion time is the time it will take the user to complete the event,
        //which they enter themselves
        this.completionTime = completionTime;
    } 

    //user can change description of event
    setDescription(newDescription){
        this.description = newDescription;
    }

    //user can change name of event
    setName(newName){
        this.name = newName;
    }

    //user can change how long it takes them to complete event
    setTime(newTime){
        this.completionTime = newTime;
    }


    }