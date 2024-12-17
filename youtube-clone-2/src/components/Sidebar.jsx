
////////////////////////correct///////////////////////
// import React from 'react'
// import { GoHome } from "react-icons/go";
// import { SiYoutubeshorts } from "react-icons/si";
// import { MdMusicNote, MdOutlineSubscriptions, MdWatchLater } from "react-icons/md";
// import {FaChevronRight, FaCircleChevronRight } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa";
// import { SiYoutubestudio } from "react-icons/si";
// import { SiYoutubekids } from "react-icons/si";
// import { SiYoutubemusic } from "react-icons/si";
// import { SiTrendmicro } from "react-icons/si";
// import {HiOutlineShoppingBag } from "react-icons/hi2";
// import { PiMusicNoteLight} from "react-icons/pi";
// import {PiFilmSlateLight } from "react-icons/pi";
// import {CgMediaLive } from "react-icons/cg";
// import { SiYoutubegaming } from "react-icons/si";
// import {FaRegNewspaper } from "react-icons/fa";
// import {TfiCup } from "react-icons/tfi";
// import { PiLightbulbLight } from "react-icons/pi";
// import { SiStylelint} from "react-icons/si";
// import { MdPodcasts } from "react-icons/md";
// import { GoVideo } from "react-icons/go";
// import { AiOutlineLike } from "react-icons/ai";
// import { MdOutlinePlaylistPlay } from "react-icons/md";
// import { RiHistoryFill } from "react-icons/ri";
// import { MdOutlineWatchLater } from "react-icons/md";
// import { BiLike } from "react-icons/bi";
// import { BsPersonVideo } from "react-icons/bs";
// import { BsFire } from "react-icons/bs";
// import { RiShoppingBag4Line } from "react-icons/ri";
// import { MdOutlineNewspaper } from "react-icons/md";
// import { TfiCup } from "react-icons/tfi";
// import { GiHanger } from "react-icons/gi";

// function Sidebar() {
//     const sidebarItems = [
//     ];
    

//     const sidebarItems2 = [
//     ];
    
//     const sidebarItems3 = [
//     ];
    
     
//         {
//             id: 1,
//             name: "Trending",
//             icon: <BsFire />,
//         },
//         {
//             id: 2,
//             name: "Shopping",
//             icon: <RiShoppingBag4Line />,
//         },
//         {
//             id: 3,
//             name: "Music",
//             icon: <MdMusicNote/>,
//         },
//         {
//             id: 4,
//             name: "Films",
//             icon: <PiFilmSlateLight/>,
//         },
//         {
//             id: 5,
//             name: "Live",
//             icon:<CgMediaLive/>,
//         },
//         {
//             id: 6,
//             name: "Gaming",
//             icon: <SiYoutubegaming/>,
//         },
//         {
//             id:7,
//             name:"News",
//             icon:<MdOutlineNewspaper />,
//         },

//         {
//             id:8,
//             name:"Sports",
//             icon:<TfiCup />,

//         },

//         {
//             id:9,
//             name:"Courses",
//             icon:<SiStylelint/>,
//         },

//         {
//             id:10,
//             name:"Fashion & beauty",
//             icon:"<GiHanger />"
//         },

//         {
//             id:11,
//             name:"Pocasts",
//             icon: <MdPodcasts/>,

//          },
    
//        ];

//     return (
//         <div className="px-6 w-[15%]">
//             {/* Home Section */}
//             <div className="space-y-3 items-center">
//                 {sidebarItems.map((item) => (
//                     <div
//                         key={item.id}
//                         className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
//                     >
//                         <div className="text-xl cursor-pointer">{item.icon}</div>
//                         <span className="cursor-pointer">{item.name}</span>
//                     </div>
//                 ))}
//             </div>

//             <br />
//             <hr />

