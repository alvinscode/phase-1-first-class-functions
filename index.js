function receivesAFunction(callBackFunction) {
    callBackFunction();
}

function returnsANamedFunction() {
    function namedFunction () {
        return 'Named Function';
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        return 'Anonymous Function';
    }
}