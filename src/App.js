import { Gallery } from "./Components/Gallery";
import { TodoList } from "./Components/ToDoList";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Gallery/>
      <TodoList/>
    </div>
  );
}

