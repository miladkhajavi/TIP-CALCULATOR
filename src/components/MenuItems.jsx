import { Stack } from '@twilio-paste/stack';
import {
  Card,
  Text,
} from '@twilio-paste/core';
import { MenuItemContainer } from '../containers/menuItemContainer';

export const MenuItems = ({ items }) => {
  return (
    (items.length !== 0) ? <Stack orientation="vertical" spacing="space60">
      {items.map((item) => (
       
        <MenuItemContainer {...item} key = {item.uuid} />
      
      ))}
    </Stack> :
    <Card padding="space100">
    <Text as='h1' textAlign="center">
        سبد خرید خالی است
    </Text>
  </Card>
    
  );
};
