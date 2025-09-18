class animal{
    constructor(name,legcount,speaks){
        this.n = name;
        this.l = legcount;
        this.s = speaks;
    }
    name(){
        console.log("my name is",this.n);
    }

    speak(){
        console.log("hi there "+ this.s);
    }
}



let dog = new animal("Pluto",4,"metrooooo")
dog.speak()
dog.name()