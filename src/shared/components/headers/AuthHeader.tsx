import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../utils/auth';

const AuthHeader: React.FC = () => {
  const [userName, setUserName] = React.useState('');

  React.useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('user'));
    if (userDetails && userDetails.username) {
      setUserName(userDetails.username);
    }
  }, []);

  const handleLogout = () => {
    logout();
  };
  return (
    <header className="p-4">
      <div className="p-2 flex justify-between items-center">
        <Link to={'/'} className="pl-4 flex items-center gap-1 relative">
          <img className="scale-125 absolute -left-1 -z-10" src="/Logo.png" alt="Logo" />
          <h1 className="font-bold text-2xl">맛집저격</h1>
        </Link>
        <div className="flex items-center gap-4 bg-white px-2 py-1 rounded-xl shadow-lg">
          <Link to={'/myfriend'}>
            <button className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold border rounded-xl py-2 px-4 shadow">
              친구 관리
            </button>
          </Link>
          <Link to={'/totallist'}>
            <button className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold border rounded-xl py-2 px-4 shadow">
              수집리스트
            </button>
          </Link>
          <Link to={'/main'}>
            <button className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold border rounded-xl py-2 px-4 shadow">
              홈으로
            </button>
          </Link>
          <div></div>
          <h1 className="font-semibold">안녕하세요, {userName}님</h1>
          <Link to={'/'}>
            <button
              onClick={handleLogout}
              className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold border rounded-xl py-2 px-4 shadow"
            >
              로그아웃
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
