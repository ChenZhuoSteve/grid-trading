<template>
  <div id="app">
    <div class="top-header">
      网格交易策略生成器,参考了ETF拯救世界的文章
      <a
        class="repo-link"
        href="https://github.com/ChenZhuoSteve/grid-trading"
        title="查看源代码"
      >
        <img class="github-icon" src="./assets/GitHub-Mark-32px.png" />查看源码
      </a>
    </div>
    <div class="section">
      <div class="header">
        <div class="group" v-for="(item,index) in config" :key="item.name">
          <div class="title">
            <label class="label">网格名称</label>
            <input :value="item.name" disabled />
          </div>
          <div class="item">
            <label class="label">价格</label>
            <input v-model.number="item.price" :disabled="index!=0" />￥
          </div>
          <div class="item">
            <label class="label">网格百分比</label>
            <input v-model.number="item.percentage" />%
          </div>
          <div class="item">
            <label class="label">购买份数</label>
            <input v-model.number="item.buyAmount" />
          </div>
          <div class="item">
            <label class="label">网格数</label>
            <input v-model.number="item.gridCount" />
          </div>
          <div class="item">
            <label class="label">倍数</label>
            <input v-model.number="item.retainProfitMultiple" :disabled="!item.isRetainProfit" />
          </div>
          <div class="item">
            <label class="label">加码百分比</label>
            <input v-model.number="item.morePercentage" :disabled="!item.isMore" />
          </div>
          <div class="item">
            <label class="label">所需资金</label>
            <input :value="totalValue(index)|toFixed" disabled />￥
          </div>
          <div class="item">
            <label class="label">总盈利金额</label>
            <input :value="totalProfitValue(index)|toFixed" disabled />￥
          </div>
          <div class="item">
            <label class="label">总盈利比例</label>
            <input :value="totalProfitValue(index)/totalValue(index)*100|toFixed" disabled />%
          </div>
          <div class="item">
            <input type="checkbox" v-model="item.isRetainProfit" />
            留利润
            <input type="checkbox" v-model="item.isMore" />
            逐格加码
          </div>
        </div>
      </div>
      <div class="add-grid">
        <button @click="addGrid">增加网格</button>
      </div>
      <table class="table">
        <thead>
          <th>序号</th>
          <th>类型</th>
          <th>档位</th>
          <th>买入价格</th>
          <th>卖出价格</th>
          <th>成本</th>
          <th>买入数量</th>
          <th>买入金额</th>
          <th>卖出数量</th>
          <th>卖出金额</th>
          <th>盈利金额</th>
          <th>盈利比例</th>
          <th>保留数量</th>
          <th>保留利润</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in sortGrid" :key="item.name+item.index" :class="gridClass(item)">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gear|toFixed}}</td>
            <td>{{item.buyPrice|toFixed}}￥</td>
            <td>{{item.sellOutPrice|toFixed}}￥</td>
            <td>{{item.cost|toFixed}}￥</td>
            <td>{{item.buyAmount|toFixed(0)}}</td>
            <td>{{item.buyValue|toFixed}}￥</td>
            <td>{{item.sellAmount|toFixed(0)}}</td>
            <td>{{item.sellValue|toFixed}}￥</td>
            <td>{{item.profitValue|toFixed}}￥</td>
            <td>{{item.profitPercentage|toFixed}}%</td>
            <td>{{item.retainAmount|toFixed(0)}}</td>
            <td v-if="isNaN(item.retainProfitValue)">无法保留</td>
            <td v-else>{{item.retainProfitValue|toFixed}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Grid from "./lib/grid";
import GridConfig from "./lib/gridConfig";
@Component({
  filters: {
    toFixed(value: number, digits = 3) {
      if (!value) {
        return "";
      }
      if (typeof value === "number") {
        return value.toFixed(digits);
      }
      return value;
    }
  }
})
export default class App extends Vue {
  private config: GridConfig[];
  constructor() {
    super();
    this.config = [new GridConfig("小网")];
  }
  public mounted() {
    this.$watch(
      function() {
        return this.config[0].price;
      },
      function() {
        this.config[1].price =
          this.config[0].price * (1 - this.config[1].percentage / 100);
        this.config[2].price =
          this.config[0].price * (1 - this.config[2].percentage / 100);
        this.config[1].price = Number.parseFloat(
          this.config[1].price.toFixed(3)
        );
        this.config[2].price = Number.parseFloat(
          this.config[2].price.toFixed(3)
        );
      }
    );
  }
  /**
   * @returns {Grid[][]}
   */
  get gridList() {
    const list: Grid[][] = [];
    for (const configItem of this.config) {
      const tempPer = configItem.percentage / 100;
      const tempList: Grid[] = [];
      for (let i = 0; i < configItem.gridCount; ++i) {
        if (
          i === 0 &&
          (configItem.name === "中网" || configItem.name === "大网")
        ) {
          continue;
        }
        const gear = 1 - i * tempPer; // 档位
        if (gear < 0) {
          continue;
        }
        const buyPrice = Number.parseFloat(
          (configItem.price * gear).toFixed(3)
        ); // 买入价格
        const sellOutPrice = Number.parseFloat(
          (configItem.price * (gear + tempPer)).toFixed(3)
        ); // 卖出价格
        let buyAmount = configItem.buyAmount; // 买入数量
        let cost = 0;
        // 加码
        if (configItem.isMore) {
          buyAmount =
            configItem.buyAmount * (1 + (configItem.morePercentage / 100) * i);
        }
        if (i === 0) {
          cost = buyPrice;
        } else {
          const tempBuyCost =
            tempList.reduce(
              (accumulator, gridItem) =>
                accumulator + gridItem.getBuyAmount() * gridItem.getBuyPrice(),
              0
            ) +
            buyPrice * buyAmount;
          const tempBuyAmount =
            tempList.reduce(
              (accumulator, gridItem) => accumulator + gridItem.getBuyAmount(),
              0
            ) + buyAmount;
          cost = tempBuyCost / tempBuyAmount;
        }
        const item = new Grid(
          configItem.name,
          i + 1,
          gear,
          buyPrice,
          sellOutPrice,
          buyAmount,
          cost
        );
        if (configItem.isRetainProfit) {
          item.retainProfit(configItem.retainProfitMultiple);
        }
        tempList.push(item);
      }
      list.push(tempList);
    }
    return list;
  }
  get sortGrid() {
    return this.gridList.flat().sort((a, b) => {
      return b.getBuyPrice() - a.getBuyPrice();
    });
  }
  public totalValue(index: number) {
    return this.gridList[index].reduce(
      (acc, item) => acc + item.getBuyValue(),
      0
    );
  }
  public totalProfitValue(index: number) {
    return this.gridList[index].reduce(
      (acc, item) => acc + item.getProfitValue(),
      0
    );
  }
  public gridClass(grid: Grid) {
    return {
      "small-grid": grid.getName() === "小网",
      "middle-grid": grid.getName() === "中网",
      "big-grid": grid.getName() === "大网"
    };
  }
  public addGrid() {
    const config = this.config[0];
    if (this.config.length === 1) {
      const newConfig = new GridConfig("中网");
      newConfig.price = config.price;
      newConfig.buyAmount = config.buyAmount;
      newConfig.isRetainProfit = config.isRetainProfit;
      newConfig.isMore = config.isMore;
      newConfig.percentage = 15;
      newConfig.gridCount = 10;
      this.config.push(newConfig);
    } else if (this.config.length === 2) {
      const newConfig = new GridConfig("大网");
      newConfig.price = config.price;
      newConfig.buyAmount = config.buyAmount;
      newConfig.isRetainProfit = config.isRetainProfit;
      newConfig.isMore = config.isMore;
      newConfig.percentage = 30;
      newConfig.gridCount = 5;
      this.config.push(newConfig);
    }
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  .top-header {
    font-size: 1.5em;
  }
  .repo-link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin-left: 24px;
  }
  .github-icon {
    width: 16px;
  }
}
.section {
  .header {
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;
    .group {
      margin: 4px 6px;
      border: 1px solid black;
      .label {
        margin: 4px;
        display: inline-block;
        min-width: 100px;
      }
      .item {
        display: inline-block;
      }
    }
  }
  .add-grid {
    margin: 6px;
  }
  .table {
    border: 1px solid #ddd;
    border-spacing: 0;
    border-collapse: collapse;
    tr.middle-grid {
      background-color: #3da4ab;
    }
    tr.big-grid {
      background-color: #fe8a71;
    }
    th,
    td {
      border: 1px solid #ddd;
      padding: 4px 10px;
    }
  }
}
</style>
