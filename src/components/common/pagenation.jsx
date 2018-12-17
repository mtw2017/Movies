import React from "react";
import _ from "lodash";
import PropType from "prop-types";

const Pagenation = props => {
  const { itemCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) {
    return null;
  }
  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagenation.PropType = {
  itemCount: PropType.number.isRequired,
  pageSize: PropType.number.isRequired,
  currentPage: PropType.number.isRequired,
  onPageChange: PropType.func.isRequired
};

export default Pagenation;
