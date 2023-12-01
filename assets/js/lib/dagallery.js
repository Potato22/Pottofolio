(() => {
    const getChildTags = (dom, name) => Array.from(dom.children).filter(c => c.tagName === name);
    const getChildTag = (dom, name) => Array.from(dom.children).find(c => c.tagName === name);

    async function getFeedImages(url) {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`Failed to get feed: ${response.status}: ${response.statusText}`);
        const feedText = await response.text()
        const feedDocument = new DOMParser().parseFromString(feedText, 'text/xml')
        const feedItems = getChildTags(getChildTag(feedDocument.documentElement, 'channel'), 'item')
        return feedItems.map(item => ({
            title: getChildTag(item, "title").textContent,
            link: getChildTag(item, "link").textContent,
            imageUrl: getChildTag(item, "media:content").getAttribute("url"),
        }))
    }

    window.daGallery = function (element, username, galleryId) {
        //CHANGE THE AMOUNT OF IMAGES TO DISPLAY BY CHANGING $limit=<num>
        //IMAGE LIMIT IS 60
        const url = `https://backend.deviantart.com/rss.xml?q=gallery:${username}/${galleryId}&limit=12`
        getFeedImages(url).then(images => {
            const fragment = document.createDocumentFragment()
            for (const image of images) {
                const img = new Image()
                //You can change the template of what the script will inject into DOM here. Feel free to customize!
                img.setAttribute('data-aos', 'zoom-in')
                img.setAttribute('class', 'imgs cards imgcard daImgs')
                img.setAttribute('orbReact', 'true')
                img.src = image.imageUrl
                img.alt = image.title
                fragment.append(img)
            }
            element.replaceChildren(fragment)
            //send "loaded" state to zoomtrigger.js
            element.dispatchEvent(new CustomEvent("galleryLoaded"))
            $(".loadblock").fadeOut('fast');
        })
    }

    // Convinient data-based init
    window.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('[data-da-gallery]').forEach(e => {
            const data = e.dataset.daGallery.split("/")
            daGallery(e, data[0], data[1])
        })
    })

})()