//             {/* You Section */}
//             <div className="mt-4 space-y-3 items-center">
//                 <div className="flex items-center space-x-2">
//                     <h1>You</h1>
//                     <FaChevronRight />
//                 </div>
//                 {sidebarItems2.map((item) => (
//                     <div
//                         key={item.id}
//                         className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
//                     >
//                         <div className="text-xl cursor-pointer">{item.icon}</div>
//                         <span className="cursor-pointer">{item.name}</span>
//                     </div>
//                 ))}
//             </div>

//             <br />
//             <hr />

//             {/* Explore Section */}
//             <div className="mt-4 space-y-3 items-center">
//                 <div className=" items-center space-x-2">
//                     <h1 className=" font-semibold">Explore</h1>
                    
//                 </div>
//                 {sidebarItems3.map((item) => (
//                     <div
//                         key={item.id}
//                         className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
//                     >
//                         <div className="text-xl cursor-pointer">{item.icon}</div>
//                         <span className="cursor-pointer">{item.name}</span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Sidebar;






///////////////////////////////////




///////////////////////////////////////////////

import React from 'react';
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdMusicNote, MdOutlineSubscriptions, MdWatchLater, MdOutlineNewspaper, MdPlaylistPlay, MdPodcasts } from "react-icons/md";
import { FaChevronRight, FaYoutube } from "react-icons/fa";
import { SiYoutubestudio, SiYoutubekids, SiYoutubemusic, SiTrendmicro, SiStylelint, SiYoutubegaming } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { TfiCup } from "react-icons/tfi";
import { GoVideo } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { RiHistoryFill, RiShoppingBag4Line } from "react-icons/ri";
import { GiHanger } from "react-icons/gi";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import home_icon from "../assets/home_icon.gif"
import youtube_studio from "../assets/youtube_studio.gif"
import shopping from "../assets/shopping.gif"
import fire from "../assets/fire.gif"
import history from "../assets/history.gif"
import yourvideo from "../assets/yourvideo.gif"

