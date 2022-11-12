const initialState ={
    categories: [
        { tabName: 'tabTopClothes', showName: 'Áo', type: 'ver1' },
        { tabName: 'tabBotClothes', showName: 'Quần', type: 'ver2' },
        { tabName: 'tabShoes', showName: 'Giày dép', type: 'ver3' },
        { tabName: 'tabHandBags', showName: 'Túi xách', type: 'ver4' },
    ]
}
const reducer = (state = initialState, action) =>{
    return state 
}
export default reducer;