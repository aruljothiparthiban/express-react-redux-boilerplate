import React , { Component } from 'react';
import ReactPaginate from 'react-paginate';

const PAGINATION_CLASS = 'pagination mg-b-10 mg-t-10 float-right';
const PAGINATION_SUB_CONTAINER_CLASS = 'pages pagination';
const PAGE_ITEM_CLASS = 'page-item';
const PAGE_ITEM_ACTIVE_CLASS = 'page-item active';
const PAGE_LINK_CLASS = 'page-link';
const NEXT_LABEL = 'Next';
const PREVIOUS_LABEL = 'Previous';

export default class Pagination extends Component {

    render() {
        return (
            <ReactPaginate
                previousLabel={PREVIOUS_LABEL}
                previousClassName={PAGE_ITEM_CLASS}
                previousLinkClassName={PAGE_LINK_CLASS}
                nextClassName={PAGE_ITEM_CLASS}
                nextLinkClassName={PAGE_LINK_CLASS}
                nextLabel={NEXT_LABEL}
                breakLabel='...'
                breakLinkClassName={PAGE_LINK_CLASS}
                breakClassName={PAGE_ITEM_CLASS}
                pageLinkClassName={PAGE_LINK_CLASS}
                pageCount={this.props.count / this.props.pageSize}
                marginPagesDisplayed={0}
                pageRangeDisplayed={5}
                onPageChange={this.props.onPageChange}
                containerClassName={PAGINATION_CLASS}
                subContainerClassName={PAGINATION_SUB_CONTAINER_CLASS}
                activeClassName={PAGE_ITEM_ACTIVE_CLASS}
                hrefBuilder={() => ''}
            />
        );
    }
}