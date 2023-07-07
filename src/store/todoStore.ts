import { observable, action, makeAutoObservable } from 'mobx';
import { INewTodo, ITodo } from '../models';

class TodoStore {
  @observable todos: ITodo[] = [];
  @observable nextId = 1;

  constructor() {
    makeAutoObservable(this);
  }

  @action addTodo = (newTodo: Omit<ITodo, 'id'>) => {
    const todo: ITodo = {
      id: this.nextId,
      title: newTodo.title,
      text: newTodo.text,
      author: newTodo.author || '',
      isEdit: false
    };

    this.todos.push(todo);
    console.log(this.todos)
    this.nextId++;
  };
  
  @action setEditState = (todo: ITodo) => {
      todo.isEdit = !todo.isEdit;
  }

  @action editTodo = (id: number, editedTodo: INewTodo) => {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.title = editedTodo.newTitle;
      todo.text = editedTodo.newText;
    }
  };

  @action removeTodo = (id: number) => {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  };

  @action setAllClose = () => {
    this.todos.map(todo => todo.isEdit = false);
  };
}

const todoStore = new TodoStore();
export default todoStore;
