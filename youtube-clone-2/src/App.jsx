//////////////////////////corrrect/////////////////////

// import React from 'react';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import { useAuth } from "./context/AuthProvider";

// function App() {
//   const { loading, data } = useAuth();

//   if (loading) {
//     return <div>Loading...</div>; // Replace with a spinner or a loading component if needed
//   }

//   return (
//     <div>
//       <Navbar />
//       <Sidebar />
//       {/* Optional: Display data if available */}
//       {data && <div>Welcome, {data.username || "User"}!</div>}
//     </div>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
import { Route , Routes } from "react-router-dom"
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayVideo"
import { useAuth } from "./context/AuthProvider";
 


function App() {
  const {loading,data}=useAuth()
  console.log(loading)
  console.log(data)
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/search/:searchQuery" element={<Search/>} />
        <Route path="/video/:id" element={<PlayingVideo/>} />

      </Routes>
    </div>
  );
}

export default App;
