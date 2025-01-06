// import { Carousel } from 'react-bootstrap'
import ProductCard from '../productCard/productCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function MyCarousel({ showProductModal, cartAdder }) {

    const data = [
        {
          product_name : 'Anillo Verde',
          product_id: 1,
          presentation_name : 'Oscura',
          presentation_id: 1,
          presentation_cost : 100,
          img_link : 'https://pe.sissai.com/cdn/shop/files/AnillodeOroMadreSelvaOpaloAndinoyDiamantes18k2.jpg?v=1686766398&width=990'
        },
        {
          product_name : 'Anillo Rojo',
          product_id: 2,
          presentation_name : 'Oscura',
          presentation_id: 1,
          presentation_cost : 100,
          img_link : 'https://pe.sissai.com/cdn/shop/files/AnillodeOroMadreSelvaOpaloAndinoyDiamantes18k2.jpg?v=1686766398&width=990'
        },
        {
          product_name : 'Anillo Azul',
          product_id: 3,
          presentation_name : 'Oscura',
          presentation_id: 1,
          presentation_cost : 100,
          img_link : 'https://pe.sissai.com/cdn/shop/files/AnillodeOroMadreSelvaOpaloAndinoyDiamantes18k2.jpg?v=1686766398&width=990'
        },
        {
          product_name : 'Anillo Coca',
          product_id: 4,
          presentation_name : 'Oscura',
          presentation_id: 1,
          presentation_cost : 100,
          img_link : 'https://pe.sissai.com/cdn/shop/files/AnillodeOroMadreSelvaOpaloAndinoyDiamantes18k2.jpg?v=1686766398&width=990'
        },
        {
          product_name : 'Anillo Lingo',
          product_id: 5,
          presentation_name : 'Oscura',
          presentation_id: 1,
          presentation_cost : 100,
          img_link : 'https://pe.sissai.com/cdn/shop/files/AnillodeOroMadreSelvaOpaloAndinoyDiamantes18k2.jpg?v=1686766398&width=990'
        },
        {
          product_name : 'Anillo Azucar',
          product_id: 6,
          presentation_name : 'Oscura',
          presentation_id: 1,
          presentation_cost : 100,
          img_link : 'https://pe.sissai.com/cdn/shop/files/AnillodeOroMadreSelvaOpaloAndinoyDiamantes18k2.jpg?v=1686766398&width=990'
        },
        
    ]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
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

    return (
      <>
        <h2> Anillos </h2>
        <Carousel 
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={false}
            transitionDuration={500}
            responsive={responsive}
        >
            {
                data.map( (el, indx) => (
                    <div>
                        <ProductCard product={el} cartAdder={cartAdder} showProductModal={showProductModal}></ProductCard>
                    </div>
                ))
            }
        </Carousel>
      </>
    )
}