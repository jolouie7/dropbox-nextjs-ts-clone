import React from "react";

const Sidebar = () => {
  return (
    <>
      <aside className="fixed top-0 left-0 w-64 h-screen" aria-label="Sidebar">
        <div className="flex flex-col bg-gray-50 h-full px-3 py-4">
          <ul className="space-y-4">
            <li className="ml-2">
              <img
                className="object-contain h-14 w-28"
                src="/dropbox_logo_2017.svg"
                alt="Dropbox Logo"
              />
            </li>
            <li>
              <a className="p-2 hover:text-blue-700" href="#">
                Files
              </a>
            </li>
            <li>
              <a className="p-2 hover:text-blue-700" href="#">
                Sharing
              </a>
            </li>
            <li>
              <a className="p-2 hover:text-blue-700" href="#">
                Recents
              </a>
            </li>
            <li>
              <a className="p-2 hover:text-blue-700" href="#">
                File requests
              </a>
            </li>
            <li>
              <a className="p-2 hover:text-blue-700" href="#">
                Deleted Files
              </a>
            </li>
          </ul>

          <div className="mt-auto">
            <div className="border border-slate-200" />
            <div className="flex items-center justify-between px-2 py-4">
              <div>
                <div>Acme Inc</div>
                <div>34 Members</div>
              </div>
              <div>{"<>"}</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
