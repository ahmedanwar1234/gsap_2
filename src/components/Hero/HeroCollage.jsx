import React, { useEffect } from 'react'
import gsap from 'gsap'
function VideElement({src}){
    return <div className='hero-element'>
<video src={src} className='collage-element' autoPlay webkit-playsInline="" loop></video>
    </div>
}
function ImageElement({src}){
    return (
        <div className='hero-element'>
            <img src={src} className="collage-element" alt='' />
        </div>
    )
}



const HeroCollage = () => {



    const leftImages=[
      '  https://lh3.googleusercontent.com/e6W12HucjyEIRg_nLzpW489zhl65yttWZZlU6IvG5CJe3wURC9tmcBCoHh8TU3-L0MmjGysnXYIG-dgyLsPFPMrzJIq0V3GmeKq03w=s0   '     
,'https://lh3.googleusercontent.com/WTVf7YDXhBKR_Mr48EPvuEjsU4zvSGsHl2yBp0S2EHv-a3LT6JqMvEdzxIqWOCV0lS0LuskC429JKYGvMWtohM36qpeeHCeWvhfv=s0'
]
    const rightImages=[
"https://lh3.googleusercontent.com/8-v56O_QtAGD8rHwrrzb1EFdxv3wauakHDxMfAO6Wd45EdAyOHEaGUw9S1RAOnld7juYQT43lY5bihOnKwiHe-E5UOBVxvNkCsk91w=s0",
'https://lh3.googleusercontent.com/Qq1Xlfwa7QS9MWZOHe4G8NHPzbre9uJr8wa1FUXafR52FnCTn6v0PqAt9oIhKzoQNC95ZumfqPsbA-56NPKqBfSLn734K7bafSY0zYE=s0'
    ]
    

    useEffect(()=>{
const tl=gsap.timeline({delay:0.5})
tl.fromTo('.hero-element',{
    y:300,
    
},{y:0,duration:1,delay:function(index){return 0.2*index}},)
    },[])
  return (
    <div className='hero-colage'>
<div className='left-column'>
    {leftImages.map((src)=>{
        return <ImageElement src={src}/>
    })}
    <VideElement src={"https://kstatic.googleusercontent.com/files/dfb9f5574f912670aca64ab32d690302f592ddbb81f4333821403b5501321a9acf26f4b050139637fa2890bbdf88e79259e0ae9472e1394d4be47b54667f6e21"}/>
</div>




<div className='right-column'>
    <VideElement src={"https://kstatic.googleusercontent.com/files/a22c40a5fbc5b4f9eb6fa77e232b4106546d67302244e5c03af4ffcd49a86473f1615f0ffdc8204e62576008050be336dfe0cbb70e754c70f06b4c7ecd4dd3ca"}/>
{rightImages.map((src)=>{
        return <ImageElement src={src}/>
    })}
</div>
    </div>
  )
}

export default HeroCollage