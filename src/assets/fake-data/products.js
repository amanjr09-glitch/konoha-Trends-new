import {db} from '../../firebase/firebase';
import { collection, getDocs } from "firebase/firestore";


const product_01_image_01 = require('../images/products/product-01 (1).jpg').default
const product_01_image_02 = require('../images/products/product-01 (2).jpg').default
// const product_01_image_03 = require('../images/products/product-01 (3).jpg').default

const product_02_image_01 = require('../images/products/product-02 (1).jpg').default
const product_02_image_02 = require('../images/products/product-02 (2).jpg').default

const product_03_image_01 = require('../images/products/product-03 (1).jpg').default
const product_03_image_02 = require('../images/products/product-03 (2).jpg').default

const product_04_image_01 = require('../images/products/product-04 (1).jpg').default
const product_04_image_02 = require('../images/products/product-04 (2).jpg').default

const product_05_image_01 = require('../images/products/product-05 (1).jpg').default
const product_05_image_02 = require('../images/products/product-05 (2).jpg').default

const product_06_image_01 = require('../images/products/product-06 (1).jpg').default
const product_06_image_02 = require('../images/products/product-06 (2).jpg').default

const product_07_image_01 = require('../images/products/product-07 (1).jpg').default
const product_07_image_02 = require('../images/products/product-07 (2).jpg').default

const product_08_image_01 = require('../images/products/product-08 (1).jpg').default
const product_08_image_02 = require('../images/products/product-08 (2).jpg').default

const product_09_image_01 = require('../images/products/product-09 (1).jpg').default
const product_09_image_02 = require('../images/products/product-09 (2).jpg').default

const product_10_image_01 = require('../images/products/product-10 (1).jpg').default
const product_10_image_02 = require('../images/products/product-10 (2).jpg').default

const product_11_image_01 = require('../images/products/product-11 (1).jpg').default
const product_11_image_02 = require('../images/products/product-11 (2).jpg').default

const product_12_image_01 = require('../images/products/product-12 (1).jpg').default
const product_12_image_02 = require('../images/products/product-12 (2).jpg').default

let newArrivalProductsCache = [];
let topProductsCache = [];
let popularProductCache = [];
let normalProductsCache = [];
let allProducts = [];

const getNewArrivalProducts  = () => {
    return getDocs(collection(db, "NewArrivalProducts")).then(snapshot => {
        let newArrivalProducts = [];
        snapshot.docs.forEach((product) => {
            newArrivalProducts.push(product.data());
        });
        newArrivalProductsCache = newArrivalProducts;
        return newArrivalProducts;
    });
};

const getAllArrayProducts = () => {
    return newArrivalProductsCache.concat(topProductsCache).concat(popularProductCache);
};

const getAllProducts = () => products

const getTopProducts = () => {
    return getDocs(collection(db,'topproducts')).then(snapshot => {
        let topProducts = [];
        snapshot.docs.forEach((product) => {
            topProducts.push(product.data());
        });
        topProductsCache = topProducts;
        return topProducts;
    });
}

const getPopularProducts = () => {
    return getDocs(collection(db,'PopularProducts')).then(snapshot => {
        let popularProducts = [];
        snapshot.docs.forEach((product) => {
            popularProducts.push(product.data());
        });
        popularProductCache = popularProducts;
        return popularProducts;
    });
}

const getNormalProducts = () => {
    return getDocs(collection(db,'NormalProducts')).then(snapshot => {
        let normalProducts = [];
        snapshot.docs.forEach((product) => {
            normalProducts.push(product.data());
        });
        normalProductsCache = normalProducts;
        return normalProducts;
    });
}

