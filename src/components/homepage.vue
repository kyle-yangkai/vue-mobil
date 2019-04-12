<template>
    <div class="homepage">
      <div class="adress">地址选择栏</div>
      <div class= "searchBar">
        <router-link to="Login" class="search">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"></path></svg>
          <span>搜索饿了么商家、商品名称</span>
        </router-link>
      </div>
      <!-- <swipe :dataObj="post"> <div slot=1>1</div> </swipe> -->
      <div class="foodClass">
        <mt-swipe :auto="0">
            <mt-swipe-item>
              <div class="food">
                <foodModule v-for="(item,index) in foodModulItems" :key="index" :foodModul="item.foodModul"/>
              </div>
            </mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="index">
        <div class="index1"> 第一个广告 </div>
        <div class="index2"> 第二个广告 </div>
        <div class="index3"> 
          <div class="index3-1">资质证照</div>
          <mt-swipe :auto="3000">
            <mt-swipe-item>
              <router-link to="Login" class="imgLink">
                <img src="https://fuss10.elemecdn.com/7/05/bb01f6e34c18a0e12d39b7c98e6f6jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/">
              </router-link>
            </mt-swipe-item>
            <mt-swipe-item>
              <router-link to="Test1" class="imgLink">
                <img src="https://fuss10.elemecdn.com/2/f6/36e52bca0d6db458e9855b7fc5813jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/">
              </router-link>
            </mt-swipe-item>
          </mt-swipe> 
        </div>
      </div>
      <div class="shopList-title">商家推荐</div>
      <div class="shopList-filter">
        <div class="filterBox">
          <div class="filter">综合排序</div>
          <div class="filter">距离最近</div>
          <div class="filter">品质联盟</div>
          <div class="filter">筛选</div>
        </div>
      </div>
      <div class="shoplist">
        <shop v-for="(item,index) in shopDataItems" :key="index" :shopData="item.shopData"/>
      </div>
      <div style="height:1000px"></div>
    </div>
