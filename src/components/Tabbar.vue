<template>
  <div id="tabbar">
      <div class="tab" key="all">
        <router-link v-on:click.native="getTopics('all')" to="/">全部</router-link>
      </div>
      <div class="tab" v-for="item in categories" :key="item.id">
        <router-link v-on:click.native="getTopics(item.id)"
          :to="'/?tab=' + item.id">{{ item.name }}</router-link>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Tabbar',
  data() {
    return {
      categories: [
        { id: 'good', name: '精华' },
        { id: 'share', name: '分享' },
        { id: 'ask', name: '问答' },
        { id: 'job', name: '招聘' },
        { id: 'dev', name: '客户端测试' },
      ],
    };
  },
  methods: {
    ...mapActions([
      'loadTopics',
    ]),
    getTopics(tab) {
      if (window.resetPage) {
        window.resetPage();
      }
      this.loadTopics({ tab, page: 1 });
    },
  },
};
</script>

<style scoped lang="scss">
#tabbar {
  .tab {
    display: inline-block;
    a {
      font-weight: bold;
      height: 50px;
      width: 100px;
      display: block;
      color: #2c3e50;
      line-height: 50px;
      font-family: 'Microsoft Yahei';
      text-decoration: none;
      &:hover {
        color: #3CB371;
      }
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
