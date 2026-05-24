export class Person
{
    constructor(pid, pname)
    {
        this.personId = pid;
        this.personName = pname;
    }

    showInfo(){
        console.log(`Id = ${this.personId}`)
        console.log(`Name = ${this.personName}`)
    }

    callme(){
        
    }

}
let p1 = new Person(101,'test person');
p1.personId = 102;
p1.showInfo();

export function add(x,y)
{
    return x+y;
}

const PI = 3.14;
