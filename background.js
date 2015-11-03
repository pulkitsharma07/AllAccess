chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    
    if(tab.title == "Access Denied")
    {
    	chrome.tabs.executeScript(tabId,
    		{
    			code: "chrome.runtime.sendMessage({redirect_url: document.getElementsByClassName('accessdeniedcategoryfont')[1].innerText}, function(response) {});"

    		},
    		function(data)
    		{
    			
    		}
    	);
    }

    chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  		chrome.tabs.update(tabId,{"url" : "http://tojuet.appspot.com/" + message.redirect_url});
	});
});

