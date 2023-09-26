import React from 'react'
import './Products.css'

function Products({category, windowWidth}) {

    const products = [
        {
            name: 'Stormtrooper mug',
            img: '/images/storm-trooper.png',
            id: 1,
            price: 60,
            category: 'Star Wars'
        },
        {
            name: 'Darth Vader figure',
            img: '/images/darth-vader.png',
            id: 2,
            price: 70,
            category: 'Star Wars'
        },
        {
            name: 'Yoda figure',
            img: '/images/yoda.png',
            id: 3,
            price: 40,
            category: 'Star Wars'
        },
        {
            name: 'Stormtrooper figure',
            img: '/images/muñeco-stormtrooper.png',
            id: 4,
            price: 80,
            category: 'Star Wars'
        },
        {
            name: 'Baby Yoda toy',
            img: '/images/baby-yoda.png',
            id: 5,
            price: 120,
            category: 'Star Wars'
        },
        {
            name: 'Phantom Menace figure',
            img: '/images/phantom.png',
            id: 6,
            price: 80,
            category: 'Star Wars'
        },
        {
            name: 'Xbox controller',
            img: '/images/control-xyz-white.png',
            id: 7,
            price: 110,
            category: 'Consoles'
        },
        {
            name: 'Playstation 5 with controller',
            img: '/images/control-consola.png',
            id: 8,
            price: 700,
            category: 'Consoles'
        },
        {
            name: 'Nintendo NES',
            img: '/images/nintendo.png',
            id: 9,
            price: 140,
            category: 'Consoles'
        }, {
            name: 'Nintendo switch controllers',
            img: '/images/control-xyz.png',
            id: 10,
            price: 80,
            category: 'Consoles'
        },
        {
            name: 'Xbox console',
            img: '/images/consola-xyz.png',
            id: 11,
            price: 450,
            category: 'Consoles'
        },
        {
            name: 'Gameboy color',
            img: '/images/gameboy.png',
            id: 12,
            price: 70,
            category: 'Consoles'
        },
        {
            name: 'Atari t-shirt',
            img: '/images/remera.png',
            id: 13,
            price: 30,
            category: 'Others'
        },
        {
            name: 'SNES t-shirt',
            img: '/images/camisa.png',
            id: 14,
            price: 30,
            category: 'Others'
        },
        {
            name: 'Sonic toy',
            img: '/images/sonic.png',
            id: 15,
            price: 35,
            category: 'Others'
        },
        {
            name: 'Vintage radio and clock',
            img: '/images/reloj.png',
            id: 16,
            price: 80,
            category: 'Others'
        },
        {
            name: 'Virtual reality headset',
            img: '/images/realidad-virtual.png',
            id: 17,
            price: 120,
            category: 'Others'
        },
        {
            name: 'Pikachu costume',
            img: '/images/pikachu.png',
            id: 18,
            price: 100,
            category: 'Others'
        },
    ]

    const maxProductsToShow = windowWidth < 850 ? 4 : products.length;
    const filteredProducts = products.filter(product => product.category === category).slice(0,maxProductsToShow)
    return (
        <div className='category-products'>
            {filteredProducts.map(product => (
                <div key={product.id} className='product-card'>
                    <img src={product.img} alt={product.name} className='product-img'/>
                    <h3 className='product-name'>{product.name}</h3>
                    <p className='product-price'>${product.price},00 </p>
                    <a href="">See product</a>
                </div>
            ))}
        </div>
    )
}

export default Products