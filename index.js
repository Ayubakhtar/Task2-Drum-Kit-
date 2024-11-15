// Get the number of drum buttons on the page

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var shiftingColor = document.querySelectorAll("h1");

// Loop through each drum button
for (let i = 0; i < numberOfDrumButtons; i++) {
    // Add click event listener to each drum button
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // Get the inner HTML of the clicked button
        
        var buttonInnerHtml = document.querySelectorAll("button")[i].innerHTML;
        // Call keyChecker function with the inner HTML as argument
        
        keyChecker(buttonInnerHtml);
    })
}

// Add keydown event listener to the whole document
document.addEventListener("keypress", (event)=>{
    // Call keyChecker function with the pressed key as argument
    keyChecker(event.key);
});

// Function to check which key is pressed and play corresponding audio
function keyChecker(key){
    switch (key) {
        // If 'w' key is pressed, play tom-1 sound
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        // If 'a' key is pressed, play tom-2 sound
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        // If 's' key is pressed, play tom-3 sound
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        // If 'd' key is pressed, play tom-4 sound
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        // If 'j' key is pressed, play snare sound
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        // If 'k' key is pressed, play kick-bass sound
        case "k":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
        // If 'l' key is pressed, play crash sound
        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        // If any other key is pressed, log its inner HTML
        default:
            console.log(key);
            break;
    }
}


    





















/* So this is how you can make multiply objects in a variable*/
// var numberOfBoys = {
//     name: "Hasan" , 
//      age: 19,
//      subjectCurrentlyStuding: ["MERN" , "DSA"]
     
//  }
//  var numberOfBoysHassan = {
//      name: "Hassan",
//      age: 20,
//      subjectCurrentlyStuding: ["Hindi" , "English"]
//  }
//  console.log("Hello My name is " + numberOfBoys.name);
//  console.log("Hello My name is " + numberOfBoysHassan.name); 


// Now we have to make housekeaper variable of multiple house keepers and this is how its done 
// var housekeaper1 = {
//     name: "Anha",
//     qualifications: "None",
//     work_Experience: "19 Years",
//     howManyLanguages: ["Hindi" , "English" , "Urdu" , "russian"]
// }
// var housekeaper2 = {
//     name: "Azra",
//     qualifications: "MBA Student",
//     work_Experience: "19 Years",
//     howManyLanguages: ["Hindi" , "English" , "Urdu" , "persian"]
// }
// var housekeaper3 = {
//     name: "Roshni",
//     qualifications: "Polytechnic Student",
//     work_Experience: "19 Years",
//     howManyLanguages: ["Hindi" , "English" , "Urdu" , "Spanish"]
// }
// var housekeaper4 = {
//     name: "Hiba",
//     qualifications: "Biotechnology",
//     work_Experience: "19 Years",
//     howManyLanguages: ["Hindi" , "English" , "Urdu" , "mexican"]
// }
// var housekeaper5 = {
//     name: "SARA",
//     qualifications: "Basketball player",
//     work_Experience: "19 Years",
//     howManyLanguages: ["Hindi" , "English" , "Urdu" , "Bangla"]
// }
// Now we are going to make constructor funtion which creates function which has objects in it.
// function BellBoysOfHotel(name,workExperience,Degree,Skills){ //here this functions collects all the information which is being provided by the receptionist
//     this.name = name;
//     this.workExperience = workExperience;
//     this.Degree = Degree;
//     this.Skills = Skills;
//     this.clining = function (){            // here this funtion makes the bellboy do clining.
//         alert("Yes Sir I'm Clining"); 
//     }
// }
// var bellBoys1 = new BellBoysOfHotel("Kaif", 5 + "+ Years" , "B.C.A", ["HTML5", "CSS3" , "BootStrap"]);
// var bellBoys2 = new BellBoysOfHotel("Hasan", "none" , "B.C.A", ["HTML5", "CSS3" , "BootStrap", "node.js", "JavaScript", "S.E.O", "WordPress" , "Gaming"]);
// var bellBoys3 = new BellBoysOfHotel("Hassan", 2 + "Years" , "B.C.A" , ["none"]);
// var bellBoys4 = new BellBoysOfHotel("Saad", 1 + "Years", "B.B.A", ["CHhapri"]);
// var bellBoys5 = new BellBoysOfHotel("Amaan",8 + "Years" , "B.Pharma", ["Sasta pharmisist"]);
// var bellBoys6 = new BellBoysOfHotel("Samad", 4 + "Years", "Neet", ["aspirant"]);















