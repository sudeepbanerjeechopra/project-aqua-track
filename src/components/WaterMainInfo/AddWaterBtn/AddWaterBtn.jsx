import React from 'react'
import clsx from 'clsx';
import css from './AddWaterBtn.module.css';
import { icons as sprite } from "../../../shared/icons/index"

const AddWaterBtn = ({openModal, isPrimary = true }) => {
 
  return (
    <div>
<button
    className={clsx(css.btn, {
      [css.btn__Primary]: isPrimary,
      [css.btn__Secondary]: !isPrimary,
    })}
    type="button"
    onClick={openModal}
  >
    <svg
      className={clsx(css.btn__svg, { [css.btn__svg_primary]: isPrimary })}
      width="24"
      height="24"
    >
      <use xlinkHref={`${sprite}#plus-add-water`} />
    </svg>
    <span>Add water</span>
  </button>
    </div>
  );
};


export default AddWaterBtn