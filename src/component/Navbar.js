import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div>
            <div>
                <FontAwesomeIcon icon={faUser} />
                로그아웃</div>
            <div>페이지 로고</div>
            <div></div>
        </div>
    )
}

export default Navbar