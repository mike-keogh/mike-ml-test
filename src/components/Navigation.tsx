import { NavigationItem } from "./NavigationItem";

export const Navigation = ({ navigationItems }) => {
  console.log("navigationItems", navigationItems);
  return (
    <ul>
      {navigationItems.map((item: any) => (
        <NavigationItem {...item} />
      ))}
    </ul>
  );
};
