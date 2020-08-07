
export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const products = [{
    id: 1,
    image: 'testkit.jpg',
    shortDescription: 'Taylor Technologies 18571',
    Category: 'Basic Test Kit ',
    listprice: '99.00',
    sellingprice: '70.00'
  },
  {
    id: 2,
    image: 'Metal-free.jpg',
    shortDescription: 'Natural Chemistry 14834',
    Category: 'Natural Chemistry',
    listprice: '49.00',
    sellingprice: '25.00'
  },
  {
    id: 3,
    image: 'Pilsner.jpg',
    shortDescription: 'Miami Blue 300Z Pilsner ',
    Category: 'Pilsner',
    listprice: '50.00',
    sellingprice: '30.00'
  },
  {
    id: 4,
    image: 'PerfectWeekly.jpg',
    shortDescription: 'Leslies 13144 - Perfect Weekly Triple Action Phosphate Remover, 3L',
    Category: 'Phosphate Remover',
    listprice: '79.00',
    sellingprice: '55.00'
  },
  {
    id: 5,
    image: 'standard-leaf.jpg',
    shortDescription: 'Leslies 20148 Standard Leaf Rake ',
    Category: 'Standard Leaf Rake',
    listprice: '30.00',
    sellingprice: '17.00'
  }
  // {
  //   id: 6,
  //   image: 'product6.png',
  //   shortDescription: 'UA Mesh Fitted Logo Cap',
  //   Category: 'Performance accessories',
  //   listprice: '35.00',
  //   sellingprice: '25.00'
  // },
  // {
  //   id: 7,
  //   image: 'product7.png',
  //   shortDescription: 'Bulova Men’s Choronograph Silicone Strap Watch',
  //   Category: 'Men’s Watches',
  //   listprice: '695.00',
  //   sellingprice: '444.80'
  // }
  ];