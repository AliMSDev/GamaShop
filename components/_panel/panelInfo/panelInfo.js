import React from 'react'

// This is PanelInfo Component
const PanelInfo = () => {

    // give Dates 
    let dates = new Date();

    // give year, month, day of month(date), date of week(days)
    const year = dates.getFullYear();
    const month = (dates.getMonth()) + 1;
    const date = dates.getDate();
    const days = dates.getDay();
    
    // day variable
    let day;

    // conditional rendering of what date is today
    switch (days) {
        case 0:
            day = 'Sunday'
            break;
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'Wednesday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Saturday'
            break;
        default:
            day = 'error'
    }

    // give user from Local Storage and give it to getUser
    let getUser = JSON.parse(localStorage.getItem('user'));
    return (
        <div className='col-xs-12 col-s-7'>
            <h3>{year}/{month}/{date}</h3>
            <h3>Today is {day}</h3>
            <h4>Welcome {getUser.username} </h4>
        </div>
    )
}

export default PanelInfo
