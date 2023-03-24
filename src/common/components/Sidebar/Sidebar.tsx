import React from "react";

const Sidebar = () => {
  return (
    <>
      <aside className="fixed top-0 left-0 w-64 h-screen" aria-label="Sidebar">
        <div className="bg-gray-100 h-full px-3 py-4">
          <ul className="space-y-4 mx-4">
            <li>
              <img
                className="object-contain h-14 w-28"
                src="/dropbox_logo_2017.svg"
                alt="Dropbox Logo"
              />
            </li>
            <li>
              <a href="#">Files</a>
            </li>
            <li>
              <a href="#">Sharing</a>
            </li>
            <li>
              <a href="#">Recents</a>
            </li>
            <li>
              <a href="#">File requests</a>
            </li>
            <li>
              <a href="#">Deleted Files</a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
