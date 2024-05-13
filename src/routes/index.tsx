import { component$ } from '@builder.io/qwik';
import { TodoList } from '../components/TodoList';
import { Carousel } from '~/components/Carousel';
import SwipeBox from  '../components/SwipeBox';

export default component$(() => {
  return (
    <div>
      {/* <h1>Todo List</h1>
      <TodoList /> */}
      {/* <Carousel /> */}
      
      <SwipeBox />
    </div>
  );
});
