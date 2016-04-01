function highlightWord(word){
    var root = document.body
    textNodesUnder(root).forEach(highlightWords);

    function textNodesUnder(root){
        var walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false), text=[], node;
        while(node=walk.nextNode()) text.push(node);
        return text;
    }

    function highlightWords(n){
        for (var i; (i=n.nodeValue.toLowerCase().indexOf(word,i)) > -1; n=after){
            var after = n.splitText(i+word.length);
            var highlighted = n.splitText(i);
            var span = document.createElement('span');
            span.className = 'highlighted';
            span.appendChild(highlighted);
            after.parentNode.insertBefore(span,after);
        }
    }
}

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        if (message.command === "highlight"){
            highlightWord(message.phrase)
        }
    }
);