function Sidebar() {
    const sidebarItems = [
        {
            id: 1,
            name: "Home",
            icon: <img src={home_icon} alt="Home" className="w-6 h-6" />,
        },


        {  
            id: 2,
            name: "Shorts",
            icon: <SiYoutubeshorts />,
            
        },
        {
            id: 3,
            name: "Subscriptions",
            icon: <MdOutlineSubscriptions />,
        },
    ];

    const sidebarItems2 = [
        {
            id: 1,
            name: "History",
            icon: <img src={history} alt="Home" className="w-6 h-6" />,
        },
        {
            id: 2,
            name: "Playlists",
            icon: <MdPlaylistPlay />,
        },
        {
            id: 3,
            name: "Your Videos",
            icon: <img src={yourvideo} alt="Home" className="w-6 h-6" />,
        },
        {
            id: 4,
            name: "Watch Later",
            icon: <MdWatchLater />,
        },
        {
            id: 5,
            name: "Liked Videos",
            icon: <BiLike />,
        },
    ];

    const sidebarItems3 = [
        {
            id: 1,
            name: "Trending",
            icon: <img src={fire} alt="Home" className="w-6 h-6" />
        },
        {
            id: 2,
            name: "Shopping",
            icon: <img src={shopping} alt="Home" className="w-6 h-6" />,
        },
        {
            id: 3,
            name: "Music",
            icon: <MdMusicNote />,
        },
        {
            id: 4,
            name: "Films",
            icon: <PiFilmSlateLight />,
        },
        {
            id: 5,
            name: "Live",
            icon: <CgMediaLive />,
        },
        {
            id: 6,
            name: "Gaming",
            icon: <SiYoutubegaming />,
        },
        {
            id: 7,
            name: "News",
            icon: <MdOutlineNewspaper />,
        },
        {
            id: 8,
            name: "Sports",
            icon: <TfiCup />,
        },
        {
            id: 9,
            name: "Courses",
            icon: <RiGraduationCapLine />,
        },
        {
            id: 10,
            name: "Fashion & Beauty",
            icon: <GiHanger />,
        },
        {
            id: 11,
            name: "Podcasts",
            icon: <MdPodcasts />,
        },
    ];

    const sidebarItems4 = [
        {
            id: 1,
            name: "YouTube Premium",
            icon: <FaYoutube />,
        },
        {
            id: 2,
            name: "YouTube Studio",
            icon:  <SiYoutubestudio/>,
        },
        {
            id: 3,
            name: "YouTube Music",
            icon: <SiYoutubemusic />,
        },
        {
            id: 4,
            name: "YouTube Kids",
            icon: <SiYoutubekids/>,
        },
    ];
    const sidebarItems5 = [
        {
            id: 1,
            name: "Settings",
            icon: <IoSettingsOutline />,
        },
        {
            id: 2,
            name: "Report history",
            icon: <MdOutlineOutlinedFlag />,
        },
        {
            id: 3,
            name: "Help",
            icon: <IoIosHelpCircleOutline />,
        },

        {
            id: 4,
            name: "Send feedback",
            icon: <MdOutlineFeedback />,
        },

    ];
  

    return (
        <div className="px-6 w-[13%] h-[calc(100vh-6.25rem)] overflow-y-scroll overflow-x-hidden ">
            {/* Home Section */}
            <div className="space-y-3 items-center">
                {sidebarItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center space-x-6 hover:bg-gray-300 duration-300  p-1"
                    >
                        <div className={`text-xl  cursor-pointer ${
                            item.name === "Shorts" ? "text-red-600" : ""
                        }`} 
                        >
                            {item.icon}
                            </div>
                        <span className="cursor-pointer">{item.name}</span>
                    </div>
                ))}
            </div>

            <br />
            <hr />

            {/* You Section */}
            <div className="mt-4 space-y-3 items-center">
                <div className="flex items-center space-x-2">
                    <h1>You</h1>
                    <FaChevronRight />
                </div>
                {sidebarItems2.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
                    >
                        <div className="text-xl cursor-pointer">{item.icon}</div>
                        <span className="cursor-pointer">{item.name}</span>
                    </div>
                ))}
            </div>

            <br />
            <hr />

            {/* Explore Section */}
            <div className="mt-4 space-y-3 items-center">
                <div className="items-center space-x-2">
                    <h1 className="font-semibold">Explore</h1>
                </div>
                {sidebarItems3.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
                    >
                        <div className="text-xl cursor-pointer">{item.icon}</div>
                        <span className="cursor-pointer">{item.name}</span>
                    </div>
                ))}
            </div>

            <br />
            <hr />

            {/* More Section */}
            <div className="  mt-4 space-y-3 items-center">
                <div className=" flex items-center space-x-2">
                    <h1 className="  font-semibold">More From Youtube </h1>
                </div>
                {sidebarItems4.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
                    >
                        <div className="  text-xl cursor-pointer text-red-600">{item.icon}</div>
                        <span className="  cursor-pointer">{item.name}</span>
                    </div>
                ))}
            </div>

            <br />
            <hr />
               {/* settings */}
               <div className="mt-4 space-y-3 items-center">
                <div className="items-center space-x-2">
                    <h1 className="font-semibold"></h1>
                </div>
                {sidebarItems5.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
                    >
                        <div className="text-xl cursor-pointer">{item.icon}</div>
                        <span className="cursor-pointer">{item.name}</span>
                    </div>
                ))}
            </div>

            <br />
            <hr />
            <br/>
            <span className="text-xs font-semibold text-gray-800">
                About Press Copyright 
                <br/>
                 Contact us Creators
                 <br/>
                  Advertise Developers
                   <br/> <br/>
            <p>
                 Terms Privacy Policy & Safety <br/>How YouTube works <br/>Test new features 
            </p>
             </span>
             <br/>
             <p className="text-xs text-gray-800 mt-1">  © 2024 Google LLC </p>
             
            
        </div>
    );
}

export default Sidebar;
