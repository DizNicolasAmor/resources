function memoizer(fun){
    const cache = {};

    return function (n){
        if (cache[n]) {
            return cache[n];
        }

        const result = fun(n);
        cache[n] = result;

        return result;
    }
};
