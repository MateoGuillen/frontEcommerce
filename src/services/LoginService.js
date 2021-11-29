import Api from './Api'
var url = '/auth/login'
var url2 = '/auth/me'

export default  {

     authLogin(obj){
        Api().post(url,obj).then((response)=>{

            //console.log(response.data)

            const {access_token, token_type} = response.data;

            //console.log(access_token)
            //console.log(token_type)

            const options = {
                headers: {
                    "Authorization" : `${token_type} ${access_token}`
                    //'Accept': 'application/json',
                    //'Content-Type': 'application/json',
                } 
            };

            //console.log(options.headers.Authorization)

             Api().post(url2,null,options).then((profile)=>{
                alert("Estas Logueado Usuario " + profile.data.name)
            })
        }).catch(()=>{
            window.location.reload()
        })
    }
    

}
