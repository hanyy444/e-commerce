import { createSelector } from "reselect";
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(collection => collections[collection])
)

export const selectCollection = collectionName =>
    createSelector(
        [selectCollections],
        collections => collections[collectionName]
    )