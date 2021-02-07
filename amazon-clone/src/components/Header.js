import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBar className="headerbar">
      <HeaderLogo
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      ></HeaderLogo>
      <HeaderSearch className="header-search">
        <HeaderSearchInput className="header-searchInput" type="text" />
        <HeaderSearchIcon className="searchIcon" />
      </HeaderSearch>
      <HeaderNav className="header_nav">
        <HeaderOption className="header_option">
          <HeaderOptionTop className="header__optionLineOne">
            Hello Guest
          </HeaderOptionTop>
          <span className="header__optionLineTwo">Sign In</span>
        </HeaderOption>
        <HeaderOption className="header__option">
          <HeaderOptionTop className="header__optionLineOne">
            Returns
          </HeaderOptionTop>
          <span className="header__optionLineTwo">& Orders</span>
        </HeaderOption>
        <HeaderOption className="header__option">
          <HeaderOptionTop className="header__optionLineOne">
            Your
          </HeaderOptionTop>
          <span className="header__optionLineTwo">Prime</span>
        </HeaderOption>
        <HeaderOptionBasket className="header__optionBasket">
          <ShoppingBasketIcon />
          <HeaderBasketCount className="header__optionLineTwo header__basketCount">
            0
          </HeaderBasketCount>
        </HeaderOptionBasket>
      </HeaderNav>
    </HeaderBar>
  );
};

const HeaderBar = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
  color: white;
`;

const HeaderLogo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
`;
const HeaderSearchInput = styled.input`
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
`;

const HeaderSearchIcon = styled(SearchIcon)`
  padding: 5px;
  height: 22px !important;
  background-color: #cd9042;
`;

const HeaderNav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const HeaderOptionTop = styled.span`
  font-size: 10px;
`;

const HeaderOptionBottom = styled.span`
  font-size: 13px;
  font-weight: 800;
`;

const HeaderOptionBasket = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;
const HeaderBasketCount = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 800;
`;

export default Header;
