import React from "react";
function Layout({ children }) {
  return (
    <div className="row-span-11 col-span-10 bg-gray-200 h-full">{children}</div>
  );
}
export { Layout };
