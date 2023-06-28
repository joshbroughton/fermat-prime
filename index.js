function fermatPrime(number) {
  if (!Number.isInteger(number)) {
    throw new TypeError('fermatPrime expects an integer argument');
  } else if (number > Number.MAX_SAFE_INTEGER) {
    throw new TypeError('fermatPrime can only accept integers less than or equal to MAX_SAFE_INTEGER');
  }

  // Some quick checks to improve speed
  if (number <= 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  }

  // Everything else gets checked with Fermat's primality test
  for (let i = 0; i < 100; i++) {
    let base = BigInt(Math.floor(Math.random() * (number - 3)) + 2);

    // If the test finds a Fermat witness (proving number is not prime)
    if (modularExponentiation(base, BigInt(number - 1), BigInt(number)) !== 1n) {
      return false;
    }
  }
  // No Fermat witness found on 100 tests; probability that p is not prime is (1/2)^100
  return true;
}

function modularExponentiation(base, exponent, modulus) {
  let result = 1n;
  base = base % modulus;

  while (exponent > 0n) {
    if (exponent % 2n === 1n) {
      result = (result * base) % modulus;
    }

    exponent = exponent / 2n;
    base = (base * base) % modulus;
  }

  return result;
}

exports.isPrime = fermatPrime;
