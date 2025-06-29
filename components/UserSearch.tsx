// // components/UserSearch.tsx
// "use client";

// import React, { useEffect, useState } from "react";

// export default function UserSearch() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     const delayDebounce = setTimeout(() => {
//       if (query.trim().length > 0) {
//         setLoading(true);
//         fetch(`/api/users?query=${query}`)
//           .then((res) => res.json())
//           .then((data) => {
//             setResults(data.users);
//             setShowDropdown(true);
//           })
//           .catch(() => setResults([]))
//           .finally(() => setLoading(false));
//       } else {
//         setResults([]);
//         setShowDropdown(false);
//       }
//     }, 3000); // debounce 300ms

//     return () => clearTimeout(delayDebounce);
//   }, [query]);

//   return (
//     <div className="relative w-full max-w-md">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search users..."
//         className="w-full border text-white border-gray-300 rounded px-4 py-2"
//       />
//       {loading && (
//         <div className="absolute right-2 top-2 text-sm text-white">Loading...</div>
//       )}

//       {showDropdown && (
//         <ul className="absolute z-10 w-full bg-white border mt-1 rounded shadow max-h-60 overflow-y-auto">
//           {results.length > 0 ? (
//             results.map((user) => (
//               <li
//                 key={user.id}
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//               >
//                 {user.firstName} {user.lastName} (@{user.name})
//               </li>
//             ))
//           ) : (
//             <li className="px-4 py-2 text-black">No users found</li>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// }
