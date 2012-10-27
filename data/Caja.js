var m_o_txtApps = document.getElementById('txtApps');
var m_o_btnSave = document.getElementById('btnSave');
var m_o_btnClose = document.getElementById('btnClose');

m_o_btnSave.onclick = function() {
    self.postMessage(m_o_txtApps.value);
}

m_o_btnClose.onclick = function() {
    self.postMessage('CLOSE');
}

self.port.on("setUrls", function(p_s_urls) {
  m_o_txtApps.value = p_s_urls;
  m_o_txtApps.focus();
});

