import {
    CATEGORY_SEND, CATEGORY_SUCCESS, CATEGORY_FAIL, SUBCATEGORY_SET,
    CATEGORY_SET, PRODUCT_LIST_SEND, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
    NEW_SET, AMAZING_SET, TOP_SET, PRODUCT_SET
} from './actionTypes';

export const categorySend = () => {
    return {
        type: CATEGORY_SEND
    }
}

export const categorySuccess = (payload) => {
    return {
        type: CATEGORY_SUCCESS,
        payload
    }
}

export const categoryFail = (payload) => {
    return {
        type: CATEGORY_FAIL,
        payload
    }
}

export const categorySet = (payload) => {
    return {
        type: CATEGORY_SET,
        payload
    }
}

export const subcategorySet = (payload) => {
    return {
        type: SUBCATEGORY_SET,
        payload
    }
}

export const productSet = (payload) => {
    return {
        type: PRODUCT_SET,
        payload
    }
}

export const newSet = (payload) => {
    return {
        type: NEW_SET,
        payload
    }
}

export const amazingSet = (payload) => {
    return {
        type: AMAZING_SET,
        payload
    }
}

export const topSet = (payload) => {
    return {
        type: TOP_SET,
        payload
    }
}

export const productListSend = () => {
    return {
        type: PRODUCT_LIST_SEND
    }
}

export const productListSuccess = (payload) => {
    return {
        type: PRODUCT_LIST_SUCCESS,
        payload
    }
}

export const productListFail = (payload) => {
    return {
        type: PRODUCT_LIST_FAIL,
        payload
    }
}