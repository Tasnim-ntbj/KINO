import React from 'react'
import styles from './title.module.css';
const Title = () => {
  return (
    <div className={styles.titleText}>
    <div className='my-10 text-center py-8'>
    <div className='inline-flex gap-2 items-center mb-3 text-3xl'>
        <p className='text-gray-700'>Featured <span className='text-gray-700 font-medium '>Essentials</span></p>
       
    </div>
    <p className='text-gray-700 text-xl '>Shop professional-grade eyeshadows, lipsticks, and palettes to express your creativity.</p>
    </div>
    </div>
  )
}

export default Title