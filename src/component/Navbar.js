import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
//json-server --watch db.json 제이슨서버 시작하는법

const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성']
    return (
        <div>
            <div>
                <div className='login-button'>
                    <FontAwesomeIcon icon={faUser} />
                    로그아웃</div></div>
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
                <input type='text' value="검색" />
            </div>
        </div>
    )
}

export default Navbar