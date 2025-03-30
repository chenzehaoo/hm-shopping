<template>
    <div class="count-box">
        <button @click="handleSub" class="minus">-</button>
        <input :value="value" @change="handleChange" class="inp" type="text">
        <button @click="handleAdd" class="add">+</button>
    </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleSub () {
      if (this.value <= 1) return
      this.$emit('input', this.value - 1)
    },
    handleAdd () {
      this.$emit('input', this.value + 1)
    },
    handleChange (e) {
    //   console.log(e.target.value)
      const num = +e.target.value1// 转数字处理（1）数字（2）NaN
      // 输入了不合法的文本或输入负值，回退成原来的value值
      if (isNaN(num) || num < 1) {
        e.target.value = this.value
        return
      }
      this.$emit('input', num)
    }
  }
}
</script>

<style lang="less" scoped>
    .count-box {
        width: 110px;
        display: flex;
    }
    .minus,.add {
        width: 30px;
        height:30px;
        outline: none;
        border: none;
        background-color: #F1F1F1;
    }
    .inp {
        width: 40px;
        height: 30px;
        outline: none;
        border: none;
        margin: 0 5px;
        background-color: #F1F1F1;
        text-align: center;
    }
</style>
