//destructuring
const obj={
    name:"shachi",
    gender:"female",
    class:2
}

//to grab the objects before es6
const name=obj.name;
const gender=obj.gender;
let class=obj.class;

//to grab the objects after es6
const {name,gender}=obj;
let {class}=obj;


//declaring object properties
const name1="shachi priya";
const obj1={
    [name1]:"hello",
    ["milky"+" priya"]:"hihi",
    [1+2]:"hello hello"
}

const a="milky";
const b="silky";
const c="sujal";
const obj={a,b,c}

//template strings
namee="shachi";
color="brown";
age=21;
const greeting1="I'm "+namee+", I'm "+age+" years old"+" and I'm "+color+" in color.";
const greeting2=`I'm ${namee}, I'm ${age} years old and I'm ${color} in color.`;

//default arguments
function greet(name='',age=30,pet='cat')
{
    return `hello ${name} you seem to be ${age-10}, what a lovely ${pet} you have.`;
}

//symbol
let sym1=Symbol();
let sym2=Symbol("foo");
let sym3=Symbol("foo");


//arrow function
//before es6
function add(a,b)
{
    return a+b;
}
//after es6
const add=(a,b)=>a+b;

//closures
const first=()=>{
    const greet="hi";
    const second=()=>{
        alert(greet);
    }
    return second;
}
const newFunc=first();
newFunc();

//currying
//const multiply=(a,b)=>a*b;

const curriedMultiply=(a)=>(b)=>a*b;
curriedMultiply(3)(4);
//12
const multiplyBy5=curriedMultiply(5);
multiplyBy5(11);
//55


//compose
const compose=(f,g)=>(a)=>f(g(a));
const sum=(num)=>num+1;
compose(sum,sum)(5);

//Advance Arrays
//forEach in arrays
const array=[1,2,10,16];
const doubleArr=[];
const newArray=array.forEach((num)=>{doubleArr.push(num*2);});
console.log(doubleArr);

//map
const array=[1,2,10,16];
const mapArray=array.map((num)=>{return num*2;});
console.log(mapArray);

//filter
const array=[1,2,10,16];
const filterArray=array.filter(num=>{return num>5;});
console.log(filterArray);

//reduce
const array=[1,2,10,16];
const reduceArray=array.reduce((accumulator,num)=>{return accumulator+num;},0);
console.log(reduceArray);

//advanced objects
//reference type
var object1={value:10};
var object2=object1;
var object3={value:10};
object1===object2;
//true
object1===object3;
//false
object1.value=15;
object2.value;
//15
object3.value;
//10

//context vs scope
const object4={
    a:function(){
        console.log(this);
    }
}

//instantiation
class player{
    constructor(name,type)
    {
        console.log("player",this);
        this.name=name;
        this.type=type;
    }
    introduction(){
        console.log(`hi I'm ${this.name}, I'm ${this.type}`);
    }
} 
class wizard extends player{
    constructor(name,type){
        super(name,type);
        console.log("wizard",this);
    }
    play()
    {
        console.log(`weeeeeee. I'm a ${this.type}`);
    }
}
const wizard1=new wizard("milky","achhi");
const wizard2=new wizard("silky","pagal");

//Object.values
//Object.entries
//Object.keys

let obj={
    name0:"milky",
    name1:"silky",
    name2:"sujal"
}
Object.keys(obj).forEach((key,index)=>{console.log(key,obj[key]);})
//name0 milky
//name1 silky
//name2 sujal
Object.values(obj).forEach(value=>{console.log(value);})
//milky
//silky
//sujal
Object.entries(obj).forEach(value=>{console.log(value);})
//(2)["name0","milky"]
//(2)["name1","silky"]
//(2)["name2","sujal"]
Object.entries(obj).map(value=>{return value[1]+value[0].replace("name","");})
//(3) ["milky", "silky", "sujal"]

const arr=["milky","silky","sujal"];
const array=arr.flatMap(name=>name+"ff");
//(3) ["milkyff", "silkyff", "sujalff"]