import { MenuItem } from "../components/MenuItem"
import { deleteItem, updatePrice, updateQuantity } from "../store/items/actions"
import { connect } from "react-redux";
import { selectTotalItem } from "../store/items/selectors";

const mapStateToProps = (state, props) => ({
  total: selectTotalItem(state, props)
})
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(deleteItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
    updateQuantity: (quantity) => dispatch(updateQuantity(ownProps.uuid, quantity)),
    
  }
}
export const MenuItemContainer = connect(mapStateToProps, mapDispatchToProps)(MenuItem)