import { createSelector } from "reselect";
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections =>
        collections ? Object.keys(collections).map(collection => collections[collection]) : []
)

export const selectCollection = collectionName =>
    createSelector(
        [selectCollections],
        collections =>
            collections ? collections[collectionName] : null
    )

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)