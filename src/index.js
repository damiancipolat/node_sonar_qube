const express =  require('express');
const app =  express();
const port =  process.env.PORT  ||  8080
// Route to be tested
app.get('/', (req, res) => {
    return res.status(200).json({ nome:  'Rafael Dias' });
});

const validate_schema=()=>true;
const create= async ()=>true;

const signin = async (args,verified,token_data) => {

    if (validate_schema({ type: "string" }, args, false)) {

        try {

            if (verified) {

                  if (token_data.name !== null) {

                    const username = token_data.name;
                    const email = token_data.email;

                    await create({
                        token,
                        data: {
                            user_id,
                            language,
                            timezone,
                            fullname,
                            email,
                            country
                        },
                        request_id: context.request_id
                    });

                    return {
                        error: false,
                        code: 1000,
                        data: { fullname, email, token, timezone }
                    };

                } else {


                    return {
                        error: true,
                        code: 1004,
                        message: "Unable to login",
                        data: null
                    };

                }

            } else {

                return {
                    error: true,
                    code: 1001,
                    data: null,
                    message: "Token verification failed"
                };

            }

        } catch (error) {


            return {
                error: true,
                code: 1001,
                data: null,
                message: error.message
            };

        }

    } else {

        return {
            error: true,
            code: 1013,
            message: codes(1013),
            data: null
        };

    }

};

var nombre = 'damian'

const saludar = ()=>{

    try {
        console.log(1111);
      } catch (ex) {  // Noncompliant
        throw ex;
      }

}

//todo
const tmp = ()=>null;

const sub = (a)=>{

    if (a=='1')
        return 3;

    const b = a+1+2+3+4+5+6;
    return b;

}

// Application running on the door
let server = app.listen(port, () => {
    console.log(`Application running on ${port}`);
});

module.exports  = server;
