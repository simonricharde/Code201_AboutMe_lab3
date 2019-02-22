"use strict";
var shorBio = 'My name is SIMON RICHARD ESWARAMOORTHY, I have 7 years experience as Workday Integration Consultant and overall 10 years experience in software development. Worked on 6 End-to-End implementations in Workday. Currently in Seattle, WA location. Kindly reach me @ 609-XXX-XXXX';
var correctAnswers = 0;
var name = '';

           
            while (name.length < 1) {
                name = prompt('What is your name?');                              
           }

           console.log('Name:', name);
            if(name.length > 0) {
                alert('Hi ' + name + '!. Thanks for visiting my page. Let\'s play some Guessing Game');
            }
            var isSixFeetTall = "";
            
            while (isSixFeetTall.length < 1  && name.length > 0) {
               
                isSixFeetTall = prompt('Am I 6 Feet Tall? Say Yes/No');
                
                while(isSixFeetTall.length > 0 && ! (isSixFeetTall.toUpperCase() === "yes".toUpperCase() || isSixFeetTall.toUpperCase() === "no".toUpperCase() || isSixFeetTall.toUpperCase() === "y".toUpperCase() || isSixFeetTall.toUpperCase() === "n".toUpperCase())) {
                    isSixFeetTall = prompt('Am I 6 Feet Tall? Say Yes/No');                   
                }
                
            }
            console.log('isSixFeetTall:', isSixFeetTall);
            if(isSixFeetTall.length > 0 && isSixFeetTall.toUpperCase() === "no".toUpperCase() || isSixFeetTall.toUpperCase() === "n".toUpperCase()) {
                alert("Wow! Right Answer, I am Not 6 feet Tall");
                correctAnswers = correctAnswers +1;
            }
            else if(isSixFeetTall.length > 0) {
                alert('Nah, That\'s okay');
            }

            var isCoder = "";
            
            while (isCoder.length < 1  && name.length > 0 ) {
                isCoder = prompt('I like Coding? Say Yes/No');
                  
                while(isCoder.length > 0 && ! (isCoder.toUpperCase() === "yes".toUpperCase() || isCoder.toUpperCase() === "no".toUpperCase() || isCoder.toUpperCase() === "y".toUpperCase() || isCoder.toUpperCase() === "n".toUpperCase())) {
                    isCoder = prompt('I like Coding? Say Yes/No');                   
                }             
            }
            console.log('isCoder:', isCoder);
            if(isCoder.length > 0 && isCoder.toUpperCase() === "no".toUpperCase() || isCoder.toUpperCase() === "n".toUpperCase()) {
                alert("Nah, That\'s not correct");
            } else if(isCoder.length > 0) {
                alert('Wow! Right Answer, I like coding');
                correctAnswers = correctAnswers +1;
            }

            var workLocation = "";
            
            while (workLocation.length < 1  && name.length > 0 ) {
                workLocation = prompt('My current location is Seattle? Say Yes/No');
                  
                while(workLocation.length > 0 && ! (workLocation.toUpperCase() === "yes".toUpperCase() || workLocation.toUpperCase() === "no".toUpperCase() || workLocation.toUpperCase() === "y".toUpperCase() || workLocation.toUpperCase() === "n".toUpperCase())) {
                    workLocation = prompt('My current location is Seattle? Say Yes/No');                    
                }             
            }
            console.log('workLocation:', workLocation);
            if(workLocation.length > 0 && workLocation.toUpperCase() === "no".toUpperCase() || workLocation.toUpperCase() === "n".toUpperCase()) {
                alert("Nah, That\'s not correct");
            } else if(workLocation.length > 0) {
                alert('Great. U R Right. I am in Seattle.');
                correctAnswers = correctAnswers +1;
            }

            var isHobbyMovies = "";
            
            while (isHobbyMovies.length < 1  ) {
                isHobbyMovies = prompt('Is my hobby watching Movies? Say Yes/No');
                  
                while(isHobbyMovies.length > 0 && ! (isHobbyMovies.toUpperCase() === "yes".toUpperCase() || isHobbyMovies.toUpperCase() === "no".toUpperCase() || isHobbyMovies.toUpperCase() === "y".toUpperCase() || isHobbyMovies.toUpperCase() === "n".toUpperCase())) {
                    isHobbyMovies = prompt('Is my hobby watching Movies? Say Yes/No');                   
                }             
            }
            console.log('isHobbyMovies:', isHobbyMovies);
            if(isHobbyMovies.length > 0 && isHobbyMovies.toUpperCase() === "no".toUpperCase() || isHobbyMovies.toUpperCase() === "n".toUpperCase()) {
                alert("Nah, That\'s Wrong");
            } else if(isHobbyMovies.length > 0) {
                alert('Super. You got it!');
                correctAnswers = correctAnswers +1;
            }

            var likeCooking = "";
            
            while (likeCooking.length < 1  && name.length > 0 ) {
                likeCooking = prompt('Do I like Cooking? Say Yes/No');
                 
                while(likeCooking.length > 0 && ! (likeCooking.toUpperCase() === "yes".toUpperCase() || likeCooking.toUpperCase() === "no".toUpperCase() || likeCooking.toUpperCase() === "y".toUpperCase() || likeCooking.toUpperCase() === "n".toUpperCase())) {
                    likeCooking = prompt('Do I like Cooking? Say Yes/No');                    
                }             
            }
            console.log('likeCooking:', likeCooking);
            if(likeCooking.length > 0 && likeCooking.toUpperCase() === "no".toUpperCase() || likeCooking.toUpperCase() === "n".toUpperCase()) {
                alert('Fantastic. I Dont like cooking');
                correctAnswers = correctAnswers +1;
            } else if(likeCooking.length > 0 ) {
                alert("No way, I dont like cooking");
            }
			
			var luckyNumber=0;
            
            while (luckyNumber < 10 &&  luckyNumber === 0) {
                luckyNumber = parseInt(prompt('Can you guess my Lucky Number? Between 1 and 10'));
                 
                while(isNaN(luckyNumber) || luckyNumber === null) {
                    luckyNumber = parseInt(prompt('Can you guess my Lucky Number? Between 1 and 10'));                    
                }             
            }
            console.log('luckyNumber:', luckyNumber);
            if(luckyNumber === 7) {
                alert('Fantastic. 7 is my Lucky Number');
                correctAnswers = correctAnswers +1;
            } else {
                alert("No, Wrong guess");
            }

            var stateLived = ['New Jersey', 'New York', 'California', 'North Carolina', 'Florida'];
            var stateAnswer = prompt('Can you guess a state that I have lived in besides Washington?');
            var flag;

for (var i = 0; i < stateLived.length; i++) {
    console.log('current iteration:', stateLived[i]);

    if (stateAnswer === stateLived[i]) {
        correctAnswers = correctAnswers +1;
        alert('Hey, You got it right!  You scored '+ correctAnswers+' out of 7');
        flag = true;
        break;
    }
}

if (!flag) {
    alert('No, Not Right!  You scored '+ correctAnswers+' out of 7');
}