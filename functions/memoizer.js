function memoizer(fun){
    let cache = {};

    return function (n){
        if (cache[n]) return cache[n];

        let result = fun(n);
        cache[n] = result;
        return result;
    }
};
