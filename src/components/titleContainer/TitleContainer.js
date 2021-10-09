import React from "react";
import './titleContainer.scss';
const TitleContainer = (props) => {
  
  const {title} = props;

  return (
    <div class="card">
            <div class="icon-title">
                <i class="bi bi-arrow-left"></i>
            </div>
            <div class="card-title">
                {title}
            </div>
    </div>  
  );
};

export default TitleContainer;