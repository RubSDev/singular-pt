import { useState, useEffect } from "react";

export const serie = (number) => {
    console.log('NUMBER---', Number(number))


  function fibonacci(n) {
    let lastElement;
    if (n === 1) {
      lastElement = 0;
    }
    if (n === 2) {
      lastElement = 1;
    }
    if (n >= 3) {
      const fibArr = [0, 1];
      for (let i = 2; i < n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
        lastElement = fibArr[fibArr.length - 1];
      }
    }
    return lastElement;
  };
  console.log("FIBONACCI--", fibonacci(Number(number)));

  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= n - 1; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }

  function primo(n) {
    const primeArr = [];
    let primeLastElement;
    for (let i = 1; primeArr.length < n; i++) {
      if (isPrime(i)) {
        primeArr.push(i);
      }
    }
    return (primeLastElement = primeArr[primeArr.length - 1]);
  }
  console.log("PRIMO---", primo(Number(number)));

  function triangular(n) {
    const consecutiveArray = [];
    const triangleArray = [];
    let initialValue = 0;
    let arrSum;
    let triangleLastElement;
    for (let i = 1; consecutiveArray.length < n; i++) {
      consecutiveArray.push(i);
      arrSum = consecutiveArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      );
      triangleArray.push(arrSum);
    }
    return (triangleLastElement = triangleArray[triangleArray.length - 1]);
  }
  console.log("TRIANGULAR---", triangular(Number(number)));

  function serie(n) {
    const serieNumber = 2 * triangular(n + 1) - 2 * primo(n) + fibonacci(n + 1);
    return serieNumber;
  }
  console.log("SERIE--", serie(Number(number)));

  return {
    totalNumber: serie(Number(number)),
  };
};
