import { connect } from "react-redux";
import { Summary } from "../components/Summary";
import {
  selectSubtotal,
  selectTipAmount,
  selectTotal
} from "../store/items/selectors";

const mapDispatchToProps = (state) => {
  // const items = state.items
  
  // let subtotal = 0
  // for(const item of items){
  //   subtotal += item.price * item.quantity
  // }
  // const tipAmount = subtotal * (state.tipPercentage / 100)
  // const total = subtotal + tipAmount
  const subtotal = selectSubtotal(state)
  const tipAmount = selectTipAmount(state)
  const total = selectTotal(state)
  return {
    subtotal,
    tipAmount,    
    total
  }
}
export const SummaryContainer = connect(mapDispatchToProps)(Summary)