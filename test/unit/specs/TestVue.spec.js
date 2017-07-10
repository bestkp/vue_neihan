import Vue from 'vue'
import TestVue from '@components/practise/TestVue'

describe('test-vue', () => {
  it('$mount()', () => {
    const expectedMsg = '你好';

    const HtmlContainer = vue.extend({
      data() {
        return {
          text: expectedMsg
        }
      },
      template: `<test-vue :msg="text"></test-vue>>`
    })
    const vm = new HtmlContainer();
    expect(vm.$el.querySelector('div').textContent).to.be.eq(expectedMsg);
  })
})
