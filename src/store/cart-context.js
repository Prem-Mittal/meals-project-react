import React from "react";

const CartContext=React.createContext({     //cartcontext is an object
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
});
export default CartContext;