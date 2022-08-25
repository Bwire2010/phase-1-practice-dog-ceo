console.log('%c HI', 'color: firebrick')

document.addEventListener( "DOMContentLoaded", function ()
{
    // alert("")
    fetchDogImages()
    fetchDogBreeds()
} )
function fetchDogImages ()
{
    fetch( "https://dog.ceo/api/breeds/image/random/4" )
        .then( response => response.json() )
        .then( data =>
        {
            let images = data.message;
            images.forEach( (image) =>
            {
                console.log( image )
                loadImagestoDom( image )
            } );
           
        } )
}
    function loadImagestoDom (image)
    {
        let dogsContainer = document.getElementById( "dog-image-container" );
        let ourImage = document.createElement( "img" )
        ourImage.src = image;
        dogsContainer.appendChild(ourImage)
    }

function fetchDogBreeds (breed)
{
    fetch( "https://dog.ceo/api/breeds/list/all" )
        .then( res => res.json() )
        .then( data =>
        {
            const breeds = document.querySelector( "#dog-breeds" )
            Object.keys( data.message ).forEach( ( breed ) =>
            {
                const list = document.createElement( 'li' )
                list.innerText = breed
                breeds.appendChild( list )
            } );
        } )

    
    const dropMenu = document.getElementById( "breed-dropdown" );
    dropMenu.addEventListener( "change", ( eventFn ) =>
    {
        const selectOption = eventFn.target.value
            document.querySelectorAll('li').forEach((list)=>{
                list.style.display = 'block'
                if(list.innerText[0]!==selectOption){
                    list.style.display = 'none'
                }
            })
        })
        document.querySelectorAll('li').forEach((list)=>{
            list.addEventListener('click',()=>{
                console.log(list.innerText)
                list.style.color= 'green'
            })
        })
    }