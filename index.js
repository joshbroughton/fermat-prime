function fermatPrime(number) {
  if (!Number.isInteger(number)) {
    throw new TypeError('fermatPrime expects an integer argument');
  }

  // some quick checks to improve speed
  if (number <= 1) {
    return false;
  } else if (number === 2) {
    return true
  } else if (number % 2 === 0) {
    return false
  }

  // everything else gets checked with Fermat's primality test
  let isPrime = true;

  for (let i = 0;i < 100; i++) {
    let base = Math.floor(Math.random() * (number - 1));

    isPrime = fermatTest(number, base);
    // if the test finds a fermat witness (proving number is not prime)
    if (!isPrime) {
      return false;
    }
  }
  // no fermat witness found on 100 tests; probability that p is not prime is (1/2)^100
  return isPrime;
}

function fermatTest(number, base) {
  return ((base ** (number - 1)) % number) === 1;
}
