import { component$, useStore, $ } from '@builder.io/qwik';

export const TodoList = component$(() => {
  const state = useStore({
    todos: [] as { text: string; completed: boolean }[],
    newTodo: ''
  });

  const addTodo$ = $(() => {
    if (state.newTodo.trim()) {
      state.todos.push({ text: state.newTodo, completed: false });
      state.newTodo = '';
    }
  });

  const toggleTodo$ = $(index => {
    state.todos[index].completed = !state.todos[index].completed;
  });

  const deleteTodo$ = $(index => {
    state.todos.splice(index, 1);
  });

  return (
    <div>
      <input
        type="text"
        value={state.newTodo}
        onKeyUp$={(event) => {
          if (event.key === 'Enter') {
            addTodo$();
          }
        }}
        onInput$={(event) => state.newTodo = event.target.value}
      />
      <button onClick$={addTodo$}>Add Todo</button>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick$={() => toggleTodo$(index)} style={{ marginLeft: '10px' }}>
              {todo.completed ? 'Unmark' : 'Mark Complete'}
            </button>
            <button onClick$={() => deleteTodo$(index)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
