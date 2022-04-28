class FizzbuzzApiService {
    static applyValidationInExplorer(number) {
        let result;
        if (number % 5 === 0 && number % 3 === 0){
            result = "FIZZBUZZ";
        } else if (number % 5 === 0) {
            result = "BUZZ";
        } else if (number % 3 === 0) {
            result = "FIZZ";
        } else {
            result = number;
        }
        return result;
    }
}
module.exports = FizzbuzzApiService;