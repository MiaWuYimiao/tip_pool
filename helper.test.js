describe("Payments function test", function(){
    it('should calculate correct total amount on sumPaymentTotal(type)', () => {
        allPayments = {payment1 : {tipAmt:5, billAmt:20, tipPercent:25} ,
                        payment2 : {tipAmt:8, billAmt:35, tipPercent:23}};
        
        expect(sumPaymentTotal('tipAmt')).toEqual(13);
        expect(sumPaymentTotal('billAmt')).toEqual(55);
        expect(sumPaymentTotal('tipPercent')).toEqual(48);

        allPayments = {};
    })

    it('should calculate correct tip percent', function(){
        expect(calculateTipPercent(50, 9)).toEqual(18);
    });

    it('should generate new td to tr on appendTd()', function(){
        let tr = document.createElement('tr');
        appendTd(tr, 50);
        expect(tr.children.length).toEqual(1);
        expect(tr.firstChild.innerHTML).toEqual('50');
    });

})