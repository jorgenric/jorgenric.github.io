

describe("checkPwService",function(){
    
    beforeEach(module('passwordGenerator'));
    
    describe("password rank",function(){
        
        it("should should be non negative", inject(function(checkPwService){
            var password = "a";
            var score = checkPwService.getPwScore(password);
            expect(score).toBeGreaterThan(-1);
        }));
        
        it("should should be less than 5", inject(function(checkPwService){
            var password = "t14Dpw13443";
            var score = checkPwService.getPwScore(password);
            expect(score).toBeLessThan(5);
        }));
        
    });
    
});