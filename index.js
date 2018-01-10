const path = require('path')
const builder = require('xmlbuilder')
const fs = require('fs')

const xml = builder.create('dependencies')

fs.readdir('./lib', (err, files) => {
    files.forEach(file => {
        const dependency = xml.ele('dependency');
        dependency.ele('groupId', file).up()
        .ele('artifactId', file).up()
        .ele('version', file).up()
        .ele('scope', 'system').up()
        .ele('systemPath', '${project.basedir}/src/main/webapp/WEB-INF/lib/'+file)
    })
    xml.end({ pretty: true});
    console.log('montando xml')

    fs.writeFile("./dependencias.xml", xml.toString(), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
})



console.log('Done!')