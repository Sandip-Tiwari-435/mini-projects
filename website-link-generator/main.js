function generate_link(){
    var statement=document.getElementById('userInput').value;
    const myArr=statement.split(/[\s"]+/);
    

    var word=myArr[Math.floor(Math.random()*(myArr.length))];

    document.getElementById('link').innerHTML=`<a target="_blank" href='https://www.${word}.com/'>${word}.com</a>`;
    document.getElementById('img-link').innerHTML=`<a target="_blank" href='https://www.google.com/search?tbm=isch&q=${word}'>${word}</a>`;

}