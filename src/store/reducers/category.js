import {
    CATEGORY_SEND, CATEGORY_SUCCESS, CATEGORY_FAIL, SUBCATEGORY_SET,
    PRODUCT_LIST_SEND, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, CATEGORY_SET,
    NEW_SET, AMAZING_SET, TOP_SET, PRODUCT_SET
} from '../actions/actionTypes';

const categoryReducer = (state, action) => {
    switch (action.type) {
        case CATEGORY_SEND:
            return { ...state, loading: true, error: null };
        case CATEGORY_SUCCESS:
            return { ...state, loading: false, categoryList: action.payload }
        case CATEGORY_FAIL:
            return { ...state, loading: false, error: action.payload }
        case CATEGORY_SET:
            return { ...state, category: action.payload }
        case SUBCATEGORY_SET:
            return { ...state, subcategory: action.payload }
        case PRODUCT_SET:
            return { ...state, product: action.payload }
        case NEW_SET:
            return { ...state, newList: action.payload }
        case AMAZING_SET:
            return { ...state, amazingList: action.payload }
        case TOP_SET:
            return { ...state, topList: action.payload }
        case PRODUCT_LIST_SEND:
            return { ...state, loading: true, error: null };
        case PRODUCT_LIST_SUCCESS:
            return { ...state, loading: false, productList: action.payload }
        case PRODUCT_LIST_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            throw new Error('Should not be here!');
    }
}

export default categoryReducer;