let instance :any;
 class DBConn {


    private constructor() {

    }


    static getInstance() {

        if (!instance) {
            instance = new DBConn();
        }

        return instance;
    }
}


console.log(typeof DBConn.getInstance());




