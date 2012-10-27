data = require("self").data;
storage = require("simple-storage").storage;

exports.main = function() {
    var l_s_urls = storage.urls;
    var l_s_url;    
    if(l_s_urls) {
        l_s_urls = l_s_urls.split("\n");
        for(var l_i=0;l_i<l_s_urls.length;l_i++) {
            l_s_url = l_s_urls[l_i].replace(/^\s+/g,'').replace(/\s+$/g,'');
            if(l_s_url)
                require("tabs").open({url:l_s_url, isPinned:true, inBackground:true});
        }
    }
};

require("widget").Widget({
    id: "pintabs",
    label: "Open AutoPinTabs",
    contentURL: data.url("caja.png"),
    onClick: function(event) {
        var m_o_param = require("panel").Panel({
            width:620,
            height:256,
            contentURL: data.url("Caja.html"),
            contentScriptFile: data.url("Caja.js"),
            onMessage: function(p_s) {
                if(p_s!='CLOSE') storage.urls = p_s;
                m_o_param.destroy();
            },
            onShow: function() {
                m_o_param.port.emit("setUrls", storage.urls);
            }
        });
        m_o_param.show();
    }
});
