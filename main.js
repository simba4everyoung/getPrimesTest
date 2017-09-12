(function () {
  $(document).ready(function () {
    $('#generateBtn').click(function () {
      var numberInput = $('#numInput').val();
      var primes = getPrimeNumbers(numberInput);
      $('#renderInput').html(numberInput);
      $('#primes').html(primes);
    });
  });

  function isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function getPrimeNumbers(input) {
    var results = [];
    var number = parseInt(input);
    if (input > 2) {
      results = [2];
      for (var i = 3; i < number; i++) {
        // no need to check even numbers
        if (i % 2 !== 0) {
          if (isPrime(i)) {
            results.push(i);
          }
        }
      }
    }
    return results.join(', ');
  }
})();
