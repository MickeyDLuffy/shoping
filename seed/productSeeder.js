/**
 * Created by hp on 19/04/2017.
 */
var Products = require('../models/products');
var mongoose = require('mongoose');

//CONNECT TO DB
mongoose.connect('localhost:27017/shopping');
 var products =[
     new Products({
    imagePath: "http://geeknation.com/wp-content/uploads/2015/03/callofduty_header.jpg" ,
    title: "Call of Duty",
    description: "The game of the century",
    price: 17

     }),
     new Products({
         imagePath: "http://cdn.images.dailystar.co.uk/dynamic/184/photos/70000/620x/FIFA-17-Release-Date-New-Features-521304.jpg" ,
         title: "FIFA 17",
         description: "EA sports!! Its in the game",
         price: 10

     }),
     new Products({
         imagePath: "http://cdn2.joygames.me/uploads/screen_shot/JoyGames14409896961066.png" ,
         title: "One Piece Gold Game",
         description: "Kaizoku Onyi, Ore wa na ru",
         price: 35

     }),
     new Products({
         imagePath: "http://s3.amazonaws.com/digitaltrends-uploads-prod/2013/10/the-witcher-3-wild-hunt.jpg" ,
         title: "Witcher",
         description: "Kill the witches . DO it the which ever way",
         price: 150

     })


    ];
var savingdone = 0;
 for(var i =0; i < products.length; ++i){
     products[i].save(function (err, result) {
         savingdone++;

         if(savingdone === products.length){
             exit();
         }

     });

}

function exit () {
    mongoose.disconnect();
}



