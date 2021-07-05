import { createSlice } from "@reduxjs/toolkit"

const cartInitialState = {
	items: [],
	totalPrice: 0,
    totalCount: 0
}

const cartSlice = createSlice({
	name: "cart",
	initialState: cartInitialState,
	reducers: {
		addItemToCart(state, action) {
			const itemAlreadyExists= state.items.findIndex((item) => item.id === action.payload.id)

            if(parseInt(itemAlreadyExists) !== -1) {
                state.items[itemAlreadyExists].count += action.payload.count
            } else {
                state.items.push({
                    id: action.payload.id,
                    image: action.payload.image,
                    title: action.payload.title,
                    price: action.payload.price,
                    count: action.payload.count
                })
            }

            state.totalCount += action.payload.count
            state.totalPrice = (parseFloat(state.totalPrice)+ (parseFloat(action.payload.count) * parseFloat(action.payload.price))).toFixed(2)
		},
		removeItemFromCart(state, action) {
			console.log("removed item")
		},
        incrementItem(state, action) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            state.items[itemIndex].count++
            state.totalCount++
            state.totalPrice = (parseFloat(state.totalPrice) + parseFloat(action.payload.price)).toFixed(2)
        },
        decrementItem(state, action) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            
            if(parseInt(state.items[itemIndex].count) === 1) {
                const fliteredItems = state.items.filter((item) => item.id !== action.payload.id)
                state.items = fliteredItems
            } else {
                state.items[itemIndex].count--
            }

            state.totalCount--
            state.totalPrice = (parseFloat(state.totalPrice) - parseFloat(action.payload.price)).toFixed(2)
        }
	},
})

export const cartActions = cartSlice.actions

export default cartSlice