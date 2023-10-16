import sonic from '../images/sonic.png';
import boredApe from '../images/bored ape.png';
import testPhoto1 from '../images/textPhoto1.jpeg';
import testPhoto2 from '../images/textPhoto2.jpeg';
import testPhoto3 from '../images/textPhoto3.jpeg';


export default [
  {
    id: 1,
    title: "Super sonic autobot",
    price: 80,
    coverImg: sonic,
    stats: {
      rating: 3.5,
      reviewCount: 7
    },
    location: 'CAN',
    openSlot: 0    
  },
  {
    id: 2,
    title: "Hghly influential Bored Ape",
    price: 350,
    coverImg: boredApe,
    stats: {
      rating: 5.5,
      reviewCount: 6
    },
    location: 'online',
    openSlot: 2    
  },
  {
    id: 3,
    title: "Soar high like the Eagle",
    price: 50,
    coverImg: testPhoto1,
    stats: {
      rating: 2.5,
      reviewCount: 4
    },
    location: 'NGA',
    openSlot: 5    
  },
  {
    id: 4,
    title: "Coolest kid in Africa",
    price: 90,
    coverImg: testPhoto2,
    stats: {
      rating: 3,
      reviewCount: 5
    },
    location: 'NGA',
    openSlot: 3    
  },
  {
    id: 5,
    title: "The subtle art of meditation",
    price: 150,
    coverImg: testPhoto3,
    stats: {
      rating: 6.5,
      reviewCount: 10
    },
    location: 'Undisclosed',
    openSlot: 3    
  },
]