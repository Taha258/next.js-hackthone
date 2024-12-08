// import React from 'react'

// export default function cardTitle() {
//   return (
//     <div>cardTitle
//         <CardHeader>
//   <h2 className="text-lg font-bold">Rental Summary</h2>
// </CardHeader>
//     </div>
//   )
// }


import { ReactNode } from 'react';

interface CardTitleProps {
  children: ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <h2 className="text-lg font-bold">{children}</h2>;
};

export default CardTitle;
