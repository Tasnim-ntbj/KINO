// import React, { useEffect, useState } from 'react'
// import HomePerfume from './HomePerfume';

// const HomePerfumes = () => {
//      const [homePerfumes, setHomePerfumes] = useState([]);
//     useEffect(() => {
//         fetch("/public/PerfumeProd.json")
//             .then((res) => res.json())
//             .then((data) => setHomePerfumes(data));

//     }, [])

//     const HomePerfumeSliced = homePerfumes.slice(0, 8);
    
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
//             {HomePerfumeSliced.map((product) => (
//                 <HomePerfume key={product.id} HomePerfumes={product} />
//             ))}
        
//         </div>
//   )
// }

// export default HomePerfumes

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import PerfumeItem from './PerfumeItem';
import HomePerfume from './HomePerfume';

const HomePerfumes = () => {
  const {products} = useContext(ShopContext);
  const [perfumes, setPerfumes] = useState([]);
  useEffect(()=>{
    setPerfumes(products.slice(0,8))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
             {perfumes.map((item, index) => (
                 <HomePerfume key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
             ))}
        
      </div>
  )
}

export default HomePerfumes


