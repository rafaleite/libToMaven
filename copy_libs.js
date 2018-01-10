const copyFile = require('quickly-copy-file')
const fs = require('fs')
const path = require('path')
var rimraf = require('rimraf')

//fs.mkdirSync('./lib');

const webInfFolder = '/home/rleite/ambiente/workspace-wex/WSFretePortal/src/main/webapp/WEB-INF/lib/'
const references = ['file.reference.ant.jar=/opt/lib/jpos/ant.jar',
'file.reference.appi_out.jar=/opt/lib/pos/appi_out.jar',
'file.reference.commons-collections-2.0.jar=/opt/lib/jpos/commons-collections-2.0.jar',
'file.reference.commons-lang3-3.1.jar=/opt/lib/jpos/commons-lang3-3.1.jar',
'file.reference.commons-logging.jar=/opt/lib/jpos/commons-logging.jar',
'file.reference.jdbm-0.20.jar=/opt/lib/jpos/jdbm-0.20.jar',
'file.reference.jdom.jar=/opt/lib/jpos/jdom.jar',
'file.reference.jpos-1.5.0.jar=/opt/lib/jpos/jpos-1.5.0.jar',
'file.reference.junit-3.8.1.jar=/opt/lib/jpos/junit-3.8.1.jar',
'file.reference.junit-4.12.jar=/opt/lib/junit/junit-4.12.jar',
'file.reference.log4j.jar=/opt/lib/jpos/log4j.jar',
'file.reference.mx4j-impl.jar=/opt/lib/jpos/mx4j-impl.jar',
'file.reference.mx4j-jmx.jar=/opt/lib/jpos/mx4j-jmx.jar',
'file.reference.mx4j-tools.jar=/opt/lib/jpos/mx4j-tools.jar',
'file.reference.optional.jar=/opt/lib/jpos/optional.jar',
'file.reference.xalan_2_0_0.jar=/opt/lib/jpos/xalan_2_0_0.jar',
'file.reference.xdoclet-1.2.jar=/opt/lib/jpos/xdoclet-1.2.jar',
'file.reference.xdoclet-jmx-module-1.2.jar=/opt/lib/jpos/xdoclet-jmx-module-1.2.jar',
'file.reference.xdoclet-mx4j-module-1.2.jar=/opt/lib/jpos/xdoclet-mx4j-module-1.2.jar',
'file.reference.xercesImpl-2.6.2.jar=/opt/lib/jpos/xercesImpl-2.6.2.jar',
'file.reference.xjavadoc-1.0.2.jar=/opt/lib/jpos/xjavadoc-1.0.2.jar',
'file.reference.xml-apis-2.6.2.jar=/opt/lib/jpos/xml-apis-2.6.2.jar']

const copiarLibs = (fullPathOrigem) => {
    const fileName = path.basename(fullPathOrigem)
    const destino = './lib/'+fileName
    
    if (!fs.existsSync(destino)) {
        console.log('Copiando ' + fullPathOrigem)
        copyFile(fullPathOrigem, destino, function(error) {
            if (error) return console.error(error);
        });
    } else {
        console.log('!! arquivo ja existe ' + fullPathOrigem)
    }
}

const libsReferencePath = references.map((lib) => {
    return lib.split('=')[1]
})

const executar = () => {
    libsReferencePath.forEach((lib)=> copiarLibs(lib) )

    /*fs.readdir(webInfFolder, (err, files) => {
        files.forEach(file => {
            copiarLibs(webInfFolder+file)
        })
    })*/
}

executar()



