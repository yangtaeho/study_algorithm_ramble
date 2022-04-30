const odd = n=> !!(n & 0x1);
const half = n=>n >> 1;
{
    // 내가 짠거
    const odd = n=>half(n) == half(n - 1);
    const half = n=>Math.floor(n/2);
}
{
    // hika pp. 29
    // n == parseInt(n/2) + parseInt(n/2); // 짝수인가? #1
    // n == parseInt(n/2) *2; // 짝수인가? #2
    const even =n=>parseInt(n/2)*2;
    const odd =n=>even(n-1);
    const half =n=>parseInt(n/2);
    // 4/2 = 2
    // 5/2 = 2
    // odd half + n

    // hika 2의 체인이 아니라 3의 체인으로 만든다면..
    // pp.30 ~
    /*
    int mul(int n, int a){
        if(n==1) return a
        int result = mul1(div3(n), a+a+a)
        if(n%2 == 2) r = r+ a+ a
        else if(n%2 == 1) r = r + a
        return r
    }
    */
    const div3 = n=>!!parseInt(n/3)*3;
    const odd3 = n=>n == n/3 + n/3 + n/3;
    const div4 = n=>!!parseInt(n/4)*4;
    const test = (n)=> {
        console.log(n, div3(n) + n);
        console.log(n, div3(n) + n + n);
        console.log(n, odd3(n) + n + n);
        console.log(n, div4(n));
    };
    test(15);
    test(6);
    test(16);
}
{
    const div2 = n=>!!parseInt(n/2)*2;
    const odd = n=>div2(n) + 1;
    const test = (n)=> {
        console.log(n, div2(n));
        console.log(n, odd(n));
    };
    test(15);
    test(6);
    test(16);
}
/*
{
    div2 - 1
    div3, div3 -1 ,div3 -2
    div4, div4 - 1, -2, -3
    const half = n => parseInt(n/2);
    4
    100
    5
    101
    5/2 == 2, 1
}
{
    사실 나눗셈은 비싼 연산이기 때문에 + 를 odd, half 로 대체한 것은 
    오히려 손해인 셈..


}
*/
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
    multiply_by_15 (a){
        let b = (a + a) + a;
        let c = b + b;
        return (c + c) + b;
    }
    mult_acc0(r, n, a) {
        if (n < 1) return r;
        if (n == 1) return r + a;
        if (odd(n)) {
            return this.mult_acc0(r + a, half(n), a + a);
        } else {
            return this.mult_acc0(r, half(n), a + a);
        }
    }
    mult_acc1(r, n, a) {
        if (n < 1) return r;
        if (n == 1) return r + a;
        if (odd(n)) {
            r = r + a;
        }
        return this.mult_acc1(r, half(n), a + a);
    }
    /**
     * 코드로는 mult_acc1 이 더 효율적.
     * n ==1 을 먼저 하는 게 맞다
     */
    mult_acc2(r, n, a) {
        if (n < 1) return r;
        if (odd(n)) {
            r = r + a;
            if (n == 1) return r;
        }
        return this.mult_acc2(r, half(n), a + a);
    }
    /**
     * 꼬리 물기 최적화
     */
    mult_acc3(r, n, a) {
        if (n < 1) return r;
        if (odd(n)) {
            r = r + a;
            if (n == 1) return r;
        }
        n = half(n);
        a = a + a;
        return this.mult_acc3(r, n, a);
    }
    /**
     * 재귀를 루프로
     */
    mult_acc4(r, n, a) {
        if (n < 1) return r;
        while(true) {
            if (odd(n)) {
                r = r + a;
                if (n == 1) return r;
            }
            n = half(n);
            a = a + a;
        }
    }
    multiply2 (n, a){
        if (n < 1) return 0;
        if (n == 1) return a;
        return this.mult_acc4(a, n - 1, a);
    }
    /**
     * while 까지 쓸 필요 있나?
     */
    multiply3 (n, a){
        if (n < 1) return 0;
        while(!(odd(n))) {
            a = a + a;
            n = half(n);
        }
        if (n == 1) return a;
        return this.mult_acc4(a, n - 1, a);
    }
    /**
     * trash.. 성급한 최적화...
     */
    multiply4 (n, a){
        if (n < 1) return 0;
        while(!(odd(n))) {
            a = a + a;
            n = half(n);
        }
        if (n == 1) return a;
        // even(n-1) -> n -1 != 1
        return this.mult_acc4(a, half(n - 1), a + a);
    }
}
