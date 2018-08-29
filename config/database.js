if(process.env.NODE_ENV=== 'production'){
    module.exports={mongoURI:'mongodb://bkobeng:winsrv2008@ds123562.mlab.com:23562/schools'}
}else{
   module.exports={mongoURI:'mongodb://localhost/vidjot-dev'}
}