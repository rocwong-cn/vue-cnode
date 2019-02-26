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

      <span v-show="topic.top" class="label">置顶</span>
      <span v-show="topic.good" class="label label-good">精华</span>
      <span v-show="!topic.good && !topic.top" class="label label-other">{{ tabName }}</span>
      <a class="title" href="#" :title="topic.title">{{topic.title}}</a>
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
    tabName() {
      const categories = {
        good: '精华',
        share: '分享',
        ask: '问答',
        job: '招聘',
        dev: '客户端测试',
      };
      return categories[this.topic.tab];
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
    border-radius: 3px;
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
    padding: 1px 4px 1.5px 4px;
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
    margin-right: 8px;
  }
  .label-good {
    background:coral;
  }
  .label-other {
    background-color: #e5e5e5;
    color: #999;
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
    font-weight: 400;
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
