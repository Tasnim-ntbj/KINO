import React from 'react'
import styles from './title.module.css';
const TitlePerfume = () => {
  return (
    <div className={styles.titleText}>
    <div className='my-10 text-center py-8'>
    <div className='inline-flex gap-2 items-center mb-3 text-3xl'>
        <p className='text-gray-700'>Find Your Signature Scent<span className='text-gray-700 font-medium '></span></p>
       
    </div>
    <p className='text-gray-700 text-xl '>From subtle florals to bold spices, explore perfumes designed to tell your unique story.</p>
    </div>
    </div>
  )
}

export default TitlePerfume