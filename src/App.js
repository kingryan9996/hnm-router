import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';


//1.전체상품페이지, 로그인, 상품상세페이지
//1-1. 네비게이션바를 만들기
//2. 전체상품페이지 = 전체상품을 볼 수 있음
//3. 로그인버튼을 누르면 로그인 페이지가 나옴.
//4. 상품디테일을 눌렀으나, 로그인이 안되어 있을경우에는 로그인페이지로 이동
//5. 로그인이 되어 있을경우에는 상품 디테일페이지가 나옴
//6. 로그아웃버튼을 누르면 상품디테일페이지를 볼수 업고, 로그인페이지로 이동됨
//7. 로그인시 로그아웃이 보이고, 로그아웃 시 로그인이 보임
//8. 상품을 검색할 수 있음


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
