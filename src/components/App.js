import React from "react";

import SideNavbar from "./Navbar/SideNavbar";

function App() {
  return (
    <div className="flex h-full">
      < SideNavbar />
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home page</h1>
      </div>
    </div>
  );
}

export default App;
