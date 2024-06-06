import { Fragment } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import ProductCard from "../product-card/product-card.component";
import Spinner from "../spinner/spinner.component";

import { selectCategoriesIsLoading } from "../../store/categories/category.selector.ts";

import { CategoryPreviewContainer } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectCategoriesIsLoading)

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryPreviewContainer>
          <h2>
            <Link className="title" to={title}>
              {title.toUpperCase()}
            </Link>
          </h2>
          <div className="preview">
            {products
              .filter((_, idx) => idx < 4)
              .map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </CategoryPreviewContainer>
      )}
    </Fragment>
  );
};

export default CategoryPreview;
