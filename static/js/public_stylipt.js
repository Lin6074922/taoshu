exports.install=function (Vue,options) {
    Vue.prototype.classIfy=function(){
        var url=this.url+"/classify"
        this.axios.get(url).then(result=>{
            this.classify=result.data
            // console.log(this.classify)
        })
      }
}