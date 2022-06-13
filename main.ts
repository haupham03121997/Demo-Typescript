//Bởi vì browser không thể run được code typescript
// Ta cần complie để chuyển đổi code typescript thành javascript
// Window + Linux: Ctrl + Shift + B
// MacOS : Command + Shift + B

console.log("Hello TypeScript");

// -------------1.Typed------------
//  Number
let a = 5;
let myNumber: number = 10; // myNumber = '1' => error :Type 'string' is not assignable to type 'number'.

let myString: string = "Hello";
myString = "Xin Chào";
// myString = { name :'A' , age :10}; // error :Type '{ name: string; age: number; }' is not assignable to type 'string'.
// => Tương tự cho type boolean

let n : null = null; // Không có ý nghĩa, nhưng sẽ có ý nghĩa vào 1 vài  trường hợp khác
let u : undefined = undefined; // Không có ý nghĩa,  nhưng sẽ có ý nghĩa vào 1 vài  trường hợp khác

let myArrayString : string[]; // Kiểu dữ liệu mảng string
myArrayString = ['A','B','C'];

// Kiểu dữ liệu tuple
let tuple : [string, number];
tuple = ['A',1]; // work
// tuple = ['A',1,true]; // error :Type 'true' is not assignable to type 'number'.


// -------------2.Enum------------
enum Color {
  Red = 'red', Green = 'green', Blue = 'green' // readonly,thuộc tính chỉ được được và không thay đổi được, chỉ thay đổi trực tiếp trên code
};
console.log(Color.Red);

// -------------3.Void------------
// Void không có giá trị, chỉ có thể dùng khi không có giá trị đặt trả về
function myVoid() : void {
  console.log("Hello");
}

// function (...param , ...paramTypes) : ReturnType
function mySum (a: number, b: number) : number {
  return a + b;
}
mySum(1,2); // work
// mySum(1,2,3); // error :Type 'number' is not assignable to type 'void'.
// mySum('a' , 'b'); // error :Type 'string' is not assignable to type 'number'.


// -------------4. Custom Type Cho Object------------
type Student = {
  name :string
  age :number
  isMale :boolean
  address ?:string // optional property : Có thể có hoặc không (Không  ràng buộc) 
}
const student : Student = {
  name : 'A',
  age : 10,
  isMale : true,
}

// Nên sử dụng interface thay thế cho type
interface Student2 {
  name :string
  age :number
  isMale :boolean
}
const student2 : Student2 = {
  name : 'Hậu Interface',
  age : 10,
  isMale : true,
}

// -------------5. Union Types------------
let myUnion : number | string;
myUnion = 1;
myUnion = 'A';

function myUnionType(a: number | string) : number | string {
  return a;
}
myUnionType(1); // work
myUnionType('A'); // work
// myUnionType(true); // error :Type 'boolean' is not assignable to type 'number | string'.

let result : Student | null = null;
setTimeout(()=>{
  return result = {name : 'A', age : 10, isMale : true};
},3000)

// Dùng Record để khỏi tạo 1 object chưa xác định được key và value 
const todo : Record<string,unknown> = {
  title : 'Do HomeWork',
  completed : false,
  id : 1,
}
todo.descriptions = 'React caption project';

interface Todo  {
  title : string
  completed : boolean
  id : number
}
// Tạo custom type todo
// Pick : Tạo ra 1 type mới từ type ban đầu chọn 1 số thuộc tính và tạo ra type mới
// Omit : Tạo ra 1 type mới từ type ban đầu và remote 1 số thuộc tính 

const pickTodo : Pick<Todo , 'title' | 'id'> = { // Ví du: chỉ lấy 2 thuộc tính title và id
  title : 'Do HomeWork',
  id : 1,
}

const omitTodo : Omit<Todo , 'completed'> = { // Ví du: loại bỏ  id
  title : 'Do HomeWork',
  id:123,
  // completed: false => error : Vì completed  có trong interface Todo nhưng đã bị remove
}



// -------------6. Interface Extends, Implements------------

// class Employees {
//   name : string;
//   age : number;
//   constructor(name : string, age : number) {
//     this.name = name;
//     this.age = age;
//   }
//   calcSalary() : number {
//     return 1000;
//   }
// }

// class Manager extends Employees {
//   coefficientsSalary : number;
//   constructor(name : string, age : number, coefficientsSalary : number) {
//     super(name, age);
//     this.coefficientsSalary = coefficientsSalary;
//   }
//   calcSalary(): number {
//     return super.calcSalary() * this.coefficientsSalary;
//   }
// }

interface Employees {
  name : string;
  age : number;
  gender:boolean;
  calcSalary() : number;
}
interface Engineer {
  languages : string[]
}

class FrontendEngineer implements Employees, Engineer {
  name: string;
  age: number;
  gender: boolean;
  languages: string[];
  constructor(name:string , age : number , gender: boolean ,languages: string[] ){
    this.name = name;
    this.age = age;
    this.gender = gender
    this.languages = languages
  }
  calcSalary(): number {
    return 1000
  }
}
const fresher = new FrontendEngineer('Hau' , 20, true, ['HTML' , 'CSS' , 'JS' , 'TS' , 'React'])

// class Header extends Component {
//   componentDidMount(){
//   }
//   componentWillUnmount(){

//   }
// }

interface NgOnInit{
  ngOnInit():void;
}
class Header implements NgOnInit {
  ngOnInit() {
  }
}


// -------------7. Generic------------

// Không thể xác định kiểu dữ liệu tại thời điểm định nghĩa hàm => Dùng kỹ thuật generic
// function getApi<T>(url:string, options : Record<string , unknown> = { }) : Promise<T> {
//   return axios.get(url, options)
// }