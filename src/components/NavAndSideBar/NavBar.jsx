// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import SongContext from "../../contexts/SongContext";

// const NavBar = () => {
//   const { searchQuery, setSearchQuery } = useContext(SongContext);
//   const navigate = useNavigate();
//   const [localSearchQuery, setLocalSearchQuery] = useState("");

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (localSearchQuery.trim()) {
//       setSearchQuery(localSearchQuery);
//       navigate(`/search/${localSearchQuery}`);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center relative top-3 left-0 w-full z-50 ">
//       <form
//         className="flex justify-center w-full max-w-[600px] mx-auto "
//         onSubmit={handleSearchSubmit}
//       >
//         <label htmlFor="default-search" className="sr-only">
//           Search
//         </label>
//         <div className="flex items-center justify-center w-full max-[1152px]:w-96 max-[1152px]:relative max-[1152px]:left-20 min-[712px]px:w-20">
//           <input
//             type="search"
//             id="default-search"
//             className="w-full p-3 text-white bg-black rounded-lg text-sm font-base bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent border-2 border-red-700/40"
//             placeholder="Search Songs, Albums, Playlists..."
//             value={localSearchQuery}
//             onChange={(e) => setLocalSearchQuery(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             className="ml-2 text-white rounded-full text-sm border border-white/20 font-bold bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent bg-blue-700 hover:bg-blue-800 px-4 py-2 hover:border-white/50 hover:text-white"
//           >
//             <svg
//               className="w-4 h-4 text-white"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//               />
//             </svg>
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default NavBar;
