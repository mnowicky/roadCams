var fs = require('fs');
var path = require('path');
import { Parser } from "simple-text-parser";

module.exports = {
    convert: function(file){

        fs.readdir('./mailParser', function(err, files){
            if(err){
                console.error("Could not list directory.", err);
                process.exit(1);
            }

            files.forEach(function(file, index){
                
            })
        })

    }
}