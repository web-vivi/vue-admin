import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);
const store=new Vuex.Store({
    state:{
        token:localStorage.getItem("token")
    },
    mutations:{
        setToken(state,res){
            state.token=res;
            localStorage.setItem("token",res)
        }
    },
    actions:{
        setToken({commit},v){
            return new Promise((resolve,reject)=>{
                commit("setToken",{
                    token:v
                })
                resolve("登陆成功");
            });
        }
    }
});
export default store;