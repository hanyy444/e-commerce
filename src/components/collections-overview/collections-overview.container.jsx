import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview'


import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

const Spinner = () => (<p>Loading...</p>);

// // graphql pattern
// const GET_COLLECTIONS = gql`
//     {
//         collections {
//             id
//             title
//             items {
//                 id
//                 name
//                 price
//                 imageUrl
//             }
//         }
//     }
// `
// const CollectionsOverviewContainer = () => {
//     const { loading, error, data } = useQuery(GET_COLLECTIONS)
//     console.log(data)
//     if (loading) return <Spinner/>
//     if (error) return `Error! ${error.message}`;
//     return <CollectionsOverview collections={data.collections}/>
// }


// redux pattern
const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

// compose multiple components (redux)
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)


export default CollectionsOverviewContainer;