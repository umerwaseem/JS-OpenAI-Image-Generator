const API_Key = "xxxxxxxxxxxxxxxxxxx"//YOUR API KEY;

const submitIcon = document.querySelector("#submit-icon")
const inputElement = document.querySelector("input")
const imageSection = document.querySelector(".image-section")


const getImages = async () => {
    const option = {
        method: "POST",
        headers:{
            "Authorization": `Bearer ${API_Key}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            prompt: inputElement.value,
            n:4,
            size: "1024x1024"
        })
    }
    try{
        const response= await fetch("https://api.openai.com/v1/images/generations", option)
        const data = await response.json()
        console.log(data);

        data?.data.forEach(imageObject => {
            const imageContainer = document.createElement('div')
            imageContainer.classList.add('image-container')
            const imageElement = document.createElement('img')
            imageElement.setAttribute('src', imageObject.url)
            imageContainer.append(imageElement)
            imageSection.append(imageContainer)
        }); 
    
    }
    catch(errors){
        console.error(errors)
    }
}

submitIcon.addEventListener('click', getImages)
