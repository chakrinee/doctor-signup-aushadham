// import React from "react";
// import classnames from "classnames";

// function Button({
//   children,
//   primary,
//   secondary,
//   success,
//   warning,
//   danger,
//   outlined,
//   big,
//   ...rest
// }) {
//   console.log(outlined);

//   const classes = classnames(rest.className, "px-6 py-2 rounded-lg ", {
//     "bg-indigo-400 text-white": primary,
//     "bg-violet-600 text-white": secondary,
//     "bg-green-400 text-white": success,
//     "bg-yellow-500 text-white": warning,
//     "bg-red-400 text-white": danger,
//     "bg-white border-2": outlined,
//     "border-indigo-400 text-indigo-400": primary && outlined,
//     "border-violet-600 text-violet-600": secondary && outlined,
//     "border-green-400 text-green-400": success && outlined,
//     "border-yellow-500 text-yellow-500": warning && outlined,
//     "border-red-400 text-red-400": danger && outlined,
//     "block w-full": big,
//   });
//   return (
//     <button {...rest} className={classes}>
//       {children}
//     </button>
//   );
// }

// export default Button;

import React from "react";
import classnames from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outlined,
  big,
  ...rest
}) {
  const classes = classnames(rest.className, "px-6 py-3 rounded-lg border-2", {
    "bg-indigo-500 text-white border-indigo-500": primary && !outlined,
    "bg-violet-600 text-white border-violet-600": secondary && !outlined,
    "bg-green-400 text-white border-green-400": success && !outlined,
    "bg-yellow-500 text-white border-yellow-500": warning && !outlined,
    "bg-red-400 text-white border-red-400": danger && !outlined,
    "bg-white": outlined,
    "border-indigo-500 text-indigo-500": primary && outlined,
    "border-violet-600 text-violet-600": secondary && outlined,
    "border-green-400 text-green-400": success && outlined,
    "border-yellow-500 text-yellow-500": warning && outlined,
    "border-red-400 text-red-400": danger && outlined,
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
