let title = $("#title")
let content = $("#content")
let video = $("#video")
let button = $("#btn")
let clicks = 0

let loadData = async () => {
    let request = await fetch("ajax.json")
    let data = await request.json()
    
    
    length = data.length
    num = clicks++%length
    
    title.text(data[num]["title"]);
    content.text(data[num]["content"])
    video.attr("src", data[num]["url"]);
    
    
}

button.on("click", loadData)