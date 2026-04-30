import ArticleMain from "./components/articles/ArticleMain.jsx";
import Calc from "./components/homework/Calc.jsx";
import Counter from "./components/homework/Counter.jsx";
import TmdbMain from "./components/tmdb/TMDBMain.jsx";
import TodoMain from "./components/todo/TodoMain.jsx";
import { ReactReduxProvider } from "./stores/redux/ReactReduxProvider.jsx";

export default function App() {
  // return <TmdbMain />;
  return (
    <ReactReduxProvider>
      <TodoMain />
    </ReactReduxProvider>
  );
  // return (
  //   <ReactReduxProvider>
  //     <ArticleMain />
  //   </ReactReduxProvider>
  // );
  // return (

  // );
}

//export default App;
