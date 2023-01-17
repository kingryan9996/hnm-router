import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    let { id } = useParams()

    const [product, setProduct] = useState(null)
    const getProductDetail = async () => {
        // console.log(id)
        let url = `http://localhost:5000/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        setProduct(data)
    }

    useEffect(() => {
        getProductDetail()
    }, [])

    // console.log(params)
    return (
        <Container>
            <Row>
                <Col className='product-img'><img src={product?.img} /></Col>
                <Col>
                    <div>{product?.title}</div>
                    <div>\{product?.price}</div>
                    <div>{product?.choice == true ? "신상품" : ""}</div>
                    <select>
                        <option>사이즈 선택</option>
                        {product?.size.map((obj) => {
                            return <option>{obj}</option>
                        })}
                    </select><br />
                    <button>추가</button>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail