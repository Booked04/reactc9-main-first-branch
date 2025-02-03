import { createContext, useState } from 'react'

export const CartContext = createContext({
    Cartcount: 0,
    setCartCout: (CartCount) => {}
})


export default function CartProvider({children}){
    const [CartCount, setCartCout] = useState(0)
    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}