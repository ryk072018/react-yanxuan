import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import KitchenSharpIcon from '@material-ui/icons/KitchenSharp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import './Navigation.scss' // 引入css
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
  root: {
    width: 375,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (sessionStorage.getItem('navValue')) {
      let nowValue: string | null = sessionStorage.getItem('navValue');
      let nValue: number = Number.parseInt(nowValue ? nowValue : '0')
      setValue(nValue);
    }
  }, [])

  return (
    <div className="bottom-nav">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue);
          // 保存数据到sessionStorage
          sessionStorage.setItem('navValue', newValue)
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction component={Link} to='/' label="首页" icon={<HomeIcon />} />
        <BottomNavigationAction component={Link} to='/GoodsList' label="分类" icon={<KitchenSharpIcon />} />
        <BottomNavigationAction component={Link} to='/Favorite' label="值得买" icon={<FavoriteIcon />} />
        <BottomNavigationAction component={Link} to='/ShoppingCart' label="购物车" icon={<ShoppingCartOutlinedIcon />} />
        <BottomNavigationAction component={Link} to='/Users' label="个人" icon={<PersonOutlineOutlinedIcon />} />
      </BottomNavigation>
    </div >
  );
}
