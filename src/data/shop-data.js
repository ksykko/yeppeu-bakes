import Chocochip from '../assets/cookies/chocochip-2.JPG'
import Chocochip2 from '../assets/cookies/chocochip.JPG'
import Chocochip3 from '../assets/cookies/chocochip-3.JPG'

import Whitechocochip from '../assets/cookies/almond-2.JPG'
import Whitechocochip2 from '../assets/cookies/almond.JPG'

import Redvelvet from '../assets/cookies/redvelvet-3.JPG'
import Redvelvet2 from '../assets/cookies/redvelvet.JPG'
import Redvelvet3 from '../assets/cookies/redvelvet-2.JPG'

import Assorted from '../assets/cookies/assorted-3.JPG'
import AllFlavors from '../assets/cookies/all-flavors.jpg'
import Assorted2 from '../assets/cookies/chocochip-redvelvet.jpg'



export const SHOP_DATA = [{
        "id": 1,
        "name": "Chocolate Chip Cookie",
        "desc": "Chocolatey, buttery, deliciousness in every bite",
        "imageUrl1": Chocochip,
        imageUrl: [
            { "id": 1, "url": Chocochip },
            { "id": 2, "url": Chocochip2 },
            { "id": 3, "url": Chocochip3 },
        ],
        price: [
            { "priceId": 1, "productName": "Chocolate Chip Cookie", "cost": 180, "qty": "Box of 12" },
        ]
    },
    {
        "id": 2,
        "name": "White Chocolate Chip Almonds Cookie",
        "desc": "Indulge in pure decadence with our white chocolate almond chip cookies",
        "imageUrl1": Whitechocochip,
        imageUrl: [
            { "id": 1, "url": Whitechocochip },
            { "id": 2, "url": Whitechocochip2 },
        ],
        price: [
            { "priceId": 2, "productName": "White Chocolate Chip Almonds Cookie", "cost": 160, "qty": "Box of 12" },
        ]
    },
    {
        "id": 3,
        "name": "Red Velvet with Cream Cheese Cookie",
        "desc": "Experience velvety bliss with our red velvet cream cheese cookies",
        "imageUrl1": Redvelvet,
        imageUrl: [
            { "id": 1, "url": Redvelvet },
            { "id": 2, "url": Redvelvet2 },
            { "id": 3, "url": Redvelvet3 },
        ],
        price: [
            { "priceId": 3, "productName": "Red Velvet with Cream Cheese Cookie", "cost": 180, "qty": "Box of 6" },
            { "priceId": 4, "productName": "Red Velvet with Cream Cheese Cookie", "cost": 290, "qty": "Box of 12" },
        ]
    },
    {
        "id": 4,
        "name": "Assorted Cookies",
        "desc": "Double the flavor, double the fun",
        "imageUrl1": Assorted2,
        imageUrl: [
            { "id": 1, "url": Assorted },
            { "id": 2, "url": Assorted2 },
            { "id": 3, "url": Chocochip2 },
            { "id": 4, "url": Whitechocochip2 },
            { "id": 5, "url": Redvelvet2 },
        ],
        price: [
            { "priceId": 5, "productName": "Chocolate Chip x White Chocolate Almonds", "cost": 170, "qty": "Box of 12" },
            { "priceId": 6, "productName": "White Chocolate Almonds x Red Velvet with Cream Cheese", "cost": 240, "qty": "Box of 12" },
            { "priceId": 7, "productName": "Chocolate Chip x Red Velvet with Cream Cheese", "cost": 250, "qty": "Box of 12" },
        ]
    },
    {
        "id": 5,
        "name": "All Flavors",
        "desc": "Variety is the spice of life",
        "imageUrl1": Assorted,
        imageUrl: [
            { "id": 1, "url": AllFlavors },
            { "id": 2, "url": Assorted2 },
            { "id": 3, "url": Assorted },
        ],
        price: [
            { "priceId": 8, "cost": 250, "qty": "Box of 12" },
        ]
    }
]

export default SHOP_DATA