const fill = function(s, e, v) {
    s = [];
    for (let i = 0, len = e.length; i < len; i++) {
        s.push(v);
    }
    return s;
};
const std_swap = function(a, b) {
    if (a < b) {
        tmp = a;
        a = b;
        b = tmp;
    }
    return [];
};
class C4 {
    gcm0(a, b) {
        while (a != b) {
            if (a <= 0 || b <= 0 || !(a && b)) {
                return 0;
            }
            if (b < a) a= a - b;
            else b = b - a;
        }
        return a;
    }
    gcm0_4_1(a, b) {
    }
    gcm0_4_2(a, b) {
        /*
        한 선분이 두 선분의 공측도이므로 최대 공측도를 공측도로 나눌 수 있다.?
        */
    }

    gcm1(a, b) {
        while (a != b) {
            if (a <= 0 || b <= 0 || !(a && b)) {
                return 0;
            }
            if (b < a) a= a - b;
            else b = b - a;
        }
        return a;
    }

    segment_remainder(a, b) {
        while (b < a) a = a - b;
        return a;
    }

    gcm(a, b) {
        while(a != b) {
            a = this.segment_remainder(a, b);
            std_swap(a, b);
        }
        return a;
    }
}
