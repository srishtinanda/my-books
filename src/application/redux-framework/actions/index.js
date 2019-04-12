import { 
    INPUT_FROM_USER,
    UPDATE_CATEGORY,
    // RESULT,
    // CLEAR_INPUT,
    // DELETE_CHARACTER 
} from './types';

export const updateTheCategory = (book) => {
    return {
        type: UPDATE_CATEGORY,
        payload: book
    };
};

// export const clearInputString = () => {
//     return {
//         type: CLEAR_INPUT
//     };
// };

// export const calculateInput = (input) => {
//     return {
//         type: RESULT
//     };
// };

// export const deleteLastChar = () => {
//     return {
//         type: DELETE_CHARACTER
//     };
// };

export const userTypedInput = (typedInput) => {
    return {
        type: INPUT_FROM_USER,
        payload: typedInput
    };
};
