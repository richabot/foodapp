let getData=async(url)=>{
    let res=await fetch(url)
    let data=await res.json();

    return data;
    }
    let append =(data,container)=>{
        // data.forEach(({strMeal})=>{
            let p=document.createElement("p")
            // strMeal
            p.innerText=data.meals[0].strMeal;
            console.log(p)
            console.log(data.meals[0].idMeal,"datavakey")
            let p1=document.createElement("img")
            p1.src=data.meals[0].strMealThumb;
            // strMealThumb
            container.append(p,p1);
    
        // })
    }
    let append1 =(data,container)=>{
        // data.forEach(({strMeal})=>{
            let p=document.createElement("p")
            // strMeal
            p.innerText=data.meals[0].strMeal;
            console.log(p)
            console.log(data.meals[0].idMeal,"datavakey")
            let p1=document.createElement("img")
            p1.src=data.meals[0].strMealThumb;
            // strMealThumb
            container.append(p,p1);
    
        // })
    }
    export {getData,append,append1}