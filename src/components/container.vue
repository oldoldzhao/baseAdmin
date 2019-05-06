<template>
  <el-container class="container">
    <el-header>
      <h1 class="container-title">标题</h1>
      <div class="container-portrait">
        <el-dropdown @command="portraitCommand">
          <span class="el-dropdown-link">
            <img
              class="headerPic"
              :src="headerImg"
              alt="header"
              v-show="headerImg"
            >
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="index">退出登录</el-dropdown-item>
            <el-dropdown-item command="personal">个人中心</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu
            :default-active="activeIndex"
            background-color="#393d49"
            text-color="#fff"
            @open="openNavMenu"
            :default-openeds="defaultOpeneds"
          >
            <el-submenu index="home">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="index" @click="turnPage('index')">首页</el-menu-item>
                <el-menu-item index="organization" @click="turnPage('organization')">组织机构</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-main>
          <div class="container-main">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer style="height:40px">页脚</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "container",
  data() {
    return {
      headerImg: require("../assets/logo.png"),
      defaultOpeneds: [],
      activeIndex: 'index'
    };
  },
  methods: {
    turnPage(path) {
      this.$router.push(path);
    },
    openNavMenu(index) {
      this.defaultOpeneds = [index];
    },
    portraitCommand(command) {
      if (command == "index") {
        // let token = getCookie("token");
        // let uri = this.$store.state.url;
        // removeCookie("token");
        // removeCookie("userInfo");
        // window.location.href =
        //   this.$store.state.logoutUrl + "?token=" + token + "&uri=" + uri;
      } else if (command == "personal") {
        // window.location.href = "http://sso.cdwyzl.com/index.php/uc";
      }
    }
  },
  mounted() {
    this.activeIndex = this.$route.name;

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-container.container {
  width: 100%;
  height: 100%;
  background: #393d49;
  overflow: hidden;
}

.container .el-main {
  width: 100%;
  height: calc(100% - 120px);
  padding: 10px;
  background: #f6f7f9;
}

.container .el-main .container-main {
  width: calc(100% - 40px);
  height: calc(100% - 20px);
  background: white;
  padding: 10px 20px;
}

/* 头部 */
.container .el-header {
  background: #393d49;
}

.container .container-title {
  line-height: 60px;
  height: 60px;
  color: #11899f;
  float: left;
}

.container .container-portrait {
  float: right;
}

.container .el-dropdown-link {
  height: 60px;
  line-height: 60px;
}

.container .el-dropdown-link img {
  display: block;
  width: 46px;
  height: 46px;
  margin-top: 7px;
  border-radius: 100%;
}

/* 侧边栏 */
.container .el-scrollbar {
  height: 100%;
}

.container .el-scrollbar__wrap {
  overflow-x: hidden;
}

.container .el-menu {
  border: none;
}

.container .el-menu-item-group__title {
  padding: 0;
}

/* footer */
.container .el-footer {
  background-color: #f6f7f9;
  color: #393d49;
  text-align: center;
  line-height: 40px;
  font-size: 12px;
}

.container .el-menu-item i,
.container .el-submenu__title i {
  color: white;
}

.container .el-submenu .el-menu li.is-active,
.container .el-menu-item.is-active {
  background-color: #11899f !important;
  color: rgb(255, 255, 255);
}
</style>
