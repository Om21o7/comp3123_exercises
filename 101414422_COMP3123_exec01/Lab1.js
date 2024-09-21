// Exercise 1  : Capitalise First letter of the word  //

function capital(sentence)  {
    const words = sentence.split(" ");

    return words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }
    ).join (" ");

}


let result = capital("the quick brown fox")

console.log(result);


// Exercise 2:  Find the largest of the three numbers //

function max (a,b,c){
    if(a>b && a>c)
    return a;
    else if (b>a && b>c)
    return b;
    else
    return c; 
}
console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));


// Exercise 3: To move last three letter of a word to start of the given string and 
// The string lengh must be greater or equal to three.


function right(word) {
    if (word.length > 3) {
        return word.substring(word.length - 3) + word.substring(0, word.length - 3);
    }
    return word;
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));


// Exercise 4: To find type of angle 

function angle_Type(angle){
    if(angle < 90){
        return "Acute Angle ";
    }
    if(angle == 90) {return "Right Angle"}
    if(angle < 180) {return "Obtuse Angle"}
    if(angle == 180 ) {return "Straight Line"}
}
console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))

