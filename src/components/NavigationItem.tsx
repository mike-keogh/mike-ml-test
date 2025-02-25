import { useState } from "react";

import { Navigation } from "./Navigation";

type NavigationChildren = Omit<NavigationItemType, "children">;

type NavigationItemType = {
  name: string;
  id: number;
  children: NavigationChildren[];
};

export const NavigationItem = ({ id, children, name }: NavigationItemType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hasChildren = children && children.length > 0;
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li id={`${name}-${id}`}>
      <div className='navigationItemContainer'>
        <p>{name}</p>
        {hasChildren && (
          <span className='toggle' onClick={() => handleToggle()}>
            {isOpen ? "-" : "+"}
          </span>
        )}
      </div>
      {hasChildren && isOpen && <Navigation navigationItems={children} />}
    </li>
  );
};
