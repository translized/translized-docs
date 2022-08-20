import React from 'react'

import styles from './index.module.css';


const Chip = ({color, title}) => {

  const getStyle = () => {
    switch (color) {
      case 'blue':
        return styles.chip_blue;
      case 'red':
        return styles.chip_red;
      default:
        return styles.chip_gray;
    }
  }

  return (
    <div className={getStyle()}>
      {title}
    </div>
  )
}


export default Chip