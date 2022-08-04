const obj = {
    name: 'sds',
    aim : 'work',
    nestobj: {
        name: 'sd'
    },
    makeObj : function(){
        console.log("CREATE");
    }
};
console.log ( obj["nestobj"]["name"]);