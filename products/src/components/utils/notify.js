import React from 'react';
import Toast from 'react-bootstrap/Toast';
import { useState } from 'react';
import ToastCotainer from 'react-bootstrap/ToastContainer';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

function Notify({ notify, cb }) {
    const [showToast, setShowToast] = useState(false);
    useEffect(() => setShowToast(true), [notify]);

    const closeToast = () => {
        setShowToast(false);
        if(cb) { cb(); }
    }
    return (
        <>
            <ToastCotainer className='p-4' position='top-end' style={{ zIndex: 2 }}>
                <Toast className='mb-3' bg={notify.type} show={showToast} onClose={() => closeToast()}>
                    <Toast.Header>
                        <strong className="me-auto">Notification</strong>
                    </Toast.Header>
                    <Toast.Body style={{ color: 'white' }}>
                        {notify.message}
                    </Toast.Body>
                </Toast>
            </ToastCotainer>
        </>
    )
}

Notify.propTypes = {
    notify: PropTypes.object.isRequired,
    cb: PropTypes.func
}

export default Notify;