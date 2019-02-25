<template>
  <div class="home">
    <TopicItem v-for="topic in topics" :key="topic.id" :topic="topic"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TopicItem from '../components/TopicItem';
import { TOPICS } from '../api/config';

export default {
  name: 'home',
  components: {
    TopicItem,
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'topics',
    ]),
  },
  mounted() {
    const { tab = 'all' } = this.$route.query;
    const args = {
      tab,
    }
    this.loadTopics(args, this.$http);
  },
  methods: {
    ...mapActions([
      'loadTopics'
    ]),
  }
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