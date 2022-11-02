//Assignment class for making assignments

class assignment{
    constructor(name, description, completionTime){
        this.name = name;
        this.description = description;
        //completion time is the time it will take the user to complete the assignment,
        //which they enter themselves
        this.completionTime = completionTime;
    } 

    //user can change description of assignment
    setDescription(newDescription){
        this.description = newDescription;
    }

    //user can change name of assignment
    setName(newName){
        this.name = newName;
    }

    //user can change how long it takes them to complete assignment
    setTime(newTime){
        this.completionTime = newTime;
    }


    }


