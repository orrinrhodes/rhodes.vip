var ip = '';
getIPs().then(res => {
    ip = res[0];
    console.log(ip);
//  document.getElementById('thisyou').innerHTML=`this you? <u>${res[0]}</u> 📌`;
    document.getElementById('thisyou').innerHTML='placeholder';
    }
);
