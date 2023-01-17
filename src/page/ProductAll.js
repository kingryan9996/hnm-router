import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../component/ProductCard'

const ProductAll = () => {
    const [query, setQuery] = useSearchParams()
    console.log(query)
    const [productList, setProductList] = useState([])

    const getProducts = async () => {
        let searchQuery = query.get('q') || ""
        console.log(searchQuery, 'qqqqqq')
        let url = `http://localhost:5000/products?q=${searchQuery}`
        let respone = await fetch(url)
        let data = await respone.json();
        console.log(data)
        setProductList(data)
    }

    useEffect(() => {
        getProducts()
    }, [query])
    return (
        <div>
            <Container>{/* 부트스트랩에서 아이템을 중간에 볼수있게 해주는 컴포넌트 */}
                <Row>
                    {productList?.map((menu) => {
                        return <Col lg={3}><ProductCard menu={menu} productList={productList} /></Col>
                    })}
                    {/* <ProductCard productList={productList}  /> */}
                </Row>
            </Container>
            <ProductCard />
        </div>
    )
}

export default ProductAll