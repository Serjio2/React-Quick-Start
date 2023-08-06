import { GlobalStyle } from "./GlobalStyle";
import { Gallery } from "./Components/Gallery";
import { ToDoList } from "./Components/ToDoList";
import Test from "./Components/Test";
import Avatar from "./Components/Avatar";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Gallery />
      <ToDoList />
      <Test />
      <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
    </div>
  );
};
