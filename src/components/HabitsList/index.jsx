import React from 'react';
import PropTypes from 'prop-types';
import Habit from "../Habit";

const db = {
    "habits": {
        "12345": {
            "habitID12345": {
                "habitID": "habitID12345",
                "title": "Качать прес",
                "category": "helth",
                "startTime": "01.05",
                "duration": {
                    "mon": true,
                    "tue": false,
                    "wed": true,
                    "thu": false,
                    "fri": true,
                    "sat": false,
                    "sun": false
                },
                "timeForRemember": "12:00"
            },
            "habitID54321": {
                "habitID": "habitID54321",
                "title": "Бегать утром",
                "category": "helth",
                "startTime": "01.05",
                "duration": {
                    "mon": true,
                    "tue": false,
                    "wed": true,
                    "thu": false,
                    "fri": true,
                    "sat": false,
                    "sun": false
                },
                "timeForRemember": "08:00"
            }
        }
    }
};

const HabitsList = ({})=> {
    return (
        <div>
                <Habit />
        </div>
    )
};

export default HabitsList;
