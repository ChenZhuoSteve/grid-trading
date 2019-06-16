export default class GridConfig {
    /**
     * 网格名称
     */
    public name = "";
    /**
     * 价格
     */
    public price = 1.0;
    /**
     * 网格百分比
     */
    public percentage = 5;
    /**
     * 网格金额
     */
    public value = 2000;
    /**
     * 网格数
     */
    public gridCount = 20;
    /**
     * 是否保留利润
     */
    public isRetainProfit = false;
    /**
     * 保留利润倍数
     */
    public retainProfitMultiple = 1;
    /**
     * 逐格加码
     */
    public isMore = false;
    /**
     * 加码百分比
     */
    public morePercentage = 5;
    constructor(name: string) {
        this.name = name;
    }
}
