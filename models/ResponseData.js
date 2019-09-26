class ResponseData{

   
    constructor(code = "sss", msg = "sdasd"){

        this.code = code;
        this.msg = msg;
        
    }

    set code(code){

        this.code = code;
    }

    get code(){

        return this.code;
    }

    set msg(msg){

        this.msg = msg;
        
    }

    get msg(){
        return this.msg;
    }

  

   
}

export default ResponseData;