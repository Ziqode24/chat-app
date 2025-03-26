
const AuthImagePattern = ({title, subtitle}) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div key={i}
            className={`aspect-square rounded-2xl bg-primary/10 ${i%2 === 0 ? "animate-pulse" : ""}`}
            ></div>
          ))}
        </div>  
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
         
    </div>
  )
}

export default AuthImagePattern

// Another one i made

// "use client";

// import { useEffect, useRef } from "react";

// const AuthImagePattern = ({ title, subtitle }) => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const boxes = containerRef.current.querySelectorAll(".box");

//     boxes.forEach((box) => {
//       const rotation = (Math.random() * 8 - 4).toFixed(2);
//       box.style.transform = `rotate(${rotation}deg)`;

//       const handleMouseEnter = () => {
//         box.style.transform = "scale(1.1) rotate(0deg)";
//         box.style.zIndex = "10";
//       };

//       const handleMouseLeave = () => {
//         box.style.transform = `rotate(${rotation}deg)`;
//         box.style.zIndex = "";
//       };

//       box.addEventListener("mouseenter", handleMouseEnter);
//       box.addEventListener("mouseleave", handleMouseLeave);

//       return () => {
//         box.removeEventListener("mouseenter", handleMouseEnter);
//         box.removeEventListener("mouseleave", handleMouseLeave);
//       };
//     });
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="hidden lg:flex items-center justify-center bg-base-200 p-12"
//     >
//       <div className="max-w-md text-center">
//         <div className="grid grid-cols-3 gap-4 mb-8 relative">
//           {[...Array(9)].map((_, i) => (
//             <div
//               key={i}
//               className={`box aspect-square rounded-xl bg-primary/10 transition-transform duration-300 ${i % 2 === 0 ? 'animate-pulse' : ''}`}
//             ></div>
//           ))}
//         </div>
//         <h2 className="text-3xl font-semibold mb-4 text-base-content">{title}</h2>
//         <p className="text-base-content/60 text-lg leading-relaxed">{subtitle}</p>
//       </div>
//     </div>
//   );
// };

// export default AuthImagePattern;