describe("Payments function test", function(){
    beforeEach(function(){
        billAmtInput.value = 80;
        tipAmtInput.value = 16;
    });

    it('should add a payment object to allPayments on submitPaymentInfo()', () => {
        submitPaymentInfo();

        expect(paymentId).toEqual(1);
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('80');
        expect(allPayments['payment1'].tipAmt).toEqual('16');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    })

    it('should not add empty billpayment to allPayment on submitPaymentInfo()', function(){
        billAmtInput.value = 0;

        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should create a new payment on createCurPayment()', function(){
        const newPayment = createCurPayment();
        expect(newPayment.billAmt).toEqual('80');
        expect(newPayment.tipAmt).toEqual('16');
        expect(newPayment.tipPercent).toEqual(20);
    })

    it('should create payment table row on appendPaymentTable()', function(){
        let curPayment = createCurPayment();
        appendPaymentTable(curPayment);

        const tbList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(tbList.length).toEqual(4);
        expect(tbList[0].innerHTML).toEqual('$80');
        expect(tbList[1].innerHTML).toEqual('$16');
        expect(tbList[2].innerHTML).toEqual('20%');
        expect(tbList[3].innerHTML).toEqual('X');
    })

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
})