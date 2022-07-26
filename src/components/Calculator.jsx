import { Card } from '@twilio-paste/core';
import { MenuItemsContainer } from '../containers/menuItemsContainer';
import { NewItemFormContainer } from '../containers/newItemFormContainer';
import { SummaryContainer } from '../containers/summaryContainer';
import { TipSelectContainer } from '../containers/TipSelectContainer';



const Calculator = () => {
  return (
    <Card>
      <NewItemFormContainer />
      <MenuItemsContainer/>
      <TipSelectContainer />
      <SummaryContainer />
    </Card>
  );
};

export default Calculator;
