// import type { Equal, Expect } from '@type-challenges/utils';
import type { Equal, Expect } from '../test-utils';
export default (() => {
  const name: string = 'pick';
  console.log(name);

  type cases = [
    Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
    Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
    Expect<Equal<Todo, MyPick<Todo, 'title' | 'description' | 'completed'>>>,
    // @ts-expect-error
    Expect<Equal<Todo, MyPick<Todo, 'title' | 'completed' | 'invalid'>>>
  ];

  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  interface Expected1 {
    title: string;
  }

  interface Expected2 {
    title: string;
    completed: boolean;
  }

  // ============= Your Code Here =============
  // type MyPick<T, K> = any
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  // let testResult:cases=[true,true,true,false];
  // console.log(testResult);

  // type TodoPreview = MyPick<Todo, 'title' >;
  type TodoPreview = MyPick<Todo, 'title' | 'completed'>;
  // type TodoPreview = MyPick<Todo, 'title' | 'description' | 'completed'>;

  const todo: TodoPreview = {
    title: 'Clean room',
    // description: 'just for test',
    completed: false,
  };

  console.table(todo);
})();
