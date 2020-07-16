const sayHi = (name:string, age:number,gender:string): string => {
    return `hello ${name}, your are a ${gender}`;
};

console.log(sayHi("Nicolas",24,"male"));

export {};