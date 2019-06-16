export default class Grid {
    /**
     * 序号
     */
    private index = 0;
    /**
     * 名称
     */
    private name = "";
    /**
     * 档位
     */
    private gear = 0;
    /**
     * 买入价格
     */
    private buyPrice = 0;
    /**
     * 卖出价格
     */
    private sellOutPrice = 0;
    /**
     * 买入数量
     */
    private buyAmount = 0;
    /**
     * 买入金额
     */
    private buyValue = 0;
    /**
     * 卖出数量
     */
    private sellAmount = 0;
    /**
     * 卖出金额
     */
    private sellValue = 0;
    /**
     * 盈利金额
     */
    private profitValue = 0;
    /**
     * 盈利比例
     */
    private profitPercentage = 0;
    /**
     * 存留数量
     */
    private retainAmount = 0;
    /**
     * 存留利润
     */
    private retainProfitValue = 0;
    constructor(
        name: string,
        index: number,
        gear: number,
        buyPrice: number,
        sellOutPrice: number,
        buyAmount: number
    ) {
        this.name = name;
        this.index = index;
        this.gear = gear;
        this.buyPrice = buyPrice;
        this.sellOutPrice = sellOutPrice;
        this.buyAmount = buyAmount;
        this.buyValue = buyPrice * buyAmount;
        this.sellAmount = buyAmount;
        this.sellValue = sellOutPrice * this.sellAmount;
        this.profitValue = this.sellValue - this.buyValue;
        this.profitPercentage = (this.profitValue / this.buyValue) * 100;
    }
    /**
     * 保留利润
     * @param {number} multiple 保留利润倍数
     */
    public retainProfit(multiple: number) {
        this.retainProfitValue = this.profitValue * multiple;
        if (this.retainProfitValue > this.buyAmount) {
            this.retainProfitValue = NaN;
            this.sellValue = 0;
            this.sellAmount = 0;
            this.retainAmount = 0;
        } else {
            this.sellValue = this.sellValue - this.retainProfitValue;
            this.sellAmount = this.sellValue / this.sellOutPrice;
            this.retainAmount = this.buyAmount - this.sellAmount;
        }
    }

    public getBuyValue() {
        return this.buyValue;
    }

    public getBuyPrice() {
        return this.buyPrice;
    }

    public getName() {
        return this.name;
    }

    public getProfitValue() {
        return this.profitValue;
    }
}
