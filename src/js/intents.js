var weatherCommands = [{
    indexes: [
        "Wie wird das Wetter morgen"
    ],
    action: function(){
        artyom.say('Das Wetter wird morgen sehr schlecht!');
    }
},{
    indexes: [
        "Brauche ich eine Jacke?"
    ],
    action: function(){
        artyom.say('Nein du brauchst keine Jacke');
    }
}];

artyom.addCommands(weatherCommands);