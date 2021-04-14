const rooms = (state = { rooms: [], room: { name: '', type: '', products: [] } }, action) => {
      switch (action.type) {
            case 'ADD':
                  return state = { ...state, rooms: [...state.rooms, action.payload] }
            case 'DELETE':
                  let newRooms = state.rooms.filter((e, i) => i !== action.payload);
                  return { ...state, rooms: newRooms };
            case 'TRUN':
                  state.room = state.rooms[action.indexRoom];
                  state.room.products[action.indexProduct].condition = !state.room.products[action.indexProduct].condition;
                  return { ...state }
            case 'ADD-PRODUCT':
                  state.room = state.rooms[action.index];
                  state.room.products.push({ type: action.payload, condition: false });
                  return { ...state }
            default:
                  return state;
      }
}
export default rooms;