import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Box } from '@chakra-ui/react';

import { POST, BASE_URL } from "js-common/constants";
import { ADMIN_ROLE, TREASURER_ROLE, ADMIN_READ_ONLY_ROLE } from "js-common/constants";
import { ERROR, WARNING, INFO, SUCCESS } from "js-common/constants";
import { CommonForm } from "chakra-react-common/common-form";

const signinStructure = {
    username: ['username', '', 'text', false, true],
    password: ['password', '', 'password', false, true],
}

// *****************
//  SignIn
// *****************

export const SignIn = ({
    
    keyProps,
    setKeyProps,
    setNotification

}) => {

    const navigate = useNavigate();

    const footerAction = () => {
        navigate('/user/register')
    }

    const onSuccessAction = (user) => {

        window.sessionStorage.setItem('accessToken', user.accessToken );

        if (window.sessionStorage.getItem('accessToken') == null) { console.log("accesstoken NOT set") }

        setKeyProps( {...keyProps, username: user.username, role:user.role, uid:user.id, uState: user.state} );
        setNotification( {text: `user ${user.username} successfully logged in`, level: INFO });
        navigate('/report');
    };

    const title = 'sign-in';
    const subtitle = <><Box>Existing account holders</Box><Box pb='4'>enter your username and password below</Box></>
    const getUrl = `${BASE_URL}user/logon/`;
    const putUrl = `${BASE_URL}user/logon/`;
    const doItMethod = POST;

    return (

        <Box ml={{base:'2', sm:'8', md:'12', lg:'16'}} maxWidth='36rem'>

            <CommonForm
                dataIn={null}
                showHelp={keyProps.showHelp}
                structure={signinStructure}
                title={title}
                subtitle={subtitle}
                getUrl={null}
                putUrl={putUrl}
                doItMethod={doItMethod}
                setNotification={setNotification}
                onSuccessAction={onSuccessAction}
                warnOnNavigateAway={false}
            />
        </Box>
    )
};

