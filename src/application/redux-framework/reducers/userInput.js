import { bookArray } from "../../assets/booksData";


const initial_state = { inputString: '', list: bookArray } ;

export default (state = initial_state, action) => {
    switch (action.type) {
        case 'INPUT_FROM_USER':
            return { 
                ...state,
                inputString: action.payload
            };
        
        case 'UPDATE_CATEGORY':
        var foundIndex = state.list.findIndex((books) =>books.id === action.payload.id);
        let newCategory =  action.payload.category === null? 'Want to Read': null;
        state.list[foundIndex].category = newCategory;
            return { 
                ...state,
                list: [...state.list]
            };
        default :
            return {...state};
    }
}