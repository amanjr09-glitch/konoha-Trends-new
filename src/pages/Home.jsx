import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import Carousel from '../components/Carousel'
import Carousel2 from '../components/Carousel2'
import Carousel3 from '../components/Carousel3'
import Carousel4 from '../components/Carousel4'
import Categories from '../pages/Categories'

import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products';


import banner from '../assets/images/banner.png';
import {db} from '../firebase/firebase';
import { collection, getDocs } from "firebase/firestore";

const Home = () => {

        const [topProducts,setTopProducts] = useState([]);
        const [newArrival, setNewArrival] = useState([]);
        const [popular,setPopular] = useState([]);
        const [loading, setLoading] = useState(false);
        const newArrivalProductsSnapshot = getDocs(collection(db, "NewArrivalProducts"));
        const topProductsSnapshot = getDocs(collection(db,'TopProducts'));
        const popularProductsSnapshot = getDocs(collection(db,'PopularProducts'));


        useEffect(() => {
            
            const testApi = async () => {
                
                try {
                    setLoading(true);
                    const newArrivalProductsPromise = productData.getNewArrivalProducts();
                    const topProductsPromise = productData.getTopProducts();
                    const popularProducts = productData.getPopularProducts();

                    const allPromise = await Promise.all([newArrivalProductsPromise,topProductsPromise,popularProducts]);
                    
                    /* setNewArrival(newArrivalProducts); */
                    setNewArrival(allPromise[0]);
                    setTopProducts(allPromise[1]);
                    setPopular(allPromise[2]);
                    setLoading(false);
                } catch (err) {
                    console.log(err);
                    setLoading(false);
                }
            };

            testApi();
        }, []);

        /* newArrivalProductsSnapshot.then((snapshot) => {
            //console.log(snapshot.docs);
            let newArrivalProducts = [];
            snapshot.docs.forEach((product) => {
                newArrivalProducts.push(product.data());
            });
            //setProducts(products);
            setNewArrival(newArrivalProducts);
        }); */


       /*  popularProductsSnapshot.then((snapshot) => {
            //console.log(snapshot.docs);
            let popularProducts = [];
            snapshot.docs.forEach((product) => {
                popularProducts.push(product.data());
            });
            //setProducts(products);
            setPopular(popularProducts);
        }); */


    return (
        <Helmet title="Home page">
            {/* hero slider 
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={true}
                timeOut={3000}
            />
             end hero slider */}

            {/*start of carousel*/}
            <Carousel />
            {/*End of carousel*/}

            {/*categories*/}
            <Categories />
            {/*End of Categories*/}
           <Carousel2 />

            <Section>
                <SectionTitle>
                    <b>TOP PRODUCTS</b>
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            topProducts.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end best selling section */}
<Carousel3 />
            {/* new arrival section */}
            <Section>
                <SectionTitle>
                    <b>NEW ARRIVAL</b>
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            newArrival.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end new arrival section */}
            
           <Carousel4 />

            {/* popular product section */}
            <Section>
                <SectionTitle>
                    <b>POPULAR</b>
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            popular.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
                 {/* banner */}
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>
            {/* end banner */}
            </Section>
            {/* end popular product section */}
             <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item, index) => <Link key={index} to="/policy">
                                <PolicyCard
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end policy section */}

        </Helmet>
    )
}

export default Home
