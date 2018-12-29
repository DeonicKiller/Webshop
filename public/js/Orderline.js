class Orderline{
    
    setOrderId(orderId){
        this.orderId = orderId;
    }
    setProductId(productId){
        this.productId = productId;
    }

    setAmount(amount){
        this.amount = amount;
    }

    getOrderId(){
        return this.orderId;
    }
    getProductId(){
        return this.productId
    }
    getAmount(){
        return this.amount;
    }
}