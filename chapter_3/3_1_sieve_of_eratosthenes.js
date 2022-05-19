const fill = function(s, e, v) {
    s = [];
    for (let i = 0, len = e.length; i < len; i++) {
        s.push(v);
    }
    return s;
};
class C3 {
    tri(n) {
        return n*(n + 1)/2;
    }
    rect(n) {
        return n * (n + 1);
    }
    rectEx(n) {
        return 2 * this.tri(n);
    }
    #primeRes = [];
    primm(max) {
        if (!max) {
            max = 999;
        }
        //var primeRes = [];
        for (var i = 3, len = max; i < len; i++) {
            var isPrime = true;
            for (var j = 2, len2 = i; j < len2; j++) {
                if (i%j == 0) {
                    isPrime = false;
                    continue;
                }
            }
            if (isPrime) {
                this.#primeRes.push(i);
            }
        }
        return this.#primeRes;
    }
    getIndexByPrime(v) {
        return (v - 3)/2;
    }
    getIndexByPrimeRes(v) {
        return this.#primeRes.findIndex(function(val, i) {
            return val == v;
        });
    }
    vByPrimeRes(i) {
        return 3 + 2*i;
    }
    vByPrime(i) {
        return this.#primeRes[i];
    }
    mark_sieve(first, last, factor) {
        first.push(false);
        while (last - first > factor) {
            first = first + factor;
            first = false;
        }
        return first;
    }

    sift0(first, n) {
        first.push(n);
        first = fill(first, first.length, true);
        var i = 0;
        var index_square = 3;
        while (index_square < n) {
            if (first[i]) {
                first.push(index_square);
                first.push(n);
                this.mark_sieve(first,
                    first.length,
                    i + i + 3);
            }
            ++i;
            index_square = 2*i*(i + 3) + 3;
        }
    }
}
