function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "You're a good Kitty! What should you do that doesn't cause trouble?";
        document.getElementById("choice1").innerHTML = "Clean your paws";
        document.getElementById("choice2").innerHTML = "Lay on owner's favorite blanket";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "Let's be bad! What is there to eat?";
        document.getElementById("choice1").innerHTML = "Human food, YUM!";
        document.getElementById("choice2").innerHTML = "All the treats you want!";
    } else if (choice == 1 && answer1 == "Clean your paws") {
        document.getElementById("story").innerHTML = "You're all clean now, but you miss your owner. What do?";
        document.getElementById("choice1").innerHTML = "Meow at the door for roughly 2 hours";
        document.getElementById("choice2").innerHTML = "Smell owner's gym shoes";
    } else if (choice == 2 && answer2 == "Lay on owner's favorite blanket") {
        document.getElementById("story").innerHTML = "Oh no, you got fur all over the blanket! How do you fix it?";
        document.getElementById("choice1").innerHTML = "Lick it off and cough it up later";
        document.getElementById("choice2").innerHTML = "Pretend it wasn't you";
    } else if (choice == 1 && answer1 == "Human food, YUM!") {
        document.getElementById("story").innerHTML = "Uh oh! You feel sick from all the human food! Which one of your favorite 'puking spots' will you choose?";
        document.getElementById("choice1").innerHTML = "On the antique rug in the living room";
        document.getElementById("choice2").innerHTML = "In your owner's slippers";
    } else if (choice == 2 && answer2 == "All the treats you want!") {
        document.getElementById("story").innerHTML = "BURRRRRP! You ate all the treats and your owner will be so mad! Where are you hiding?";
        document.getElementById("choice1").innerHTML = "Under the bed";
        document.getElementById("choice2").innerHTML = "In the bathtub";
    }
    // might need to add more of these depending on how many outcomes there are.
    else if (choice == 1 && answer1 == "Pretend it wasn't you") {
        document.getElementById("story").innerHTML = "You decide to rub up against your owner when they come home. Hope for the best or try again?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "In your owner's slippers") {
        document.getElementById("story").innerHTML = "You decide to pretend to be asleep so you don't get in trouble. Hope for the best or try again?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    }