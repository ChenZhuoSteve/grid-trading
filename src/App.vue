<template>
  <div id="app">
    <div class="section">
      <div class="header">
        <div class="group" v-for="(item,index) in config" :key="item.name">
          <div class="item">
            <label class="label">网格名称</label>
            <input :value="item.name" disabled>
          </div>
          <div class="item">
            <label class="label">价格</label>
            <input v-model="item.price" type="number" :disabled="index!=0">￥
          </div>
          <div class="item">
            <label class="label">网格百分比</label>
            <input v-model="item.percentage" type="number">%
          </div>
          <div class="item">
            <label class="label">网格金额</label>
            <input v-model="item.value" type="number">￥
          </div>
          <div class="item">
            <label class="label">网格数</label>
            <input v-model="item.gridCount" type="number">
          </div>
          <div class="item">
            <label class="label">倍数</label>
            <input
              v-model="item.retainProfitMultiple"
              type="number"
              :disabled="!item.isRetainProfit"
            >
          </div>
          <div class="item">
            <label class="label">加码百分比</label>
            <input v-model="item.morePercentage" type="number" :disabled="!item.isMore">
          </div>
          <div class="item">
            <input type="checkbox" v-model="item.isRetainProfit">
            留利润
            <input type="checkbox" v-model="item.isMore">
            逐格加码
          </div>
          <div class="item">
            <label class="label">所需资金</label>
            <input :value="totalValue(index)" type="number" disabled>￥
          </div>
          <div class="item">
            <label class="label">总盈利金额</label>
            <input :value="totalProfitValue(index)|toFixed" type="number" disabled>￥
          </div>
          <div class="item">
            <label class="label">总盈利比例</label>
            <input
              :value="totalProfitValue(index)/totalValue(index)*100|toFixed"
              type="number"
              disabled
            >%
          </div>
        </div>
      </div>
      <table class="table">
        <thead>
          <th>序号</th>
          <th>类型</th>
          <th>档位</th>
          <th>买入价格</th>
          <th>卖出价格</th>
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
    this.config = [
      new GridConfig("小网"),
      new GridConfig("中网"),
      new GridConfig("大网")
    ];
    this.config[1].percentage = 15;
    this.config[1].gridCount = 0;
    this.config[2].percentage = 30;
    this.config[2].gridCount = 0;
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
        const buyPrice = configItem.price * gear; // 买入价格
        const sellOutPrice = configItem.price * (gear + tempPer); // 卖出价格
        let buyAmount = 0; // 买入数量
        // 加码
        if (configItem.isMore) {
          buyAmount =
            (configItem.value * (1 + (configItem.morePercentage / 100) * i)) /
            buyPrice;
        } else {
          buyAmount = configItem.value / buyPrice;
        }
        const item = new Grid(
          configItem.name,
          i + 1,
          gear,
          buyPrice,
          sellOutPrice,
          buyAmount
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
  @Watch("config", { immediate: true, deep: true })
  public onPercentageChanged() {
    this.config[1].price =
      this.config[0].price * (1 - this.config[1].percentage / 100);
    this.config[2].price =
      this.config[0].price * (1 - this.config[2].percentage / 100);
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
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section {
  .header {
    display: flex;
    margin-bottom: 6px;
    .group {
      margin: 4px 6px;
      .label {
        margin: 4px;
        display: inline-block;
        min-width: 100px;
      }
    }
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
