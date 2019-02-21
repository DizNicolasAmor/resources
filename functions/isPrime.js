const isPrime = num => {
  const boundary = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= boundary; i += 1) if (num % i === 0) return false;
  return num >= 2;
};

