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


        var updated = 0;
        chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){

            if(updated == 0)
                chrome.tabs.update(tabId,{"url" : "http://tojuet.appspot.com/" + message.redirect_url});
            
            updated = updated + 1;

        });
                

    }

    if(tab.title == "500 Internal Server Error")
    {
        chrome.tabs.reload(tabId);
    }

   
});

