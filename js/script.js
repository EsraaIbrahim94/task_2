

// Header
var myElement1 = document.createElement('div');
    myHeader = document.createAttribute('class');
    myText1 = document.createTextNode ('Home About Content Services');
  
    myHeader.value = 'header';  

document.body.appendChild(myElement1);
myElement1.setAttributeNode(myHeader);
myElement1.appendChild(myText1);


// style header 
myElement1.style.backgroundColor = "#789990";
myElement1.style.width = '95%';
myElement1.style.padding = '30px';
myElement1.style.color = '#fff';
myElement1.style.fontSize = '20px';
myElement1.style.wordSpacing = '30';

// About
var myElement2 = document.createElement('div');
    myAbout = document.createAttribute('class');
    myH2 = document.createElement('h2');
    myP1 = document.createElement('p');

myAbout.value = 'about';
myH2.textContent = 'welcome to website';
myP1.textContent = 'The number of lines in a paragraph depend on the size of the browser window If you resize the browser window, the number of lines in this paragraph will change The number of lines in a paragraph depend on the size of the browser window If you resize the browser window, the number of lines in this paragraph will change The number of lines in a paragraph depend on the size of the browser window If you resize the browser window, the number of lines in this paragraph will change';

document.body.appendChild(myElement2);
myElement2.setAttributeNode(myAbout);
myElement2.appendChild(myH2);
myElement2.appendChild(myP1);

// Style about
myH2.style.fontSize = '35';
myP1.style.fontSize = '25';
myElement2.style.border = '2px solid #789990';
myElement2.style.marginTop = '10px';
myElement2.style.padding = '10px';
myH2.style.color = '#789000'

// Content
var myElement3 = document.createElement('div');
    myContent = document.createAttribute('class');
    myImage1 = document.createElement('img');
    myImage2 = document.createElement('img');
    myImage3 = document.createElement('img');
    myImage4 = document.createElement('img');
    myImage5 = document.createElement('img');
    myImage6 = document.createElement('img');


myContent.value = 'content';

document.body.appendChild(myElement3);
myElement3.appendChild(myImage1);
myElement3.appendChild(myImage2);
myElement3.appendChild(myImage3);
myElement3.appendChild(myImage4);
myElement3.appendChild(myImage5);
myElement3.appendChild(myImage6);


myElement3.setAttributeNode(myContent);
myImage1.setAttribute('scr' , 'http://placehold.it/100/100');
myImage2.setAttribute('scr' , 'http://placehold.it/100/100');
myImage3.setAttribute('scr' , 'http://placehold.it/100/100');
myImage4.setAttribute('scr' , 'http://placehold.it/100/100');
myImage5.setAttribute('scr' , 'http://placehold.it/100/100');
myImage6.setAttribute('scr' , 'http://placehold.it/100/100');

// Style 
myImage1.style.width = '350px';
myImage1.style.height = '350px';
myImage1.style.margin = '20px'
myElement3.style.padding = '60px';
myImage1.style.backgroundColor = '#789000';

myImage2.style.width = '350px';
myImage2.style.height = '350px';
myImage2.style.margin = '20px'
myImage2.style.backgroundColor = '#789990';

myImage3.style.width = '350px';
myImage3.style.height = '350px';
myImage3.style.margin = '20px'
myImage3.style.backgroundColor = '#789000';

myImage4.style.width = '350px';
myImage4.style.height = '350px';
myImage4.style.margin = '20px'
myImage4.style.backgroundColor = '#789990';

myImage5.style.width = '350px';
myImage5.style.height = '350px';
myImage5.style.margin = '20px'
myImage5.style.backgroundColor = '#789000';

myImage6.style.width = '350px';
myImage6.style.height = '350px';
myImage6.style.margin = '20px'
myImage6.style.backgroundColor = '#789990';









   







  


   









  






