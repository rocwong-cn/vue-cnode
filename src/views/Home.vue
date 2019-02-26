<template>
  <div class="home">
    <TopicItem v-for="topic in topics" :key="topic.id" :topic="topic"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TopicItem from '../components/TopicItem.vue';

export default {
  name: 'home',
  components: {
    TopicItem,
  },
  data() {
    return {
      lastReqPage: 0,
    };
  },
  computed: {
    ...mapState([
      'topics',
      'page',
    ]),
  },
  created() {
    window.addEventListener('scroll', this.scrollMethod);
  },
  mounted() {
    this.getTopics();
    window.resetPage = () => {
      this.lastReqPage = 0;
    };
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollMethod);
  },
  methods: {
    ...mapActions([
      'loadTopics',
    ]),
    getTopics() {
      if (this.lastReqPage === this.page) {
        return;
      }
      this.lastReqPage = this.page;
      const { tab = 'all' } = this.$route.query;
      const args = {
        tab,
        page: this.page,
      };
      this.loadTopics(args);
    },
    scrollMethod() {
      const sumH = document.body.scrollHeight || document.documentElement.scrollHeight;
      const viewH = document.documentElement.clientHeight;
      const scrollH = document.body.scrollTop || document.documentElement.scrollTop;
      if (viewH + scrollH >= sumH) {
        this.getTopics();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  width: 1000px;
  border-radius: 5px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  min-height: 800px;
  box-shadow: 0 0 10px #ccc;
}
</style>
