const odd = n=> !!(n & 0x1);
const half = n=>n >> 1;
//const odd = n=>half(n) == half(n - 1);
//const half = n=>Math.floor(n/2);
class C2 {
    multiply0 (n, a){
        if (n < 1) return 0;
        if (n == 1) return a;
        return this.multiply0(n - 1, a) + a;
    }
    multiply1 (n, a){
        if (n < 1) return 0;
        if (n == 1) return a;
        let result = this.multiply1(half(n), a + a);
        if (odd(n)) {
            result += a;
        }
        return result;
    }
}
