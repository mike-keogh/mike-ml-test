import { NavigationItem } from "./NavigationItem";

type NavigationItemsType = { navigationItems: Record<string, any>[] };
export const Navigation = ({ navigationItems }: NavigationItemsType) => {
  return (
    <ul className='navigationContainer'>
      {navigationItems.map((item: any, index: number) => (
        <NavigationItem {...item} key={index} />
      ))}
    </ul>
  );
};
