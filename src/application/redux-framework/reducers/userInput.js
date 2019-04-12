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
        
        // case 'CLEAR_INPUT':
        //     return { 
        //         inputString: '',
        //         result: '0'
        //     };
        
        // case 'DELETE_CHARACTER':
        //     validString = state.inputString.substring(0, state.inputString.length-1);
        //     calculatedValue = validateDeletedString(validString, action.payload);
        //     return { 
        //         inputString: validString,
        //         result: calculatedValue === '0' ? state.result : calculatedValue
        //     };
        
        default :
            return {...state};
    }
}