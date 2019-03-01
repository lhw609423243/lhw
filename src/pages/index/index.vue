<template>
  <div>
    <typevideo v-if="tmp_type == 'typevideo'" :tmp_data="tmp_datalist"></typevideo>
    <typegif v-if="tmp_type == 'typegif'"></typegif>
    <typevoice v-if="tmp_type == 'typevoice'"></typevoice>
    <emoji v-if="tmp_type == 'emoji'"></emoji>
  </div>
</template>

<script>
// import card from '@/components/card'
import typevideo from '@/components/typevideo'
import typegif from '@/components/typegif'
import typevoice from '@/components/typevoice'
import emoji from '@/components/emoji'
export default {
  data () {
    return {
      tmp_type: 'typegif',
      tmp_datalist: {
        id: 0,
        name: 'name',
        data: [
          {
            url: 'ssss',
            cid: 2
          },
          {
            url: 'ssss',
            cid: 3
          }
        ]
      }
    }
  },

  components: {
    typegif,
    typevideo,
    typevoice,
    emoji
  },

  methods: {
    // bindViewTap () {
    //   const url = '../logs/main'
    //   if (mpvuePlatform === 'wx') {
    //     mpvue.switchTab({ url })
    //   } else {
    //     mpvue.navigateTo({ url })
    //   }
    // },
    // clickHandle (ev) {
    //   console.log('clickHandle:', ev)
    //   // throw {message: 'custom test'}
    // }
  },

  created () {
    // let app = getApp()
    mpvue.setNavigationBarTitle({
      title: '百度输入法'
    })
  }
}
</script>

<style scoped>

</style>
