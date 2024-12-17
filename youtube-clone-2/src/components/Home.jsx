// import React from 'react'
// import Sidebar from "./Sidebar.jsx"
// import Video from "./Video.jsx"
// import { useAuth } from "../context/AuthProvider.jsx";

// function  Home() {
//   const { data } = useAuth();         
//   console.log(data);

//   return (
//     <div className="flex">
//       <Sidebar/>
//       <div>
//        {
//         data.map((item) => {
//           if (item.type !== "video") return false;
//           return <Video key={item.id} video={item?.video} />;
//  } )}
       
//       </div>
//     </div>
//   );
// }

// export default Home;   



///////


/////correct video////
// import React from "react";
// import Sidebar from "./Sidebar.jsx";
// import Video from "./Video.jsx";
// import { useAuth } from "../context/AuthProvider.jsx";

// function Home() {
//   const { data } = useAuth();
//   console.log(data);

  
//   const videoData = Array.isArray(data) ? data : [];

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div>
//         {videoData.map((item) => {
//           if (item.type !== "video") return null;
//           return <Video key={item.id} video={item?.video} />;
//         })}
//       </div>
//     </div>
//   );
// }

// export default Home;

////////////


//////ch//////
import React from "react";
import Sidebar from "./Sidebar.jsx";
import Video from "./Video.jsx";
import { useAuth } from "../context/AuthProvider.jsx";

function Home() {
  const { data } = useAuth();
  console.log(data);


  const videoData = Array.isArray(data) ? data : [];

  return (
    <div className="flex mt-20">
      <Sidebar />
     <div className="  h-[calc(100vh-6.25rem)] overflow-y-scroll overflow-x-hidden ">
     <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 p-5 ">
        {videoData
          .filter((item) => item.type === "video" && item.video) 
          .map((item) => (
            <Video key={item.id} video={item.video} />
          ))}
      </div>

     </div>
    </div>
  );
}

export default Home;


