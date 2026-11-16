 
 let a=new Map([['Name1','Karthik'],['Name2','Preethi'],['Name3','Mounika']]);
 console.log(a)
 
for(let [user,name] of a){
    console.log(user+" : "+name)
}
 
//map propetrties

console.log(a.keys())
console.log(a.values())
console.log(a.entries())
console.log(a.size)
a.set("Name1","Mummadi")
console.log(a)
a.delete("Name1");
console.log(a)
function decorator(fn){

    return function(...args){
        console.log("Before calling the function")
        let d=fn(...args)
        console.log("After calling the function")
        return d;   
    }
}
let ss=decorator((a,b)=>a+b)
console.log(ss(24,34))

//genarotor

function * generator(){
  
    let i=0;
    while(true){   
        yield i;
        i++;
    } 
        
}
let ssa=generator();
console.log(ssa.next()) 
console.log(ssa.next())
console.log(ssa.next())
console.log(ssa.next())
console.log(ssa.next())

// Multilevel inheritance: Cat extends Dog, and Dog extends Animal.


//closure and use cases
 
//nested function
 
 