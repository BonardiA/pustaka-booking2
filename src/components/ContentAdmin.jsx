import React from "react";

function ContentAdmin({ children }) {
  return (
    <div className=" ml-64">
      <div className=" rounded-xl p-10 mt-28 mx-10 border shadow-lg">
        {children}
      </div>
    </div>
  );
}

export default ContentAdmin;
