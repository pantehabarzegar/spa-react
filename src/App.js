import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IndexUser from "./pages/users/Index";
import ShowUser from "./pages/users/Show";
import IndexPost from "./pages/posts/Index";
import ShowPost from "./pages/posts/Show";
import CreatePost from "./pages/posts/Create";
import EditPost from "./pages/posts/Edit";
import Footer from "./components/Footer";



function App() {
  return (
<BrowserRouter>
<Header></Header>
<Routes>
  <Route exact path="/" element={<Home/>}></Route>
  <Route exact  path="/users" element={<IndexUser/>}></Route>
  <Route exact path="/users/:userId" element={<ShowUser/>}></Route>
  <Route exact  path="/Posts" element={<IndexPost/>}></Route>
  <Route exact  path="/posts/:postId" element={<ShowPost/>}></Route>
  <Route exact  path="/posts/create" element={<CreatePost/>}></Route>
  <Route   path="/posts/edit/:postId" element={<EditPost/>}></Route>
  
  
</Routes>
<Footer></Footer>
</BrowserRouter>
  );
}

export default App;
