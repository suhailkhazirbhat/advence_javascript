
let normalFunction=function(){
    console.log("normalFunction")
}

let arrowFuntion=()=>{
    console.log("arrowFuntion")
}
arrowFuntion()
normalFunction()

// Rest Operator

let detail=(name,roll,...res)=>{
      console.log(name,roll)
    //   console.log(res)
      for (let index = 0; index < res.length; index++) {
        const element = res[index];
        console.log(element,'element')
        
      }
}

detail("suhail",2,'awantipora','male')

// Problem if we change in one arr onther also update  in non primetive data type [both will update]
// this also know as call by reference
let arr1=[1,23,44,445,55,5,56]
 let arr2=arr1  
arr1.push('usam')
console.log(arr2,arr1)

// solution by sperate operator
let arr1s=[1,23,44,445,55,5,56]
let arr2s=[...arr1s]   // sperate operator
arr1s.push('usam')
console.log(arr2s,arr1s)

//  in object 
let obj1={
    name:"suhail",
    roll:23
}
obj1.gender="male"
let obj2={...obj1}

console.log(obj1,obj2) // both some it should be problem+

// solution by sperate operator
let obj1o={
    name:"suhail",
    roll:23
}

let obj2o={...obj1o}
obj1o.gender="male"
console.log(obj1o,obj2o) 


// No Problem if we change in one arr onther also update  in primetive data type[only one will update]
// this also knows as call by value
let num1=23
let num2=num1
    num1=20
console.log(num1,num2)    

// Destructure
// array
let  [name1="suhail",age1="23"]=["adil",'27']
console.log(name1,age1)

// obj
let obj3={
    name2:"suhail", 
    age2:23
}
const {name2,age2}=obj3
console.log(name2,age2)

function Destructure({name2,age2}) {
    // const {name2,age2}=parem;
    console.log(name2,age2)
}
Destructure(obj3)

//  try Catch Error Handling
try {
    let a=y-20;
    console.log(a)
    
} catch (error) {
    console.log(error)
}
finally{
    console.log("finally Runing")

}

try {
    let y=40
    let a=y-20;
    console.log(a)
    
} catch (error) {
    console.log(error)
}
finally{
    console.log("finally Runing")

}

function division() {
    let a=10
    let b=0
    
    // console.log(c)
    try {
        if(b===0){
            throw new Error("Divsion by zero is not allowed");
        }
        let c=a/b
        console.log(c)
        
        
    } catch (error) {
        console.log(error.message)
    }
    finally{
        console.log("finally Runing")
    
    }
    
}
division()




