import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
//json-server --watch db.json --port 5000 제이슨서버 시작하는법
//http://localhost:5000/products 확인하기



const Navbar = ({ authenticate, setAuthenticate }) => {
    const navigate = useNavigate()
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성']
    const goToLogin = () => {
        navigate('/login')
        setAuthenticate(false)
    }
    const productSearch = (e) => {
        console.log(e.key)
        e.preventDefault()
        if (e.key == "Enter") {
            console.log('enter')
            console.log('nave')

            navigate(`/?q=${e.target.value}`)

        }
        // console.log(e)
        // console.log(e.target[0].value)
        // e.target[0].value = ''

    }
    const judgeLogin = () => {
        if (authenticate == true) {
            navigate('/login')
        }
    }


    return (

        <div>
            <div>
                <div className='login-button' onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} onClick={judgeLogin} />{authenticate == false ? '로그인' : '로그아웃'}
                </div></div>
            <div className='nav-section'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeeLHwvqjBT_tqo6-ZACuZMnxxDWeex4YZuUgfEMLBYw&s' alt='' /></div>
            <ul className='menu-list'>
                {menuList.map((menu) => {
                    return <li>
                        {menu}
                    </li>
                })}
            </ul>
            <div className='input-button'>
                <FontAwesomeIcon icon={faSearch} />
                <input type='text' placeholder='원하시는 상품을 검색해보세요.' onKeyPress={(e) => productSearch(e)} />
            </div>
        </div>
    )
}

export default Navbar