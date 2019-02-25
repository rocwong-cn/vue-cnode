<template>
  <div id="topic">
      <a href="#">
        <img class="avatar" :src="topic.author.avatar_url" alt="头像" :title="topic.author.loginname">
      </a>
      <span class="data">
        <em class="reply">{{topic.reply_count}}</em>
        <span class="slash">/</span>
        <span class="visit">{{topic.visit_count}}</span>
      </span>

      <span v-show="topic.top" class="label">顶</span>
      <span v-show="topic.good" class="label label-good">精</span>
      <a class="title" href="#">{{topic.title}}</a>
      <span class="time">{{formatedTime}}</span>
    </div>
</template>

<script>
import { beautifyDate, formatDate } from '../utils/tools';

export default {
  name: 'TopicItem',
  props: {
    topic: Object,
  },
  computed: {
    formatedTime() { // 改成箭头函数会有this指向的问题
      const f = formatDate(this.topic.create_at);
      return beautifyDate(f);
    },
  },
};
</script>

<style scoped lang="scss">
#topic {
  padding: 0 5px;
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;

  .avatar {
    width: 30px;
    height: 30px;
  }
  .avatar:hover {
     animation: shake 1s;
  }
  .data {
    margin: 0 5px;
    font-size: 12px;
    width: 70px;
    text-align: center;
    .reply {
      font-size: 14px;
      color: #9e78c0;
    }
    .slash {
      margin: 0 3px;
    }
  }
  .label {
    background: #42b983;
    padding: 1.5px 5px;
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
    margin-right: 8px;
  }
  .label-good {
    background:coral;
  }
  .title {
    max-width: 700px;
    white-space:nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    overflow: hidden;
    font-size: 16px;
    color: #42b983;
    word-spacing: 1.5px;
    &:hover {
      color: rgba($color: #42b983, $alpha: 0.7);
    }
  }
  .time {
    position: absolute;
    right: 0;
    color: #888888;
  }
}
</style>
