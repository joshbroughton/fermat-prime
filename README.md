# Fermat Prime

Uses the Fermat primality test to check if in integer is prime. Uses 100 runs to ensure
an extremely low probablity of falsely returning true.

## Installation instructions

Install this module into your project with the following command:
```
npm install fermat-prime
```

Import it into your project
```
const fermatPrime = require('fermat-prime');
```

## Method

The module contains a single method, `.isPrime()` which takes an integer argument and checks
if it is prime.

The results of `isPrime()` become flaky if the supplied integer is larger than Javascript's
Number.MAX_SAFE_INTEGER.
