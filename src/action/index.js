export const addRoom = (room) => {
      return {
            type: 'ADD',
            payload: room
      }
}
export const deleteRoom = (index) => {
      return {
            type: 'DELETE',
            payload: index
      }
}

export const trun = (indexRoom, indexProduct) => {
      return {
            type: 'TRUN',
            indexRoom: indexRoom,
            indexProduct: indexProduct
      }
}
export const addProduct = (index, type) => {
      return {
            type: 'ADD-PRODUCT',
            index: index,
            payload: type
      }
}