import { Injectable } from '@angular/core';
// const Web3 = require('web3');
// declare let require: any;
declare let window: any;
declare let web3: any;

@Injectable({
  providedIn: 'root'
})
export class MetamaskService {
  private isInstalled = false;
  private web3: any;

  constructor() { }

  init() {
    if (window.ethereum === undefined) {
      console.log('Please install Metamask');
      return;
    }

    this.isInstalled = true;

    this.web3 = window.web3.currentProvider;
    console.log('web3', this.web3);
    








  }

  isMetamaskInstalled() {
    return this.isInstalled;
  }

  signIn() {
    console.log('meta signin()');

    // if (window.ethereum === undefined) {
    //   console.log('Please install Metamask');
    //   return;
    // }
    
    // let accounts = [];
    // window.ethereum.request({
    //     method: 'eth_requestAccounts'
    // }).then((response: any) => {
    //     console.log('response', response);
    //     accounts = response;
    //     console.log('account', accounts);
    // })
    // .catch((err: any) => {
    //   console.log('err', err)}
    // );

    if (web3 === undefined) {
      console.log('Please install Metamask');
      return;
    }




    
  }


}