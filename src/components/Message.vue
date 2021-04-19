<template>
  <div>
    <div>
      <h3>有什么话想说的就留个言吧</h3>
    </div>
    <div class="mid">
      <el-input placeholder="请输入名字" v-model="form.message_name" clearable>
      </el-input><br />
      <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="form.message_info" class="el-input-info">
      </el-input><br />
      <el-button type="primary" @click="submit();">留言</el-button>
    </div>
    <div class="down">
      <el-table :data="list" height="250">
        <el-table-column prop="message_name" label="名字" width="100">
        </el-table-column>
        <el-table-column prop="message_info" label="内容" >
        </el-table-column>
        <el-table-column prop="message_time" label="时间" width="150">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        form: {
          message_name: '',
          message_info: '',
        }
      };
    },
    methods: {
      submit: function() {
        var data = this.form
        this.$http.post(('http://106.14.69.50:8088/message/info'), data, {
          emulateJSON: true
        }).then(res => {
          // console.log(res.body);
          if (res.body.code == 4000) {
            alert(res.body.message)
              window.location.reload()
          } else {
            alert(res.body.message)
          }

        }, res => {
          console.log(res);
        });
      }
    },
    created() {
      // fetch方式实现跨域
      this.$http.post('http://106.14.69.50:8088/message/findAllMessage').then(res => {
        // console.log(res)
        this.list = res.body.data
      })
    },
  }
</script>

<style scoped>
  .el-input {
    position: absolute;
    width: 180px;
    margin-left: -15%;
  }

  .el-input-info {
    position: absolute;
    width: 300px;
    margin-left: -15%;
    margin-top: 40px;
  }

.el-button{
   position: absolute;
   margin-left: -15%;
   margin-top: 116px;
}

  .mid {
    /* background-color: red; */
    height: 200px;
    margin-top: 20px;
    width: 60%;
    margin: 20px 20% 20px 20%;
  }

  .down{
    width: 60%;
    margin: 20px 20% 20px 20%;
  }
</style>
