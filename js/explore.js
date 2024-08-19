
let date = new Date().toDateString()

document.querySelector("#date").innerHTML = date


let ideas = document.querySelector('#ideas')

let array = [
    
    {cover:'https://i.pinimg.com/564x/83/b9/0f/83b90f4dc64b02759efe00cacae7d3b5.jpg', h4:'Go Big or Go Home', h1:'Glamorous Makeup Looks for Diwali'},

    {cover:'https://i.pinimg.com/564x/54/cf/63/54cf63dd11bacfb4dda9f393a1aa3b6d.jpg', h4:'#DilkiDiwali', h1:'Happy Diwali Greeting and Wallpapers'},

    {cover:'https://i.pinimg.com/736x/d2/16/9f/d2169f756d92311b761f45aaa9698d53.jpg', h4:'Best Buys', h1:'Shopping Spotlight: Festive Fashion'},

    {cover:'https://i.pinimg.com/564x/cb/49/af/cb49afc33f55629fbc18d8d98642da61.jpg', h4:'Diwali Rangoli Designs', h1:'Easy Peasy'},

    {cover:'https://i.pinimg.com/474x/9b/cc/82/9bcc82570b60a391f7f6e3561d19f0e4.jpg', h4:'Serve Your Best Look', h1:'Get Ready to Diwali Party in style'},

    {cover:'https://i.pinimg.com/564x/5f/a9/8d/5fa98d8d8bed4140d8819bce9e26469f.jpg', h4:'Your Decor Guide', h1:'Safe, Sustainable & Grand Diwali Decor'},
]

let data = ``

array.forEach(function(e,i){
    data += `<div id="${i}" class="h-[60vh] w-full cursor-pointer lg:w-[30%] py-4 my-4 bg-[url(${e.cover})] bg-cover bg-center rounded-3xl flex flex-col justify-end align-center">
   <h4 class="text-xl text-center drop-shadow-md">${e.h4}</h4>
   <h1 class="text-4xl text-center font-semibold">${e.h1}</h1>
</div>` 
})

ideas.innerHTML = data