const products = [
    {
        title: "Dinosaur T-shirt-1",
        price: '699',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug:"Superheroes",
        colors: ["white", "red", "orange"],
        slug: "Dinosaur T-shirt",
        size: ["s", "m", "l", "xl"],
        description: "The presence of basic round-neck t-shirts in your wardrobe is the key to helping you have more interesting outfits without needing too many items. Basic round neck cotton women's t-shirt is a handy weapon for women in everyday wear!<br><br><br>Simple design, convenient shape of PPN4502 T-shirt. Why can you combine with just 1 basic women's t-shirt with 10 different sets? The answer lies in their very simplicity. The simpler it is, the easier it is for you to mix & match with different items. PPM4502 Women's T-shirt has a simple round neck design that is gentle on the skin. Fox sleeves, shirt form is not fussy, very easy to wear with many different bodies. More specifically, the color of this round-neck women's t-shirt is also very elegant, neutral, and smooth. The simplicity from design, seam to color palette helps women not to hesitate too much when choosing. 95% cotton material is strictly processed, modern process and technology should give the shirt a comfortable, soft, cool feeling to the touch. Along with that, the Yody round neck cotton women's T-shirt has a very good ability to darken sweat, so the wearer does not feel the feeling of being stuck on the skin when sweating in the summer. In addition, the product also contains 5% spandex - a type of fiber that helps stretch, elastic effectively suitable to wear to many environments, even when exercising <br><br><br> The presence of clothes Basic round neck t-shirt in your wardrobe is the key to help you have more interesting outfits without needing too many items. Basic round neck cotton women's t-shirt is a handy weapon for women in everyday wear!<br><br><br>Simple design, convenient shape of PPN4502 T-shirt. Why can you combine with just 1 basic women's t-shirt with 10 different sets? The answer lies in their very simplicity. The simpler it is, the easier it is for you to mix & match with different items. PPM4502 Women's T-shirt has a simple round neck design that is gentle on the skin. Fox sleeves, shirt form is not fussy, very easy to wear with many different bodies. More specifically, the color of this round-neck women's t-shirt is also very elegant, neutral, and smooth. The simplicity from design, seam to color palette helps women not to hesitate too much when choosing. 95% cotton material is strictly processed, modern process and technology should give the shirt a comfortable, soft, cool feeling to the touch. Along with that, the Yody round neck cotton women's T-shirt has a very good ability to darken sweat, so the wearer does not feel the feeling of being stuck on the skin when sweating in the summer. Besides, the product also contains 5% spandex - a type of fiber that effectively stretches and elastic, suitable for wearing in many environments, even when exercising."
    },
    {
        title: "Dinosaur T-shirt-2",
        price: '599',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "High",
        colors: ["white", "red", "blue"],
        slug: "Marvel",
        size: ["s", "m"],
        description: ""},
    {
        title: "Naruto",
        price: '190',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "Anime",
        colors: ["white", "red", "orange", "yellow"],
        slug: "Anime",
        size: ["m"],
        description: ""
    },
    {
        title: "Ronaldo",
        price: '194',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "Sports",
        colors: ["white", "orange", "blue"],
        slug: "Sports",
        size: ["xl"],
        description: ""
    },
    {
        title: "Smoke weed",
        price: '500',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "High",
        colors: ["white", "pink"],
        slug: "High",
        size: ["xxl"],
        description: ""
    },
    {
        title: "Plain T-shirts",
        price: '1940',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "Casual",
        colors: ["black"],
        slug: "Casual",
        size: ["s", "m", "xl"],
        description: ""
    },
    {
        title: "pokemon",
        price: '1000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "Anime",
        colors: ["white", "red", "orange", "blue"],
        slug: "Anime",
        size: ["l", "xl"],
        description: ""
    },
    {
        title: "kawaki",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "Anime",
        colors: ["white", "red", "black"],
        slug: "Anime",
        size: ["s", "m", "xl"],
        description: ""
    },
    {
        title: "Messi",
        price: '1000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "Sports",
        colors: ["white", "blue"],
        slug: "sports",
        size: ["m"],
        description: ""
    },
    {
        title: "ganja",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "High",
        colors: ["blue", "black"],
        slug: "High",
        size: ["l"],
        description: " "
    },
    {
        title: "Sup",
        price: '194000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "Casual",
        colors: ["blue", "black"],
        slug: "Casual",
        size: ["s", "m", "xl"],
        description: " "
    },
    {
        title: "Neymar",
        price: '194000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "Sports",
        colors: ["blue"],
        slug: "Sports",
        size: ["s", "m", "xl"],
        description: ""
    },
    {
        title: "noice",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "Casual",
        colors: ["white", "red"],
        slug: "Casual",
        size: ["s", "m", "xl"],
        description: ""
    },
    {
        title: "COD",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "Gaming",
        colors: ["white", "blue"],
        slug: "Gaming",
        size: ["s", "m"],
        description: ""
    },
    {
        title: "God Of War",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "Gaming",
        colors: ["red", "blue"],
        slug: "Gaming",
        size: ["xl"],
        description: ""
    },
    {
        title: "PUBG",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "Gaming",
        colors: ["blue", "black"],
        slug: "Gaming",
        size: ["m", "xl"],
        description: ""
    },
    {
        title: "yellow t-shirt",
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "Casual",
        colors: ["white", "blue"],
        slug: "Casual",
        size: ["s", "l", "xl"],
        description: ""
    },
    {
        title: "Eat Sleep Repeat",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "Gaming",
        colors: ["blue", "black"],
        slug: "Gaming",
        size: ["s", "m", "l", "xl"],
        description:""
    },
    // 18 products
]

/* const getAllProducts = () => products */

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo,
    getNewArrivalProducts,
    newArrivalProductsCache,
    getTopProducts,
    topProductsCache,
    getPopularProducts,
    popularProductCache,
    getAllArrayProducts,
    getNormalProducts,
    normalProductsCache
}

export default productData