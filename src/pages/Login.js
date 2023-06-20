import React,{Suspense} from 'react';
import LoginNew from '../components/login/LoginNew';
import '../css/login1.css';
import { Loading } from './Loading';
import { LoginScript } from '../components/login';


export function Login(){
  return (
    <Suspense fallback={<Loading />}>
        <LoginNew/>
        <LoginScript />
    </Suspense>
  )
} 