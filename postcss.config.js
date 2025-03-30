module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // vm适配标准屏宽度，如设计图750，调成一倍图，则是375
      viewportWidth: 375
    }
  }
}
