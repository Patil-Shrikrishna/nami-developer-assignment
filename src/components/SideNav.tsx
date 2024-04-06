import React from "react";
import homeIcon from "../assets/home.png";
import consoleIcon from "../assets/console.png";
import attendanceIcon from "../assets/attendance.png";
import overviewIcon from "../assets/overview.png";
import staffIcon from "../assets/staff.png";
import dropdownIcon from "../assets/dropdown.png";

const SideNav: React.FC = () => {
  type MenuItem = {
    id: string;
    label: string;
    icon: string;
    submenu?: MenuItem[];
  };
  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
  const [selectedSubItem, setSelectedSubItem] = React.useState<string | null>(
    null
  );
  const menuItems: MenuItem[] = [
    { id: "home", label: "Home", icon: homeIcon },
    {
      id: "console",
      label: "Console",
      icon: consoleIcon,
      submenu: [
        { id: "attendance", label: "Attendance", icon: attendanceIcon },
        { id: "overview", label: "Overview", icon: overviewIcon },
        { id: "staff", label: "Staff", icon: staffIcon },
      ],
    },
  ];
  const handleMenuItemClick = (itemId: string) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === itemId ? null : itemId
    );
  };

  const handleSubMenuItemClick = (itemId: string) => {
    setSelectedSubItem((prevSelectedSubItem) =>
      prevSelectedSubItem === itemId ? null : itemId
    );
  };

  return (
    <div className="flex flex-col w-2/6  ">
      {menuItems.map((menuItem) => (
        <div key={menuItem.id}>
          <div
            className={`${
              selectedItem === menuItem.id &&
              "bg-gray-400 border-b-4 border-[#DC5B19]"
            } flex gap-3 px-6 py-1 items-center `}
            onClick={() => handleMenuItemClick(menuItem.id)}
          >
            {menuItem.submenu && <img src={dropdownIcon} className="h-2" />}
            <img src={menuItem.icon} className="h-4" />
            <h1 className="text-xl font-semibold">{menuItem.label}</h1>
          </div>
          {selectedItem === "console" && menuItem.submenu && (
            <ul>
              {menuItem.submenu.map((submenuItem) => (
                <li
                  key={submenuItem.id}
                  className={`${
                    selectedSubItem === submenuItem.id &&
                    "bg-gray-400 border-b-4 border-[#DC5B19]"
                  } flex gap-3 px-14 py-1 items-center `}
                  onClick={() => handleSubMenuItemClick(submenuItem.id)}
                >
                  <img
                    src={submenuItem.icon}
                    className="h-4"
                    alt={`${submenuItem.label} Icon`}
                  />
                  <h1 className="text-xl font-semibold">{submenuItem.label}</h1>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideNav;
