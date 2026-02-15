//Task 1
let userName: string;
let userAge: number;
let isStudent: boolean;
let emptyValue: null;
let notAssigned: undefined;

//Task 2
let something: unknown;
something = 'string';
something = 2;
something = true;

//Task 3
function printValue(something: unknown): void {
  if (typeof something === 'string') {
    console.log(something.length);
  } else if (typeof something === 'number') {
    console.log(something ** 2);
  } else {
    console.log('Невідомий тип');
  }
}

//Task 4
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const user1: User = {
  id: 1,
  name: 'Paulo',
  email: 'paulo@gmail.com',
  isActive: true,
};

//Task 5
interface Userr {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  phone?: string;
}

const user2: Userr = {
  id: 1,
  name: 'Paulo',
  email: 'paulo@gmail.com',
  isActive: true,
};

//Task 6
interface Product {
  title: string;
  price: number;
  tags: string[];
}

const productArray: Product[] = [
  { title: 'Milk', price: 20, tags: ['cow', 'nature'] },
  { title: 'Cookies', price: 30, tags: ['children', 'nature', 'chocko'] },
  { title: 'Bread', price: 15, tags: ['white', 'good'] },
];

//Task 7
let id: string | number;
id = 2;
id = '3';

//Task 8
function formatId(id: string | number): string {
  if (typeof id === 'number') {
    return `ID: 123`; // Повертає "ID: abc" для рядка "abc"
  }
  return `ID: abc`; // Повертає "ID: 123" для числа 123
}

//Task 9
type Status = 'success' | 'error' | 'loading';
let currentStatus: Status = 'success';

// Task 10
let numbers: number[] = [1, 2, 3];
let strings: string[] = ['a', 'b', 'c'];
let flags: boolean[] = [true, false, false];

//Task 11
let users: Userr[] = [
  {
    id: 1,
    name: 'Paulo',
    email: 'paulo@gmail.com',
    isActive: true,
  },
  {
    id: 2,
    name: 'Ann',
    email: 'ann@gmail.com',
    isActive: false,
    phone: '0661111111',
  },
  {
    id: 3,
    name: 'Mark',
    email: 'mark@gmail.com',
    isActive: true,
  },
];

//Task 12
let mixedArray: (number | string)[] = [1, 'a', 'c', 3];

//Task 13
function sum(a: number, b: number): number {
  return a + b;
}

//Task 14
function greet(name: string): void {
  console.log(`Hello, ${name}`);
}

//Task 15
function getDiscount(price: number, discount: number): number {
  return price - (price * discount) / 100;
}

//Task 16
type Status1 = 'success' | 'error';
function handleResponse(status: Status1, data: unknown): string | number {
  if (status === 'success' && typeof data === 'string') {
    return data.length;
  } else if (status === 'success' && typeof data === 'number') {
    return data * 2;
  } else {
    return 'Something went wrong';
  }
}
