import React, {Component} from "react";

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import _ from "lodash";

class Paginate extends Component {
    state = {}

    render() {
        const {limit, count, offset, onPageChange} = this.props;
        const pagesCount = Math.ceil(count/limit);
        if (pagesCount === 1) return null
        let pages;
        if (offset > 5  ) {
            if (pagesCount > offset + 5) {
                 pages = _.range(offset-5, offset+5);
            }else{
                 pages = _.range(offset-5, pagesCount+1);
            }
        }else{
            if (pagesCount > 10) {
                pages = _.range(1,11);
            }else {
                pages = _.range(1,pagesCount+1);
            }

        }

        return (
            <React.Fragment>

                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                    <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div className="hidden md:block">
                            <p className="text-sm text-gray-700">
                                Showing <span className="font-medium">{(offset-1)*limit + 1}</span> to <span className="font-medium">{offset*limit}</span> of{' '}
                                <span className="font-medium">{count}</span> results
                            </p>
                        </div>
                        <div>
                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                <button disabled={offset===1}
                                        onClick={() => onPageChange(offset-1)}
                                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                    <span className="sr-only">Previous</span>
                                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                                {pages.map(page =>
                                    <button
                                          key={page}
                                          onClick={() => onPageChange(page)}
                                          aria-current="page"
                                          className={page===offset? "z-10 bg-red-300 border-blue-200  text-black relative inline-flex items-center px-4 py-2 border text-sm font-medium":
                                              "z-10 bg-white border-blue-200 text-black relative inline-flex items-center px-4 py-2 border text-sm font-medium"}
                                    >{page}

                                    </button>
                                )}
                                <button disabled={offset === pagesCount}
                                        onClick={() => onPageChange(offset+1)}
                                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                    <span className="sr-only">Next</span>
                                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>

            </React.Fragment>

        );
    }
}

export default Paginate;

