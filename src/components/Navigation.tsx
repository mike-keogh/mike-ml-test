import { NavigationItem } from "./NavigationItem";

export const Navigation = ({ navigationItems }) => {
  return (
    <ul className='navigationContainer'>
      {navigationItems.map((item: any, index: number) => (
        <NavigationItem {...item} key={index} />
      ))}
    </ul>
  );
};
