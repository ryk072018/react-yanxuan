import React from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import './Home.scss'

export default function Home() {
  return (
    <div className="home">
      <header className="h-topHeader">
        <a className="h-topLeft" href="/">
          <img className="htop-img" src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt="图片" />
        </a>
        <div className="h-topInput">
          <a href="./" className="h-sa">
            <SearchIcon className="h-search"></SearchIcon>
            <span className="h-sinfo">搜索商品, 共32419款好物</span>
          </a>
        </div>
        <div className="h-topLogin">
          <Button variant="outlined" size="small" color="secondary">
            登录
          </Button>
        </div>
      </header>
    </div>
  );
}
