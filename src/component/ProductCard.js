import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ menu }) => {
    console.log(menu)
    // console.log(props.productList[1], '111')
    // console.log(props, '2222')
    // console.log(props.productList, '11111')
    // console.log(props.productList, '5555555')
    // console.log(props.idx, '2222')
    const showDetail = () => {
        // navigate('/login')
        navigate(`/product/${menu.id}`)
    }

    const navigate = useNavigate()
    return (
        <div className='item-list' onClick={showDetail}>
            <img src={menu?.img} />
            <div>{menu?.choice == true ? "Conscious Choice" : ""}</div>
            <div>{menu?.title}</div>
            <div>\{menu?.price}</div>
            <div>{menu?.new == true ? "신제품" : ""}</div>
        </div>
    )
}

export default ProductCard