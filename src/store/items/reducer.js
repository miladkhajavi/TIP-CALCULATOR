import produce from "immer";
import { ITEM_ADDED, ITEM_PRICE_UPDATED, ITEM_QUANTITY_UPDATED, ITEM_REMOVED } from "./actions";
let id = 1;

export const initialItems = [
  // { uuid: id++, name: 'Awesome Tofu Roasth', price: 14, quantity: 1 },
  // { uuid: id++, name: 'Vegan Ham sandwich', price: 12, quantity: 1 }
];

export const reducer = produce((state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
  //  const item = { uuid: id++, ...action.payload , quantity: 1 }
  //  return [...state, item]
   
    const item = { uuid: id++, ...action.payload , quantity: 1 }
    state.push(item)
   
  }
  if (action.type === ITEM_REMOVED) {
    return state.filter((item) => item.uuid !== action.payload.uuid)
   }
   if (action.type === ITEM_PRICE_UPDATED) {
      // return state.map((item) => {
      //   if (item.uuid === action.payload.uuid ) {
      //     return {...item,price: action.payload.price }
      //   }
      //   return item
      // })
      
       const item = state.find((item)=> item.uuid === action.payload.uuid)
       item.price = action.payload.price
       
   }
   if (action.type === ITEM_QUANTITY_UPDATED) {
      // return state.map((item) => {
      //   if (item.uuid === action.payload.uuid ) {
      //     return {...item,quantity: action.payload.quantity }
      //   }
      //   return item
      // })
      
        const item = state.find((item)=> item.uuid === action.payload.uuid)
        item.quantity = action.payload.quantity
        
   }
  return state;
},initialItems);

export default reducer;
