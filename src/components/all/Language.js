import React from 'react';
import { Menu, Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';

import  flag_mn from '../../assets/flag_mn.png';
import  flag_en from '../../assets/flag_en.png';
import { DynamicMDIcon } from './DynamicIcon';

export function Language(props){
  const { i18n } = useTranslation();
  const { hideArrow } = props;

  const menuStyle = {paddingTop: 5, paddingBottom: 5, borderRadius: 5};

  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
  }

  const menu = (
    <Menu style={menuStyle}>
      <Menu.Item key='enl' onClick={() => changeLanguage('enl')}>
        <div className='menu_language_back'>
          <img src={flag_en} alt='Logo' className='menu_language_logo' />
          <span className='menu_language'>English</span>
        </div>
      </Menu.Item>
      <Menu.Item key='mon' onClick={() => changeLanguage('mon')}>
        <div className='menu_language_back'>
          <img src={flag_mn} alt='Logo' className='menu_language_logo'/>
          <span className='menu_language'>Монгол</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
      <div className='menu_language_btn'>
        <span className={hideArrow ? 'header_language_link' : 'menu_language_link'} onClick={e => e.preventDefault()}>{i18n?.language === 'mon' ? 'МН' : 'EN'}</span>
        <DynamicMDIcon name='MdKeyboardArrowDown' className={hideArrow ? 'header_user_icon' : 'menu_language_arrow'} />
      </div>
    </Dropdown>
  )
}