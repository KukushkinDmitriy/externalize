function externalize (doc) {
    "use strict"
    var $links = doc.querySelectorAll('a, area')
    var reg =/^(https?)?:\/\/\w+/i
    ;[].forEach.call($links,$link =>{
        if (reg.test($link.href)) {
            $link.setAttribute('target', '_blank')
            $link.setAttribute('rel', 'external')
        }
    })

}
externalize(document)

