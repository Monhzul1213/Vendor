import React from 'react';
import { useTranslation } from 'react-i18next';

import { DynamicAIIcon } from './DynamicIcon';

export function Error(props){
  const { t } = useTranslation();
  const { error, label, fromForm, id } = props;

  return (
    <div className={fromForm ? 'error_back_no_margin' : 'error_back'}>
      <DynamicAIIcon name='AiOutlineInfoCircle' id={id+'b'} className='error_icon' />
      <span className='error_text' id={id}>{label ? (t(label) + t('errors.' + error)) : error}</span>
      {/* <span className='error_text'>{label ? t(label) : ''}{t('errors.' + error)}</span> */}
    </div>
  )
}