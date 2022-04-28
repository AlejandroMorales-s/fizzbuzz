const res = require('express/lib/response');
const FizzbuzzApiService = require('../../lib/services/fizzbuzzApiService');

describe('Unit test for FizzbuzzService class', () => {
    test('"result" deberia ser igual a 1', () => { 
        const number1 = 1;
        const result = FizzbuzzApiService.applyValidationInExplorer(number1);
    
        expect(result).toBe(1);
    })

    test('"result" deberia ser igual a "FIZZ"', () => { 
        const number3 = 3;
        const result = FizzbuzzApiService.applyValidationInExplorer(number3);
    
        expect(result).toBe("FIZZ");
    })

    test('"result" deberia ser igual a "BUZZ"', () => { 
        const number5 = 5;
        const result = FizzbuzzApiService.applyValidationInExplorer(number5);
    
        expect(result).toBe("BUZZ");
    })

    test('"result" deberia ser igual a "FIZZBUZZ"', () => { 
        const number15 = 15;
        const result = FizzbuzzApiService.applyValidationInExplorer(number15);
    
        expect(result).toBe("FIZZBUZZ");
    })
});