
export interface ITodo {
    id: number;
    title?: string;
    text: string;
    author?: string; 
    isEdit: boolean;
}

export interface INewTodo {
  newTitle: string,
  newText: string
}

export interface ITodoListProps {
    todoStore?: {
      todos: ITodo[];
      editTodo: (id: number, newText: string) => void;
      removeTodo: (id: number) => void;
    };
  }

export interface ITodoAddProps {
  addTodo: (text: string) => void;
}

export type { IUser } from './user.model';
export type { IPost } from './post.model';
export type { IComment } from './comment.model';
