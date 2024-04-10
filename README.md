# 924 [Front End] Working with Plain Layout


## data facing on plain layout

```
async function getData(){
    let socials = (await (await fetch(`${process.env.HOST}/api/social`)).json())['data']
    let categories = (await (await fetch(`${process.env.HOST}/api/category`)).json())['data']
    return {socials:socials, categories:categories}
}
```