</template>
<script>
import shop from './templates/shop'
import foodModule from './templates/foodModule'
export default {
  name: 'homepage',
  data (){
    return{
      shopDataItems:[
        {
          shopData: {
            url: 'https://fuss10.elemecdn.com/3/36/a948a252265c549038337d58d2840jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/',
            isBig: true,
            name: '沙县小吃（龙山中路店12314214ee141ew12132dsfwewrre）',
            isAdd: true,
            rate: '4.4',
            saleNumber: 59,
            send: true,
            sendStandard: 20,
            sendCost: '配送费￥3.1',
            distance: '162m',
            minute: 20,
            saleInf: [
              {
                saleIcon: '减',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '换',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '首',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '折',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '赠',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '特',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '保',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '票',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              }
            ]
          }
        },
        {
          shopData: {
            url: 'https://fuss10.elemecdn.com/3/36/a948a252265c549038337d58d2840jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/',
            isBig: false,
            name: '沙县小吃（龙山中路店）',
            isAdd: false,
            rate: '4.9',
            saleNumber: 59,
            send: false,
            sendStandard: 20,
            sendCost: '配送费￥3.1',
            distance: '162m',
            minute: 20,
            saleInf: [
              {
                saleIcon: '减',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '减',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '减',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '减',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '减',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '减',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '减',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '减',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '减',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '减',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '减',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '减',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              },
              {
                saleIcon: '减',
                saleDetail: '满35减10，满35减10，满35减10，满35减10，满35减10，满35减10，满35减10',
              }
            ]
          }
        }
      ],
      foodModulItems: [
        {
          foodModul: {
            router: 'Login',
            imgUrl: 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '美食'
          }
        },
        {
          foodModul: {
            router: 'Login',
            imgUrl: 'https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '商超便利'
          }
        },
        {
          foodModul: {
            router: 'Login',
            imgUrl: 'https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '水果'
          }
        },
        {
          foodModul: {
            router: 'Login',
            imgUrl: 'https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '医药健康'
          }
        },
        {
          foodModul: {
            router: 'Login',
            imgUrl: 'https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '浪漫鲜花'
          }
        },
        {
          foodModul: {
            router: 'Login',
            imgUrl: 'https://fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '跑腿代购'
          }
        },
        {
          foodModul: {
            router: 'Login',
            imgUrl: 'https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '汉堡披萨'
          }
        },
        {
          foodModul: {
            router: 'Login',
            imgUrl: 'https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '厨房生鲜'
          }
        },
        {
          foodModul: {
            router: 'Login',
            imgUrl: 'https://fuss10.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '炸鸡炸串'
          }
        },
        {
          foodModul: {
            router: 'Login',
            imgUrl: 'https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '地方菜系'
          }
        }
      ]
    }
  },
  methods: {
  },
  components: {
    shop,
    foodModule
  }
}
</script>
<style scope>
.homepage {
  height: 100%;
  width: 100%;
  background: #fff;
}
.adress {
  padding: 0.26667rem 0.37333rem 0;
  height: 0.92rem;
  background-image: linear-gradient(90deg,#0af,#0085ff);
  background-image: -webkit-linear-gradient(left,#0af,#0085ff);
}
.searchBar {
  background-image: linear-gradient(90deg,#0af,#0085ff);
  background-image: -webkit-linear-gradient(left,#0af,#0085ff);
  padding: 0.2rem 0.37333rem;
  margin: -0.013333rem 0;
  position: sticky;
  position: -webkit-sticky; 
  top: 0;
  z-index: 999;
}
.search {
  text-decoration:none;
  display: block;
  height: 0.96rem;
  background: #fff;
  text-align: center;
  line-height: 0.96rem;
  font-size: 0.37333rem;
  color: #999;
}
.search>svg {
  display: inline-block;
  width: 0.426667rem;
  height: 0.426667rem;
  /* margin-right: 0.133333rem; */
  vertical-align: middle;
}
.foodClass {
  height: 4.72rem;
  position: relative;
}
.food {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.index {
  margin-bottom: 0.21333rem;
  /* font-size: 0; */
  padding: 0 0.266667rem;
}
.index1 {
  margin-bottom: 0.08rem;
  height: 3rem;
  background: #f7f7f7;
}
.index2 {
  margin-bottom: 0.106667rem;
  height: 1.06667rem;
  border-radius: 0.053333rem;
  background: #f7e3ac;
}
.index3 {
  margin-top: 0.13333rem;
  height: 2.346667rem;
  border-radius: 0.106667rem;
  width: 100%;
  position: relative;
}
.index3-1 {
  position: absolute;
  z-index: 2;
  width: 1.46777rem;
  height: 0.50667rem;
  line-height: 0.50667rem;
  background-color: rgba(0,0,0,0.5);
  border-radius: 0.26667rem;
  font-size: 0.26667rem;
  text-align: center;
  color: #eee;
  right: 0.05333rem;
  bottom: 0.05333rem;
}
.imgLink{
  width: 100%;
  height: 100%;
}
.imgLink>img {
  width: 100%;
  height: 100%;
}
.shopList-title {
  height: 0.96rem;
  line-height: 0.96rem;
  font-size: 0.4rem;
  text-align: center;
}
.shopList-title::before, .shopList-title::after {
  content: "";
  height: 0.02667rem;
  width:0.5333rem;
  background: #999;
  display: inline-block;
  vertical-align: middle;
  margin-right:0.34667rem; 
}
.shopList-title::after {
  margin-left:0.34667rem; 
  margin-right: 0; 
}
.shopList-filter {
  position: sticky;
  position: -webkit-sticky; 
  top: 1.36rem;
  z-index: 999;
}
.filterBox {
  display: flex;
  height: 1.05333rem;
  background: #fff;
  line-height: 1.05333rem;
  font-size: 0.37333rem;
}
.filter {
  width: 25%;
  text-align: center;
}
</style>
