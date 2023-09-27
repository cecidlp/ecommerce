import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import './Details.css'
import Products from '../../Components/Products/products'

const Details = () => {

    const products = [
        {
            name: 'Stormtrooper mug',
            img: '/images/storm-trooper.jpg',
            id: 1,
            price: 60,
            category: 'Star Wars',
            description: 'loremAmet velit deserunt aute aliqua consequat ex laborum cupidatat. Laboris consequat duis qui officia sint reprehenderit dolore eu sint eu exercitation velit deserunt occaecat. Ut ad voluptate nisi mollit ea nisi amet fugiat ullamco enim non voluptate. Ut nulla quis mollit consequat amet reprehenderit ipsum excepteur sunt adipisicing labore mollit commodo irure.',
        },
        {
            name: 'Darth Vader figure',
            img: '/images/darth-vader.png',
            id: 2,
            price: 70,
            category: 'Star Wars',
            description: 'Aute duis cupidatat anim pariatur pariatur nostrud eu. Dolor do occaecat deserunt officia eu nulla. Mollit aute tempor irure est aliquip nulla est pariatur laboris consectetur. Occaecat sit officia fugiat incididunt labore aliquip proident velit magna ex. Dolore magna non quis consectetur eu ea aliqua est consequat reprehenderit est deserunt dolore enim. In magna adipisicing irure voluptate pariatur labore. Proident mollit officia sunt sunt nostrud non incididunt incididunt est duis consequat anim ut.',
        },
        {
            name: 'Yoda figure',
            img: '/images/yoda.jpg',
            id: 3,
            price: 40,
            category: 'Star Wars',
            description: 'Reprehenderit sit nulla labore commodo do eiusmod. Enim reprehenderit eiusmod nulla laborum labore nulla. Dolore duis Lorem quis non excepteur qui cillum enim tempor et aliqua. Consequat mollit elit et voluptate id et dolor do sint. Dolor aliqua deserunt aliquip nulla dolore esse reprehenderit sint aute aliqua irure enim.',
        },
        {
            name: 'Stormtrooper figure',
            img: '/images/muñeco-stormtrooper.jpg',
            id: 4,
            price: 80,
            category: 'Star Wars',
            description: 'Deserunt tempor ex quis ut ullamco consequat irure irure ipsum deserunt. Culpa labore pariatur minim nisi ipsum occaecat labore. Sunt duis ut in duis et non laborum amet ex.',
        },
        {
            name: 'Baby Yoda toy',
            img: '/images/baby-yoda.jpg',
            id: 5,
            price: 120,
            category: 'Star Wars',
            description: 'Ex tempor magna pariatur tempor. Do Lorem nulla Lorem est ipsum enim consequat est mollit. Deserunt aliqua sit eu veniam.',
        },
        {
            name: 'Kylo Ren figure',
            img: '/images/phantom.jpg',
            id: 6,
            price: 80,
            category: 'Star Wars',
            description: 'Lorem laboris occaecat labore aliquip laboris ad adipisicing. Velit aliqua incididunt non ipsum et aliquip et ex amet elit eiusmod culpa Lorem. Elit eiusmod ut velit fugiat nisi reprehenderit commodo.',
        },
        {
            name: 'Xbox controller',
            img: '/images/control-xyz-white.jpg',
            id: 7,
            price: 110,
            category: 'Consoles',
            description: 'Ad aliqua aliqua reprehenderit est. Cupidatat incididunt esse eu quis qui qui dolor occaecat occaecat. Quis eiusmod dolore et minim voluptate ut sit sunt proident in. In non reprehenderit cupidatat deserunt mollit amet esse labore laborum aute veniam excepteur ad.',
        },
        {
            name: 'Playstation 5 with controller',
            img: '/images/control-consola.jpg',
            id: 8,
            price: 700,
            category: 'Consoles',
            description: 'Velit officia et excepteur sunt aute id. Quis non magna occaecat non Lorem voluptate. Sit duis dolor duis excepteur duis esse est cillum ut. Mollit non cillum irure cillum irure.',
        },
        {
            name: 'Nintendo NES',
            img: '/images/nintendo.jpg',
            id: 9,
            price: 140,
            category: 'Consoles',
            description: 'Fugiat enim deserunt enim laborum veniam irure consequat et ut. Incididunt adipisicing amet consequat do dolor et aliqua occaecat. Cillum tempor pariatur cupidatat consequat laboris nisi ipsum in nostrud nostrud anim. Mollit reprehenderit labore sunt cupidatat mollit.',
        }, {
            name: 'Nintendo switch controllers',
            img: '/images/control-xyz.jpg',
            id: 10,
            price: 80,
            category: 'Consoles',
            description: 'Esse esse dolor est culpa. Minim sint culpa est magna ullamco in non dolor esse anim in esse sint. Sint proident aliqua minim culpa veniam Lorem nulla laboris est pariatur ad anim aliqua elit. Duis aliqua amet sunt ut laborum sunt ad eu elit enim. Dolore et irure tempor ut. Tempor consequat mollit ullamco est sunt nostrud occaecat commodo nostrud minim voluptate.',
        },
        {
            name: 'Xbox console',
            img: '/images/consola-xyz.jpg',
            id: 11,
            price: 450,
            category: 'Consoles',
            description: 'Est qui aliquip occaecat laborum. Enim mollit incididunt excepteur adipisicing officia labore in exercitation aliqua sint. Consequat tempor ut labore tempor id ut nostrud elit. Aute tempor minim nostrud cillum laboris pariatur mollit consequat do voluptate fugiat aliquip minim occaecat. Enim excepteur ullamco minim aliquip deserunt voluptate ea voluptate minim exercitation tempor velit. Voluptate do sint elit amet cupidatat velit non.',
        },
        {
            name: 'Gameboy color',
            img: '/images/gameboy.jpg',
            id: 12,
            price: 70,
            category: 'Consoles',
            description: 'Qui duis et tempor aute id sit non sint incididunt laborum qui pariatur. Id duis officia eiusmod officia. Mollit velit id minim nulla ipsum esse eu commodo consectetur deserunt.',
        },
        {
            name: 'Atari t-shirt',
            img: '/images/remera.jpg',
            id: 13,
            price: 30,
            category: 'Others',
            description: 'Occaecat non deserunt mollit eiusmod irure dolor. Aliquip est tempor aute eiusmod ad ex velit est tempor quis cillum est non Lorem. Elit nisi adipisicing non magna voluptate in enim eu eiusmod. Occaecat eiusmod dolor laborum sunt incididunt sint ea elit consectetur do. Laborum id et elit ex irure consequat voluptate ipsum nostrud Lorem sit. Veniam duis Lorem elit nisi excepteur dolor nostrud incididunt minim proident non. Exercitation in irure elit duis voluptate eu.',
        },
        {
            name: 'SNES t-shirt',
            img: '/images/camisa.jpg',
            id: 14,
            price: 30,
            category: 'Others',
            description: 'Exercitation pariatur Lorem fugiat pariatur aliqua velit nostrud laborum proident amet laborum. Tempor do enim anim enim laborum consectetur excepteur esse aute excepteur in pariatur. Excepteur cupidatat minim quis et anim proident magna nisi exercitation nostrud. Laborum consectetur non officia cupidatat et ad voluptate. Sint nisi do mollit ad dolore non enim reprehenderit id ad. Dolor velit do anim officia. Aute deserunt quis nostrud nisi id est consequat cupidatat enim nostrud nisi mollit amet.',
        },
        {
            name: 'Sonic toy',
            img: '/images/sonic.jpg',
            id: 15,
            price: 35,
            category: 'Others',
            description: 'Incididunt nulla quis sint et est anim eu cillum elit ad quis voluptate irure. Dolor qui dolore proident reprehenderit magna cupidatat adipisicing deserunt ut officia quis in laborum proident. Amet pariatur non do cillum elit ea officia quis irure velit sunt enim minim eu. Incididunt est proident incididunt in. Eu consequat exercitation irure Lorem voluptate.',
        },
        {
            name: 'Vintage radio and clock',
            img: '/images/reloj.jpg',
            id: 16,
            price: 80,
            category: 'Others',
            description: 'Aute tempor irure occaecat veniam consequat mollit elit fugiat officia non. Voluptate aute officia laborum consequat mollit sunt. Excepteur ad in elit qui eu consequat. Cillum non esse ex qui dolor duis mollit minim.',
        },
        {
            name: 'Virtual reality headset',
            img: '/images/realidad-virtual.jpg',
            id: 17,
            price: 120,
            category: 'Others',
            description: 'Elit eu Lorem non nisi nostrud. Ad laborum incididunt veniam ex proident. Reprehenderit elit ullamco reprehenderit amet reprehenderit voluptate incididunt ea. Et dolor amet aliqua eiusmod incididunt consectetur ea culpa.',
        },
        {
            name: 'Pikachu costume',
            img: '/images/pikachu.jpg',
            id: 18,
            price: 100,
            category: 'Others',
            description: 'Sunt labore ex anim sunt voluptate ex aliquip duis dolore et pariatur magna. Commodo eiusmod mollit magna labore officia proident dolore consequat qui. Aute ullamco Lorem voluptate est sint aute minim id incididunt in ullamco ullamco officia.',
        },
    ]
    const { productId } = useParams()
    const productFound = products.find(product => product.id === Number(productId))
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <><div className='product-detail-container'>
            <img src={productFound.img} alt="" />
            <div className='product-detail-description'>
                <h1>{productFound.name}</h1>
                <p className='product-detail-price'>${productFound.price},00 </p>
                <p className='product-detail-info'>{productFound.description} </p>
            </div>
        </div>
            <div className="related-products">
                <h2>Related products</h2>
                <Products category='Star Wars' windowWidth={windowWidth}/>
            </div></>

    )
}

export default Details