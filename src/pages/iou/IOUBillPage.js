import React from 'react';
import MoneyRequestModal from './MoneyRequestModal';

function IOUBillPage(props) {
    return (
        <MoneyRequestModal
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            hasMultipleParticipants
        />
    );
}
IOUBillPage.displayName = 'IOUBillPage';
export default IOUBillPage;
