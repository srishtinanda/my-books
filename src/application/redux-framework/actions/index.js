import { 
    INPUT_FROM_USER,
    UPDATE_CATEGORY
} from './types';

export const updateTheCategory = (book) => {
    return {
        type: UPDATE_CATEGORY,
        payload: book
    };
};

export const userTypedInput = (typedInput) => {
    return {
        type: INPUT_FROM_USER,
        payload: typedInput
    };
};
