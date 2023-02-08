function renderBusuanzi(){
    if(busuanziConfig()){
        var sc = document.createElement("script");
        sc.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
        sc.async = "async";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(sc, s);
        console.info("[docsify-busuanzi] enable busuanzi success!")
    }else{
        console.info("[docsify-busuanzi] not enable busuanzi!")
    }
}
function busuanziConfig(){
    return window.$docsify.busuanzi;
}

export function install (hook, vm) {
    hook.afterEach(function(html, next) {
        // 解析成 html 后调用。
        // beforeEach 和 afterEach 支持处理异步逻辑
        // ...
        // 异步处理完成后调用 next(html) 返回结果
        if(busuanziConfig()){
            var busuanzi = '<div style="text-align:center;color:gray;">已有<span class="busuanzi-value" id="busuanzi_value_site_uv"></span>人访问 <span id="busuanzi_container_site_pv">总访问量<span id="busuanzi_value_site_pv"></span>次</span></div>';
            html = html + busuanzi;
            renderBusuanzi();
        }
        next(html);
    });
}