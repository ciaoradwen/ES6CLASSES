class Human{
    name;
    job;
    skills;
    constructor(Hakim,student,web){
        this.name=Hakim;
        this.job=student;
        this.skills=web;
    }
}
class Student extends Human{
    constructor(name,job,skills)
    {
        super(name,job,skills)
    }
    getJob(professor){
        this.job=professor;
    }
    leaveJob(){
        this.job="unemployed"
    }
    learnNewSkill(fast){
        this.skills.push(fast)
    }
    forgetSkill(skill){
    this.skills= this.skills.filter((item) => {
        return item !==skill 
    })

}

}
const me = new Student('Hakim','student',['web']);
console.log (me.name)
console.log (me. job)
console.log(me.skills)
me.getJob('Web developer');
console.log (me.job)
me.learnNewSkill('React');
console.log(me.skills)
me.forgetSkill('React');
console.log(me.skills)
me.leaveJob();
console.log(me.job)
