import react from "react";

import { fetchData } from "../data";

type NavigationChildren = Omit<NavigationItemType, "children">;

type NavigationItemType = {
  name: string;
  id: number;
  children: NavigationChildren[];
};

export const NavigationItem = ({ id, children, name }: NavigationItemType) => {
  return <li>{name}</li>;
};
